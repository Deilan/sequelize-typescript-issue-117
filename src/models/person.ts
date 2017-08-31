import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import Team from "./team";

@Table
export default class Player extends Model<Player> {

    @Column
    public name: string;

    @Column
    public num: number;

    @ForeignKey(() => Team)
    @Column
    public teamId: number;

    @BelongsTo(() => Team, { foreignKey: "teamId" })
    public team: Team;
}
