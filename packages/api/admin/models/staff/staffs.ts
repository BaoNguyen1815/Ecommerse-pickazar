module.exports = function (sequelize: any, DataTypes: any) {
    const customer = sequelize.define('staffs', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,

            field: "user_type",
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,

            field: "name",
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "email",
        },
        creation_date: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "email_verified_at",
        }
    }, {
        tableName: "users",
        freezeTableName: true,
        timestamps: false,
    })

    return customer;
};