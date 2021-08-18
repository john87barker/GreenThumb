import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { Plant } from '../models/Plant'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Plants = mongoose.model('Plant', Plant)
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
