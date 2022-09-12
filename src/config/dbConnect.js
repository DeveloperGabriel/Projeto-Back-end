import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://Alura:1234@aluraaaaa.wd0haxf.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;