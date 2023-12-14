import { DataTypes } from 'sequelize'
import { sequelize } from '../db/db'
const { INTEGER, STRING } = DataTypes
/*
    User Table
*/
export type TUser = {
    userId?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;

}
export const User = sequelize.define<any, TUser>('Users', {
    userId: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: STRING,
        allowNull: false
    },
    lastName: {
        type: STRING,
        allowNull: false
    },
    email: {
        type: STRING,
        allowNull: false
    },
    password: {
        type: STRING,
        allowNull: false
    }
})

/*
    Address Table
*/

export type TAddress = {
    addressId?: number;
    houseNo?: string;
    streetName?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    userId?: number
}

export const Address = sequelize.define<any, TAddress>('Addresses', {
    addressId: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    houseNo: {
        type: STRING,
        allowNull: true,
    },
    address: {
        type: STRING,
        allowNull: false
    },
    streetName: {
        type: STRING,
        allowNull: false
    },
    city: {
        type: STRING,
        allowNull: false
    },
    state: {
        type: STRING,
        allowNull: false
    },
    country: {
        type: STRING,
        allowNull: false
    },
    userId: {
        type: STRING,
        allowNull: false
    }
})
User.hasMany(Address, { foreignKey: 'userId', onDelete: 'CASCADE' })
Address.belongsTo(User, { foreignKey: 'userId' })
