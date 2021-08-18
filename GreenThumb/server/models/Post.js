import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const Post = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    media: { type: String, required: true },
    plantId: { type: Schema.Types.ObjectId, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Post.virtual('plant', {
  foreignField: '_id',
  localField: 'plantId',
  ref: 'Plant',
  justOne: true
})
Post.virtual('creator', {
  foreignField: '_id',
  localField: 'creatorId',
  ref: 'Account',
  justOne: true
})
