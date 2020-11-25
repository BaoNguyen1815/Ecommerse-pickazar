module.exports = function(sequelize: any, DataTypes: any){
    return sequelize.define('contacts',{
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
            field: "type",
        },
        number: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "number",
        },
    },{
        tableName: "contacts",
        freezeTableName: true,
        timestamps: false,
    })
}