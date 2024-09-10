import mongoose from "mongoose";

const menusSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    recipe: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Menu = mongoose.model("Menu", menusSchema);
