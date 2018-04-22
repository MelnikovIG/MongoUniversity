db.zips.aggregate([
	//project first char and pop
	{$project:
		{
			_id:0,
			first_char: {$substr : ["$city",0,1]},
			pop:1
		}
	},
	//filter by state names
    {
        $match: {
            $or: [
				{"first_char": "B"},
				{"first_char": "D"},
				{"first_char": "O"},
				{"first_char": "G"},
				{"first_char": "N"},
				{"first_char": "M"},
			]
        }
    },
	//sum all pop
    {
        $group: {
            _id: null,
            pop: {
                $sum: "$pop"
            }
        }
    }
])
