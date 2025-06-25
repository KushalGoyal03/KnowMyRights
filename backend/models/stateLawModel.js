// backend/models/stateLawModel.js
import mongoose from "mongoose";

const stateLawSchema = new mongoose.Schema({
  state: { type: String, required: true, unique: true },
  lawsSummary: { type: String, required: true },
  sources: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now },
});

export default mongoose.model("StateLaw", stateLawSchema);
