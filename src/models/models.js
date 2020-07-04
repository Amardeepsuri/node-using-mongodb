import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
    name:  String,
    description: String,
    category:   String,
    price: Number,
    created_date: { type: Date, default: Date.now }
  });