import { DataTypes, NUMBER } from 'sequelize'
import { sequelize } from '../db/db'
const { INTEGER, STRING, BIGINT, BOOLEAN } = DataTypes

export type TProduct = {
    productId: number;
    name: string;
    description: string;
    listPrice: number;
    salePrice: number;
    categoryId: number;
    qty: number;
    tag: string;
    sku: number;
    isDeleted: boolean;
}
export type TProductMeta = {
    productMetaID: number,
    productId: number;
    imageUrl: string;
    isDeleted: boolean;
}
export type TCategory = {
    categoryId: number;
    name: string;
    isDeleted: boolean;
}
export type TSubCategory = {
    subCategoryId: number;
    name: string;
    categoryId: number;
    isDeleted: boolean;
}

export const Product = sequelize.define<any, TProduct>('Products', {
    productId: {
        type: BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: STRING,
        allowNull: true,
    },
    description: {
        type: STRING,
        allowNull: false
    },
    listPrice: {
        type: NUMBER,
        allowNull: false
    },
    salePrice: {
        type: NUMBER,
        allowNull: false
    },
    categoryId: {
        type: BIGINT,
        allowNull: false
    },
    qty: {
        type: INTEGER,
        allowNull: false
    },
    tag: {
        type: STRING,
        allowNull: false
    },
    sku: {
        type: INTEGER,
        allowNull: false
    },
    isDeleted: {
        type: BOOLEAN,
        defaultValue: false
    }
})

export const ProductMeta = sequelize.define<any, TProductMeta>('ProductMetas', {
    productMetaID: {
        type: BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    productId: {
        type: NUMBER,
        allowNull: false
    },
    imageUrl: {
        type: STRING,
        allowNull: false
    },
    isDeleted:{
        type:BOOLEAN,
        defaultValue:false
    }
})

export const Category = sequelize.define<any, TCategory>('Categories', {
    categoryId: {
        type: BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: STRING,
        allowNull: false
    },
    isDeleted: {
        type: BOOLEAN,
        defaultValue: false
    }
})
export const SubCategory = sequelize.define<any, TSubCategory>('SubCategories', {
    subCategoryId: {
        type: BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: STRING,
        allowNull: false
    },
    categoryId: {
        type: NUMBER,
        allowNull: false
    },
    isDeleted: {
        type: BOOLEAN,
        defaultValue: false
    }
})

/*
    associations
*/
Product.hasMany(ProductMeta, { foreignKey: 'productId' })
ProductMeta.belongsTo(Product, { foreignKey: 'productId' })
Product.belongsTo(Category, { foreignKey: 'categoryId' })

Category.hasMany(SubCategory, { foreignKey: 'categoryId' })
SubCategory.belongsTo(Category, { foreignKey: 'categoryId' })