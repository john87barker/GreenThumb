import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { Plant } from '../models/Plant'

class DbContext {
  Plants = mongoose.model('Plant', Plant)
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
