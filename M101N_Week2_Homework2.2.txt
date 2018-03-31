//cleanup database using cursor
var last = null;
db.grades.find({type:"homework"}).sort({student_id:1, score:1}).forEach(
 function(current) {
	 
		if(last == null || current._id != last._id){
			print( "deleting: " + current._id); 
			db.grades.remove({_id :current._id})
		}

		last = current;	
	 } 
);
