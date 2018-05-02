db.messages.aggregate([
	//unwind array
	{"$unwind":"$headers.To"},
	//group by messageId, from, to
    {
        $group: {
            _id: {
                messageId: "$_id",
                from: "$headers.From",
            },
			to: { $addToSet: "$headers.To" }
        }
    },
	//unwind array
	{"$unwind":"$to"},
	//group by from, to
    {
        $group: {
            _id: {
                from: "$_id.from",
				to: "$to"
            },
			sum:{$sum:1}
        }
    },
	//sort by sum descending
	{$sort:{sum:-1}},
	//limit 1
	{$limit:1}
]).pretty()
