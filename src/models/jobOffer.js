import mongoose, { Schema } from 'mongoose';

const jobOfferSchema = new Schema({
  _id: {type: String},
  summary: String,
  content: String,
  pay: Number,
  location: String,
  employerName: String,
  employerPhone: String,
  employerMail: String,
  registerDate: {type: Date, default: Date.now},
});

jobOfferSchema.statics.create = function(jobOfferItem) {
  const newMenu = new this(jobOfferItem);
  newMenu._id = mongoose.Types.ObjectId();
  return newMenu.save().catch(e=>console.log(e));
};

jobOfferSchema.statics.findUsingStart = function (start) {
  const startNum = Number.parseInt(start);
  return this.find().skip(startNum).limit(startNum == 0? 20 : 5);
};

jobOfferSchema.statics.findByJobOfferId = function (jobOfferId) {
  return this.findOne({_id: jobOfferId});
};

jobOfferSchema.statics.findByLocationUsingStart = function (location, start) {
  const startNum = Number.parseInt(start);
  return this.find({location:location}).skip(startNum).limit(startNum == 0? 20 : 5);
};

const JobOffer = mongoose.model('JobOffer', jobOfferSchema);

export default JobOffer;
