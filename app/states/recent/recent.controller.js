(function(){
'use strict';

	angular.module('states.recent').controller('RecentController', function($state, fireSource) {

		var vm = this;

/*		fireSource.get().$loaded(function(response) {
			console.log(response);
		});
*/
		
		vm.photos = fireSource.getFakePhotos();
		
	});

})();
