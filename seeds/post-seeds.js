const { Post } = require("../models");

const postdata = [
    {
        title: "C#.Net Advanced Programming",
        content: "The swirled lollipop had issues with the pop rock candy.",
        comment_id: 1,
        comment_text: "Comment ",
        user_id: 1,
    },
    {
        title: "All you need to know about Front-End Development",
        content: "Going from child, to childish, to childlike is only a matter of time.",
        comment_id: 1,
        comment_text: "Comment 2",
        user_id: 2,
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;