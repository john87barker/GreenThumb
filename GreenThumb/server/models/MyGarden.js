import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const myGarden = new Schema(
  {
    name: { type: String, required: true },
    body: { type: String, required: true },
    createAPlot: { type: Object },
    creatorId: { type: Schema.Types.ObjectId, required: true }
    // NOTE If you wish to add additional public properties for Accounts do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

myGarden.virtual('creator', {
  foreignField: '_id',
  localField: 'creatorId',
  ref: 'Account',
  justOne: true
})
