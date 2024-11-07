export class CreateUserProfileDto {
  bio: string;
  avatarUrl: string;
}

export class UpdateUserProfileDto {
  bio?: string;
  avatarUrl?: string;
}
