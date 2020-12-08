module.exports = function(sequelize: any, DataTypes: any){
    return sequelize.define('card',{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        user_id: {
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
        tableName: "wallets",
        freezeTableName: true,
        timestamps: false,
    })
}