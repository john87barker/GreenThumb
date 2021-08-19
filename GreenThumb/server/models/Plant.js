import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const Plant = new Schema(
  {
    name: { type: String, required: true },
    body: { type: String, required: true },
    picture: { type: String, required: true },
    hZone: { type: String, min: 1, max: 13 },
    daysToMaturity: { type: Number, required: true },
    sqFt: { type: String, required: true },
    frost: { type: String },
    matureHeight: { type: Number, required: true },
    // NOTE type is Perennial or Annual
    type: { type: String, required: true },
    season: { type: String, required: true },
    family: { type: String, required: true },
    sunReq: { type: String, enum: ['Full Sun', 'Part Sun', 'Part Shade', 'Full Shade'], required: true },
    harvest: { type: String, required: true }
    // NOTE If you wish to add additional public properties for Accounts do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Plant.virtual('creator', {
  foreignField: '_id',
  localField: 'creatorId',
  ref: 'Account',
  justOne: true
})
