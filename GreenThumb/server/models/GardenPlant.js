import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
// Many to Many
export const GardenPlant = new Schema(
  {
    plantId: { type: ObjectId, ref: 'Plant' },
    gardenId: { type: ObjectId, ref: 'Garden' },
    creatorId: { type: ObjectId, required: true },
    coordinates: { type: String }
    // NOTE If you wish to add additional public properties for Accounts do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

GardenPlant.virtual('creator', {
  foreignField: '_id',
  localField: 'creatorId',
  ref: 'Account',
  justOne: true
})

GardenPlant.virtual('plant', {
  foreignField: '_id',
  localField: 'plantId',
  ref: 'Plant',
  justOne: true
})

GardenPlant.virtual('garden', {
  foreignField: '_id',
  localField: 'gardenId',
  ref: 'Garden',
  justOne: true
})
