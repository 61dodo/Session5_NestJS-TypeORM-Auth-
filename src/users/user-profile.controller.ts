import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import {
  CreateUserProfileDto,
  UpdateUserProfileDto,
} from './dto/user-profile.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('profile')
@UseGuards(AuthGuard('jwt'))
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @Post()
  async createProfile(
    @Request() req,
    @Body() createUserProfileDto: CreateUserProfileDto,
  ) {
    const userId = req.user.id;
    return this.userProfileService.createProfile(userId, createUserProfileDto);
  }

  @Get()
  async getProfile(@Request() req) {
    const userId = req.user.id;
    return this.userProfileService.getProfile(userId);
  }

  @Patch()
  async updateProfile(
    @Request() req,
    @Body() updateUserProfileDto: UpdateUserProfileDto,
  ) {
    const userId = req.user.id;
    return this.userProfileService.updateProfile(userId, updateUserProfileDto);
  }
}
