//var updateCommand = Builders<Post>.Update.Inc(x => x.Comments[model.Index].Likes, 1);
var updateCommand = Builders<Post>.Update.Inc($"Comments.{model.Index}.Likes", 1);
await blogContext.Posts.FindOneAndUpdateAsync(x => x.Id == model.PostId, updateCommand);
