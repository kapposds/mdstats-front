app.directive('lineDiagram', function () {
  // function linkFunction($scope, element, attributes)
  // {
  // }
  return {
    templateUrl: 'templates/line-diagram.html',
    restrict: 'EA',
    controller: 'DirectivesController',
    scope: {info: '=', dataset: '='}/*,
		link: linkFunction,
		scope:
		{
			json_breadcrumbs:'@'
		} */
  }
})
