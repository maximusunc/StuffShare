// items table
module.exports = function(sequelize, DataTypes) {
	var Item = sequelize.define("Item", {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [2,25]
			}
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
		}
	});

	Item.associate = function(models) {
		Item.hasOne(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
		Item.hasOne(models.Share, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Item;
};