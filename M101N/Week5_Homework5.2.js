db.zips.aggregate([
	//filter by state names
	{$match:{$or:[{"state": "CA"},{"state": "NY"}]}},
	//group by state and city
	{$group:
		{
			_id:{
					city:"$city",
					state:"$state"
				},
			pop:{$sum:"$pop"}
		}
	},
	//filter cities with pop > 25000
	{$match:{pop:{$gt:25000}}},
	//find average
	{$group:
		{
			_id: null,
			pop:{$avg:"$pop"}
		}
	}
])
