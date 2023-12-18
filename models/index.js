const User = require('./User');
const Comments = require('./Comments');
const Post = require('./Post');

User.hasMany(Post, {as:"posts"});
Post.belongsTo(User, {as:"user"});




module.exports = { User, Comments, Post };
// const User = require ('./User');
// const Comments = require('./Comments');
// const Post = require('./Post');
// // if user has many posts it renames them as posts
// User.hasMany(Post, {as: "posts"});
// //The post references the user
// Post.belongsto(User, {as: "users"});

// module.exports = {User, Comments, Post};