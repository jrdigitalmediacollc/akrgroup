import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { UsersService } from '../../users/users.service';
import { AuthService } from '../../auth/auth.service';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: Partial<UsersService>;
  let jwtService: Partial<JwtService>;
  let configService: Partial<ConfigService>;

  const mockUser = {
    id: 'user-1',
    email: 'test@example.com',
    passwordHash: '',
    role: 'ADMIN' as const,
    name: 'Test User',
    phone: '+971501234567',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    mockUser.passwordHash = await bcrypt.hash('password123', 12);

    usersService = {
      findByEmail: jest.fn(),
      findById: jest.fn(),
      create: jest.fn(),
    };

    jwtService = {
      signAsync: jest.fn().mockResolvedValue('mock-token'),
      verify: jest.fn(),
    };

    configService = {
      get: jest.fn().mockImplementation((key: string) => {
        const config: Record<string, string> = {
          JWT_SECRET: 'test-secret',
          JWT_EXPIRES_IN: '15m',
          JWT_REFRESH_SECRET: 'test-refresh-secret',
          JWT_REFRESH_EXPIRES_IN: '7d',
        };
        return config[key];
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: usersService },
        { provide: JwtService, useValue: jwtService },
        { provide: ConfigService, useValue: configService },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  describe('validateUser', () => {
    it('should return user when credentials match', async () => {
      (usersService.findByEmail as jest.Mock).mockResolvedValue(mockUser);
      const result = await authService.validateUser('test@example.com', 'password123');
      expect(result).toEqual(mockUser);
    });

    it('should return null when user not found', async () => {
      (usersService.findByEmail as jest.Mock).mockResolvedValue(null);
      const result = await authService.validateUser('notfound@example.com', 'password123');
      expect(result).toBeNull();
    });

    it('should return null when password does not match', async () => {
      (usersService.findByEmail as jest.Mock).mockResolvedValue(mockUser);
      const result = await authService.validateUser('test@example.com', 'wrongpassword');
      expect(result).toBeNull();
    });
  });

  describe('login', () => {
    it('should return tokens and user on successful login', async () => {
      (usersService.findByEmail as jest.Mock).mockResolvedValue(mockUser);
      const result = await authService.login({ email: 'test@example.com', password: 'password123' });
      expect(result).toHaveProperty('accessToken');
      expect(result).toHaveProperty('refreshToken');
      expect(result.user.email).toBe('test@example.com');
    });

    it('should throw UnauthorizedException on invalid credentials', async () => {
      (usersService.findByEmail as jest.Mock).mockResolvedValue(null);
      await expect(authService.login({ email: 'test@example.com', password: 'wrong' }))
        .rejects.toThrow('Invalid email or password');
    });
  });

  describe('register', () => {
    it('should create user and return tokens on successful registration', async () => {
      (usersService.findByEmail as jest.Mock).mockResolvedValue(null);
      (usersService.create as jest.Mock).mockResolvedValue(mockUser);
      const result = await authService.register({
        email: 'new@example.com',
        password: 'password123',
        name: 'New User',
        role: 'CUSTOMER',
      });
      expect(result).toHaveProperty('accessToken');
      expect(result).toHaveProperty('refreshToken');
      expect(usersService.create).toHaveBeenCalled();
    });

    it('should throw ConflictException if user already exists', async () => {
      (usersService.findByEmail as jest.Mock).mockResolvedValue(mockUser);
      await expect(authService.register({
        email: 'test@example.com',
        password: 'password123',
        name: 'Test User',
        role: 'CUSTOMER',
      })).rejects.toThrow('User with this email already exists');
    });
  });

  describe('refreshTokens', () => {
    it('should return new tokens when refresh token is valid', async () => {
      (jwtService.verify as jest.Mock).mockReturnValue({ userId: 'user-1', email: 'test@example.com', role: 'ADMIN' });
      (usersService.findById as jest.Mock).mockResolvedValue(mockUser);
      const result = await authService.refreshTokens('valid-refresh-token');
      expect(result).toHaveProperty('accessToken');
      expect(result).toHaveProperty('refreshToken');
    });

    it('should throw UnauthorizedException when user not found', async () => {
      (jwtService.verify as jest.Mock).mockReturnValue({ userId: 'user-1' });
      (usersService.findById as jest.Mock).mockResolvedValue(null);
      await expect(authService.refreshTokens('valid-token'))
        .rejects.toThrow('User not found or inactive');
    });
  });
});
