const mongoose = requrie('mongoose');
const Scheme = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true 
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps: true});