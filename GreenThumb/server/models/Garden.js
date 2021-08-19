import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const Garden = new Schema(
  {
    name: { type: String, required: true },
    body: { type: String, required: true },
    gardenPic: { type: String },
    hZone: { type: Number, min: 1, max: 13 },
    zipCode: { type: Number, required: true, minlength: 5, maxlength: 5},
    gardenPlots: { type: Array },
    creatorId: { type: ObjectId, required: true }
    // NOTE If you wish to add additional public properties for Accounts do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Garden.virtual('creator', {
  foreignField: '_id',
  localField: 'creatorId',
  ref: 'Account',
  justOne: true
})
