import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const Post = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    media: { type: String },
    closed: { type: String, default: false, required: true },
    plantId: { type: Schema.Types.ObjectId },
    creatorId: { type: Schema.Types.ObjectId }

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
