import User from '../../users/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('salary')
class Salary {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: number;

  @Column()
  payment_date: Date;

  @ManyToOne(() => User, user => user)
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Salary;
