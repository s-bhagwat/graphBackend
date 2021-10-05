import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";

import { Invoices } from "./Invoice";

@Entity()
export class Items extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  quantity!: number;

  @Column()
  pricePerQuantity!: number;

  @Column()
  discount!: number;

  @Column()
  gst!: number;

  @Column()
  totalAmount!: number;

  @ManyToMany((type) => Invoices, (invoice) => invoice.items)
  invoices!: Invoices[];
}
