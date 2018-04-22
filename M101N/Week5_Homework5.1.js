db.posts.aggregate([
	//unwind array
	{"$unwind":"$comments"},
	//group by author
	{$group:
		{
			_id:"$comments.author",
			sum_comments:{$sum:1}
		}
	},
	//sort by sum descending
	{$sort:{sum_comments:-1}},
	//limit 1
	{$limit:1}
])
