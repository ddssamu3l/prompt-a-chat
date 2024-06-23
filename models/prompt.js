import { Schema, model, models } from 'mongoose';

//this model describes how to store and create new posts in MongoDB
const PromptSchema = new Schema ({
    creator:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    prompt: {
        type: String,
        required: [true, 'A prompt is required to make a post.']
    },
    tag:{
        type: String,
        require: [true, "Tag/s are required to make a post."]
    }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;