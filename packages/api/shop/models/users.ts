module.exports = function (sequelize: any, DataTypes: any) {
    const users = sequelize.define("users",{
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            field:"id",
        },
        name:{
            type: DataTypes.STRING,
            allowNull: true,
            field:"name",
        },
        email:{
            type: DataTypes.STRING,
            allowNull: true,
            field:"email",
        },
    },{
        tableName: "users",
        freezeTableName: true,
        timestamps: false,
    })
    return users;
};