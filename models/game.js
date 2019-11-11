import mongoose, { Schema } from "mongoose";

const gameSchema = new Schema({
    createdAt: { type: Date, default: Date.now },
});

const Game = mongoose.model('game', gameSchema);

export default Game;