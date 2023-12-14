import { DataTypes } from 'sequelize'
import { sequelize } from '../db/db'

export type TUser = {
    userId?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;

}
export const User = sequelize.define<any, TUser>('Users', {
    userId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

