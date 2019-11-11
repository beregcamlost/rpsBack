import mongoose, { Schema } from "mongoose";

const playerSchema = new Schema({
    game: { type: Schema.ObjectId, ref: 'game'},
    name: { type: String, required: true, unique: true, maxlength: 50 },
    createdAt: { type: Date, default: Date.now },
});

const Player = mongoose.model('player', playerSchema);

export default Player;