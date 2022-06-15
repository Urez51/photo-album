const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Album }) {
      Photo.belongsTo(Album, { foreignKey: 'album_id' });
    }
  }
  Photo.init({
    url: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Albums',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Photo',
  });
  return Photo;
};
