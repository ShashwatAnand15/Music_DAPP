import mongoose from "mongoose"; 

const postSchema = mongoose.Schema({
    userId :{
        type: String,
        required: true,
    },
    firstName :{
        type: String,
        required: true,
    },
    lastName :{
        type: String,
        required: true,
    },
    location : String,
    description : String,
    picturePath: String,
    userPicturepath: String,
    // here we are using map for like as it will have O(1) compelxity for searching
    like : {
        type: Map,
        of: Boolean,
    },
    comments:{
        type: Array,
        default: []
    }

},
{timestamps: true}
);

const Post = mongoose.model("Post" , postSchema);

export default Post;