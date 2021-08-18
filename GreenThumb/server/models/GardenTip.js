import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const gardenTip = new Schema(
  {
    name: { type: String, required: true },
    body: { type: String, required: true },
    category: { type: String },
    creatorId: { type: Schema.Types.ObjectId, required: true }
    // NOTE If you wish to add additional public properties for Accounts do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

gardenTip.virtual('creator', {
  foreignField: '_id',
  localField: 'creatorId',
  ref: 'Account',
  justOne: true
})
