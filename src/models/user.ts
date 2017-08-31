import { BelongsTo, Column, ForeignKey, HasMany, Model, Sequelize, Table } from "sequelize-typescript";
import Address from "./address";
import Product from "./product";

@Table
export default class User extends Model<User> {
    @Column({ type: Sequelize.STRING })
    public firstName: string;

    @Column({ type: Sequelize.STRING })
    public lastName: string;

    @Column
    @ForeignKey(() => Product)
    public productId: number;

    @BelongsTo(() => Product, { foreignKey: "productId" })
    public product: Product;

    @HasMany(() => Address, { foreignKey: "userId" })
    public addresses: Address[] = [];
}
