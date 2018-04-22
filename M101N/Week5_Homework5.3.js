db.grades.aggregate([
	//unwind array
	{"$unwind":"$scores"},
	//ignore quiz grades
	{$match:{ "scores.type": { $ne: "quiz" }}},
    //group by student_id and class_id
    {
        $group: {
            _id: {
                student_id: "$student_id",
                class_id: "$class_id"
            },
            sum: {$avg: "$scores.score"}
        }
    },
	//group by class_id
	{$group:
		{
			_id:"$_id.class_id",
			avg_score:{$avg:"$sum"}
		}
	},
	//sort by score descending
	{$sort:{avg_score:-1}},
])
