import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { Plant as PlantSchema } from '../models/Plant'
import { Post as PostSchema } from '../models/Post'
import { Comment as CommentSchema } from '../models/Comment'
import { Garden as GardenSchema } from '../models/Garden'
import { GardenPlant as GardenPlantSchema } from '../models/GardenPlant'
import { GardenTip as GardenTipSchema } from '../models/GardenTip'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Plants = mongoose.model('Plant', PlantSchema);
  Gardens = mongoose.model('Garden', GardenSchema);
  GardenPlant = mongoose.model('GardenPlant', GardenPlantSchema);
  Posts = mongoose.model('Post', PostSchema);
  Comments = mongoose.model('Comment', CommentSchema);
  GardenTips = mongoose.model('GardenTip', GardenTipSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
