module.exports = function (sequelize: any, DataTypes: any) {
    const address = sequelize.define("addresses",{
        id:{
            type:DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field:"id",
        },
        type:{
            type: DataTypes.STRING,
            allowNull: true,
            field:"set_default",
        },
        name:{
            type: DataTypes.STRING,
            allowNull: true,
            field:"title",
        },
        info:{
            type : DataTypes.STRING,
            allownull:true,
            field:"address"
        }
    },{
        tableName: "addresses",
        freezeTableName: true,
        timestamps: false,
    })
    return address;
};