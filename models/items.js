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
		},
		category: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		borrowed: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});

	Item.associate = function(models) {
		Item.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		});
		Item.hasMany(models.Share, {
		});
	};

	return Item;
};