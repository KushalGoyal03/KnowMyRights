// backend/models/rightsModel.js
import mongoose from "mongoose";

const rightSchema = new mongoose.Schema({
  category: { type: String, required: true, unique: true },
  summary: { type: String, required: true },
  sources: [{ type: String }],
  createdAt: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now },
});

export default mongoose.model("Right", rightSchema);
