import {
  Table,
  Model,
  Column,
  DataType,
  Length,
  AllowNull,
  BeforeCreate,
  BelongsTo,
  ForeignKey,
  HasMany,
  AfterFind,
  AfterCreate,
  BeforeUpdate,
  BeforeSave,
  BeforeBulkUpdate,
  BeforeDelete,
  Default,
  Min,
  Max
} from "sequelize-typescript";

export interface UserInterface {
  id?: number;
  name: string;
  username: string;
  active: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

@Table({ tableName: "users", timestamps: true, paranoid: true })
export default class User extends Model<User> {
  @AllowNull(false)
  @Length({ max: 255 })
  @Column({ field: "name" })
  name!: string;

  @AllowNull(false)
  @Length({ max: 255 })
  @Column({ field: "username" })
  username!: string;

  @AllowNull(false)
  @Column({ field: "active" })
  active!: boolean;

  @AllowNull(false)
  @Column({ type: DataType.DATE, field: "created_at" })
  createdAt!: Date;

  @AllowNull(false)
  @Column({ type: DataType.DATE, field: "updated_at" })
  updatedAt!: Date;

  @AllowNull(true)
  @Column({ type: DataType.DATE, field: "deleted_at" })
  deletedAt!: Date;

  //relationships
  //@BelongsTo(() => Project)
  //project!: Project;

  //@HasMany(() => Task)
  //tasks!: Task[];
}
