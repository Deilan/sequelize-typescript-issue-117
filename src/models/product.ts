import { Column, HasMany, Model, Sequelize, Table } from "sequelize-typescript";
import User from "./user";

@Table
export default class Product extends Model<Product> {
    @Column({ type: Sequelize.STRING })
    public title: string;

    @HasMany(() => User, { foreignKey: "productId" })
    public public: User[] = [];
}
