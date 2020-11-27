
module.exports = function(sequelize: any, DataTypes: any){
    return sequelize.define('coupons',{
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
          },
          title: {
            type: DataTypes.STRING,
            field: 'campaign_name',
          },
          number_of_coupon: {
            type: DataTypes.INTEGER,
          },
          discount_in_percent: {
            type: DataTypes.INTEGER,
            field : 'discount',
          },
          category: {
            type : DataTypes.STRING
          },
          code: {
            type: DataTypes.STRING,
          },
          min_amount : {
            type: DataTypes.INTEGER,
          },
          status: {
            type: DataTypes.STRING,
          },
          creation_date: {
            type: DataTypes.DATE,
            field : 'created_at',
          },
          expiration_date: {
            type: DataTypes.STRING,
            allowNull: true,
            field : "end_date",
          }

    },{
        tableName: 'coupons',
        freezeTableName: true,
        timestamps: false,
    })
}