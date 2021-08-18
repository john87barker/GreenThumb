import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const Garden = new Schema(
  {
    name: { type: String, required: true },
    body: { type: String, required: true },
    gardenPic: { type: String },
    hZone: { type: Number, required: true, min: 1, max: 13 },
    plants: [{ type: String, unique: true }],
    createAPlot: { type: Object },
    creatorId: { type: Schema.Types.ObjectId, required: true }
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
