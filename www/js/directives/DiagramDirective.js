app.directive('lineDiagram', function() {
	// function linkFunction($scope, element, attributes)
	// {
	// }
	return {
		templateUrl:'templates/line-diagram.html',
		restrict:'EA',
		controller: 'DirectivesController',
		scope: {title : "=", subtitle: "=", max_value: "=", min_value: "="},/*,
		link: linkFunction,
		scope:
		{
			json_breadcrumbs:'@'
		}*/
	};
});
