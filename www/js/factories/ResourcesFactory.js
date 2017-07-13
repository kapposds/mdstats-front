app.factory('CPUResource', function($resource, ApiEndpoint){
	return $resource(ApiEndpoint.url+"/api/cpu", null,
	  {
	      'get': { method:'GET' , isArray: false },
	  });
});