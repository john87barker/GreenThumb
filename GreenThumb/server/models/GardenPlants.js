import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
// Many to Many
export const Garden = new Schema(
  {
    plantsId: { type: ObjectId, ref: 'Plant' },
    gardenId: { type: ObjectId, ref: 'Garden' },
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

Garden.virtual('plant', {
  foreignField: '_id',
  localField: 'plantsId',
  ref: 'Plant',
  justOne: true
})

Garden.virtual('garden', {
  foreignField: '_id',
  localField: 'gardenId',
  ref: 'Garden',
  justOne: true
})
