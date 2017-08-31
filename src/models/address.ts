import { BelongsTo, Column, ForeignKey, Model, Sequelize, Table } from "sequelize-typescript";
import User from "./user";

@Table
export default class Address extends Model<Address> {
    @Column({ type: Sequelize.STRING })
    public type: string;
    @Column({ type: Sequelize.STRING })
    public line1: string;
    @Column({ type: Sequelize.STRING })
    public line2: string;
    @Column({ type: Sequelize.STRING })
    public city: string;
    @Column({ type: Sequelize.STRING })
    public state: string;
    @Column({ type: Sequelize.STRING })
    public zip: string;

    @Column
    @ForeignKey(() => User)
    public userId: number;

    @BelongsTo(() => User, { foreignKey: "userId" })
    public user: User;
}
