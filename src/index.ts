import "reflect-metadata";

import { Sequelize } from "sequelize-typescript";
import tmpAsync from "./tmp-async-helpers";

import Address from "./models/address";
import Product from "./models/product";
import User from "./models/user";
// import Person from "./models/person";
// import Team from "./models/team";

async function main(): Promise<void> {
    const { path, cleanupCallback } = await tmpAsync.file();
    // tslint:disable:object-literal-sort-keys
    const sequelize = new Sequelize({
        name: "db",
        dialect: "sqlite",
        username: "",
        password: "",
        storage: path,
    });
    // tslint:enable:object-literal-sort-keys
    sequelize.addModels([Product, User, Address]);
    await sequelize.sync();
    await createProduct();
    cleanupCallback();
}

async function createProduct(): Promise<Product> {
    // tslint:disable:object-literal-sort-keys
    const product = await Product.create<Product>({
        title: "Chair",
        user: {
            first_name: "Mick",
            last_name: "Broadstone",
            addresses: [{
                type: "home",
                line_1: "100 Main St.",
                city: "Austin",
                state: "TX",
                zip: "78704",
            }],
        },
    }, {
        include: [{model: User, include: [Address]}],
    });
    // tslint:enable:object-literal-sort-keys
    return product;
}

main();
