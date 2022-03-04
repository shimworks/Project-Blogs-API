module.exports = (sequelize, _DataTypes) => {
  const PostsCategory = sequelize.define('PostsCategory', {}, { timestamps: false });
  PostsCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
       foreignKey: 'postId',
        through: PostsCategory,
        otherKey: 'categoryId',
        as: 'categories',
    });
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
        through: PostsCategory,
        otherKey: 'postId',
        as: 'blogPosts',
    });
  };
  return PostsCategory;
};