const User = require ('./User');
const Comments = require('./Comments');
const Post = require('./Post');
// if user has many posts it renames them as posts
User.hasMany(Post, {as: "posts"});
//The post references the user
Post.belongsto(User, {as: "users"});

module.exports = {User, Comments, Post};