const { Comment } = require("../models");

const commentdata = [
    {
        comment_text: "Experience is your best teacher.",
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text:
            "Whatever goes up must come down.",
        user_id: 2,
        post_id: 2,
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;