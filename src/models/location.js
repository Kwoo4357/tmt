import mongoose, { Schema } from 'mongoose';

const locationSchema = new Schema({
  _id: {type: String},
  name: String,
});

locationSchema.statics.create = function (locationName) {
  const location = {name: locationName};
  const newLocation = new this(location);
  return newLocation.save().catch(e=>console.log(e));
};
