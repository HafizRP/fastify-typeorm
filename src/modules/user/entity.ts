import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Index,
} from "typeorm";
import { TodoList } from "../todolist/entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @Index({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @Column()
  email!: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => TodoList, (todo) => todo.users)
  todoList: TodoList[];
}
