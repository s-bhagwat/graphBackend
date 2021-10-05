import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Items } from "./Items";

@Entity()
export class Invoices extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  buyerName!: string;

  @Column()
  buyerContactNo!: string;

  @Column()
  dateTime!: Date;

  @Column()
  total!: number;

  @Column()
  paid!: boolean;

  @ManyToMany((type) => Items, (item) => item.invoices, { cascade: true })
  @JoinTable()
  items!: Items[];
}
