const User = require("./User");

module.exports = (sequelize, DataTypes) => {
    const RefreshToken = sequelize.define('RefreshToken', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        token: {
            type: DataTypes.TEXT,
            allowNull: false,
        }, 
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
        }
    }, {
        tableName: 'refresh_tokens',
        timestamps: true,
    });

    // RefreshToken.belongsTo(User);

    return RefreshToken;
}