import mongoose from 'mongoose'
import { Value as ValueSchema } from '../models/Value'
import { AccountSchema } from '../models/Account'
import { Plant as PlantSchema } from '../models/Plant'
import { Post as PostSchema } from '../models/Post'
import { Comment as CommentSchema } from '../models/Comment'
import { Media as MediaSchema } from '../models/Media'
import { MyGarden as MyGardenSchema } from '../models/MyGarden'
import { GardenTip as GardenTipSchema } from '../models/GardenTip'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Plants = mongoose.model('Plant', PlantSchema);
  MyGardens = mongoose.model('MyGarden', MyGardenSchema);
  Posts = mongoose.model('Post', PostSchema);
  Comments = mongoose.model('Comment', CommentSchema);
  GardenTips = mongoose.model('GardenTip', GardenTipSchema);
  Medias = mongoose.model('Media', MediaSchema);
  Account = mongoose.model('Account', AccountSchema);
}

export const dbContext = new DbContext()
