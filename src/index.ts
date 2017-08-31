import "reflect-metadata";

// import * as bluebird from "bluebird";
import { Sequelize } from "sequelize-typescript";

import Person from "./models/person";
import Team from "./models/team";
import { tmpFileAsync } from "./tmp";

// const fileAsync = bluebird.promisify(tmp.file);

async function main(): Promise<void> {
    const { path, cleanupCallback } = await tmpFileAsync();
    // tslint:disable:object-literal-sort-keys
    const sequelize = new Sequelize({
        name: "db",
        dialect: "sqlite",
        username: "",
        password: "",
        storage: path,
    });
    // tslint:enable:object-literal-sort-keys
    sequelize.addModels([Person, Team]);
    await Team.create({
        name: "Dream Team",
        players: [{
            name: "Bonnie",
        }, {
            name: "Clyde",
        }],
    }, {
        include: [{
            association: Team.Players,
        }],
    });
    await sequelize.sync();
    cleanupCallback();
}

main();
