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
        password:{
            type: DataTypes.STRING,
            allowNull: true,
            field:"password",
        },
    },{
        tableName: "users",
        freezeTableName: true,
        timestamps: false,
    })
    return users;
};