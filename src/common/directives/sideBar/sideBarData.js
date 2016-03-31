angular.module('bn.sideNavCtrl').value('sideBarData',[
	{
		id: 1,
		name: 'Boby',
		type: 'course',
		childs: [
			{
				id: 3,
				name: 'gollam',
				type: 'cycle'
			},
			{
				id: 4,
				name: 'gollam',
				type: 'cycle'
			}
		]
	},{
	id: 3,
	name: 'Leonard',
	type: 'course',
	childs: [
		{
			id: 3,
			name: 'hooalnd',
			type: 'cycle'
		},
		{
			id: 4,
			name: 'gollam',
			type: 'cycle'
		}
	]
}
]);