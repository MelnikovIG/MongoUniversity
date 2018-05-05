//create index for better search
db.albums.createIndex({ "images": 1 });

//iterate and remove unused images
db.images.find().forEach(
	function(current) {
		var album = db.albums.findOne({"images":current._id})
		
		var haveAnyAlbum = album != null;
		
		if(haveAnyAlbum){
			//print( "current: " + current._id + " album: " + album._id);
		}
		else{
			print( "current: " + current._id + " NO ALBUM");
			db.images.deleteOne({"_id":current._id})
		}
	}
)
