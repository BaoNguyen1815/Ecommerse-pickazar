module.exports = function(sequelize: any, DataTypes: any){
    return sequelize.define('addresses',{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "user_id",
        },
        type: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: "set_default",
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "title",
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "address",
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,

            field: "city",
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false,

            field: "country",
        },
    },{
        tableName: "addresses",
        freezeTableName: true,
        timestamps: false,
    })
}