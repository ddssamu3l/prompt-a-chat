import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email:{
        type: String,
        unique: [true, 'Email already exists!'],
        required: [true, 'Email is required for an account!'],
    },
    username: {
        type: String,
        required: [true, 'A username is required for an account!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it must be unique (no other user has the same name) and should contain 8-20 alphanumeric letters!"],
    },
    image:{
        type: String,
    }
});

const User = models.User || model("User", UserSchema);

export default User;
