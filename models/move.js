import mongoose, { Schema } from "mongoose";

const moveSchema = new Schema({
    game: { type: Schema.ObjectId, ref: 'game', required: true },
    name: { type: String, required: true, maxlength: 50 },
    kills: { type: String, required: true, maxlength: 50 },
    createdAt: { type: Date, default: Date.now },
});

moveSchema.index({ _id: 1, name: 1, kills: 1 });

const Move = mongoose.model('move', moveSchema);

export default Move;