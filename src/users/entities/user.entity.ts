import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Board } from '../../boards/board.entity';
import { UserProfile } from './user-profile.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // User와 Board의 1:N 관계 설정
  @OneToMany(() => Board, (board) => board.user)
  boards: Board[];

  // User와 UserProfile의 1:1 관계 설정
  @OneToOne(() => UserProfile, (profile) => profile.user)
  profile: UserProfile;
}
