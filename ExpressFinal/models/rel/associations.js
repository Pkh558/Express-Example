module.exports = function (models) {
    // One-to-many relationship: users to posts
    models.users.hasMany(models.posts, {
        foreignKey: "UserId"
    });

    // Many-to-one relationship: posts to users
    models.posts.belongsTo(models.users, {
        foreignKey: "UserId",
        targetKey: "UserId"
    });
};
