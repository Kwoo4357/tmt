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
  return newMenu.save().catch(e=>console.log(e));
};

jobOfferSchema.statics.findUsingStart = function (start) {
  return this.find().skip(start).limit(5);
};

jobOfferSchema.statics.findByJobOfferId = function (jobOfferId) {
  return this.find({_id: jobOfferId});
};

const JobOffer = mongoose.model('JobOffer', jobOfferSchema);

export default JobOffer;
