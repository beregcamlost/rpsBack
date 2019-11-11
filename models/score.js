import mongoose, { Schema } from "mongoose";

const scoreSchema = new Schema({
    player: { type: Schema.ObjectId, ref: 'player'},
    state: { type: Number, required: true, default: 0 },
    createdAt: { type: Date, default: Date.now },
});

const Score = mongoose.model('score', scoreSchema);

export default Score;