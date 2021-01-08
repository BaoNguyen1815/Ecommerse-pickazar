module.exports = function (sequelize: any, DataTypes: any) {
    const signUp = sequelize.define("users",{
        id:{
            type:DataTypes.INTEGER,     
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field:"id",
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
    return signUp;
};