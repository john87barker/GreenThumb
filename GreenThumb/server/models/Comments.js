import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const Comments = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    creatorId: { type: Schema.Types.ObjectId, required: true },
    postId: { type: Schema.Types.ObjectId, required: true }

    // NOTE If you wish to add additional public properties for Accounts do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Comments.virtual('creator', {
  foreignField: '_id',
  localField: 'creatorId',
  ref: 'Account',
  justOne: true
})
Comments.virtual('post', {
  foreignField: '_id',
  localField: 'postId',
  ref: 'Post',
  justOne: true
})
