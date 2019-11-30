import mongoose, { Schema } from 'mongoose';

const locationSchema = new Schema({
  name: String,
});

locationSchema.statics.create = function (locationName) {
  const location = {name: locationName};
  const newLocation = new this(location);
  return newLocation.save().catch(e=>console.log(e));
};

const location = mongoose.model('location', locationSchema);

export default location;

