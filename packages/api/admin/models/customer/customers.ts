module.exports = function (sequelize: any, DataTypes: any) {
    const customer = sequelize.define('customers', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        userType: {
            type: DataTypes.STRING,
            allowNull: false,

            field: "user_type",
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,

            field: "name",
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,

            field: "avatar",
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,

            field: "email",
        },
        card: {
            type: DataTypes.STRING,
            field: "email"
        },
    }, {
        tableName: "users",
        freezeTableName: true,
        timestamps: false,
    })

    return customer;
};