import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const AccountSchema = new Schema(
  {
    subs: [{ type: String, unique: true }],
    email: { type: String, lowercase: true, unique: true },
    name: { type: String, required: true },
    picture: { type: String },
    coverImg: { type: String, required: true },
    gardenPic: { type: String },
    hZone: { type: Number, required: true, min: 1, max: 13 },
    myGarden: [{ type: Schema.Types.ObjectId }]
    // NOTE If you wish to add additional public properties for Accounts do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
