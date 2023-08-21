import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { SignUpDTO } from 'src/common/dto/auth/signup.dto';
import { AuthService } from './auth.service';
import { UserEntity } from 'src/common/entities/user';
import { LoginDTO } from 'src/common/dto/auth/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from 'src/shared/security/decorators/current-user.decorator';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
    ) { }
    //Register a new user
    @Post('register')
    async signUp(@Body() signUpDTO: SignUpDTO): Promise<UserEntity> {
        return this.authService.signup(
            signUpDTO
        );
    }
    //signin user
  @Post('login')
  async login(@Body() loginDTO: LoginDTO): Promise<{ token: string }> {
    console.log(await this.authService.login(loginDTO));
    return await this.authService.login(loginDTO);
  }

//Get current user
  @Get('user')
  @UseGuards(AuthGuard())
  async profil(@CurrentUser() user: UserEntity) {
    
    console.log('curent user',user);
    return await user;
  }
}
