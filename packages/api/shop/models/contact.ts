module.exports = function (sequelize: any, DataTypes: any) {
    const contact = sequelize.define("contact",{
        id:{
            type:DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field:"id",
        },
        type:{
            type: DataTypes.STRING,
            allowNull: true,
            field:"type",
        },
        number:{
            type: DataTypes.STRING,
            allowNull: true,
            field:"number",
        },
        
    },{
        tableName: "contact",
        freezeTableName: true,
        timestamps: false,
    })
    return contact;
};