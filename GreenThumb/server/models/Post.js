import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const Post = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    media: { type: String },
    closed: { type: Boolean, default: false, required: true },
    gardenId: { type: Schema.Types.ObjectId, ref: 'Garden' },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Post.virtual('garden', {
  foreignField: '_id',
  localField: 'gardenId',
  ref: 'Garden',
  justOne: true
})
Post.virtual('creator', {
  foreignField: '_id',
  localField: 'creatorId',
  ref: 'Account',
  justOne: true
})
