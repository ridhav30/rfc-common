import { DataTypes } from 'sequelize'
import { sequelize } from '../db/db'
const { INTEGER, STRING } = DataTypes

/*
    Nav master data
*/
export type TNav = {
    navId: number;
    type: string;
    name: string;
}

export const Nav = sequelize.define<any, TNav>('Navs', {
    navId: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    type: {
        type: STRING,
        allowNull: false,
    },
    name: {
        type: STRING,
        allowNull: false,
    },
});

/*
    Nav Data
*/

export type TNavData = {
    navDataId: number;
    name: string;
    url: string;
    navId: number;
}
export const NavData = sequelize.define<any, TNavData>('NavDatas', {
    navDataId: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: STRING,
        allowNull: false,
    },
    url: {
        type: STRING,
        allowNull: false,
    },
    navId: {
        type: INTEGER,
        allowNull: false,
    },
});
Nav.hasMany(NavData, { foreignKey: 'navId'})
NavData.belongsTo(Nav, { foreignKey: 'navId' })