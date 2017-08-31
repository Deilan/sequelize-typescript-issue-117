import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import Player from "./person";

@Table
export default class Team extends Model<Team> {

    public static Players: any;

    @Column
    public name: string;

    @HasMany(() => Player, { foreignKey: "teamId" })
    public players: Player[];
}
