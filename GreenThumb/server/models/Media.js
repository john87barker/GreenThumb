import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const Media = new Schema(
  {
    name: { type: String, required: true },
    body: { type: String, required: true },
    plantId: { type: Schema.Types.ObjectId, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Media.virtual('plant', {
  foreignField: '_id',
  localField: 'plantId',
  ref: 'Plant',
  justOne: true
})
