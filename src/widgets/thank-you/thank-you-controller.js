(function() {
'use strict';

	angular
		.module('cobrowse')
		.controller('thankYouController', thankYouController);

	/* @ngInject */
	thankYouController.$inject = ['$scope', '$state', '$rootScope'];

	/*
	 * @ngdocs method
	 * @name thankYouController
	 * @desctipon: This controller is used to handle the sign up functionality
	 * @requires $scope
	 * @requires request
	 */
	function thankYouController($scope, $state, $rootScope) {
		var self = this;
		console.log("calling thank you", $rootScope.userType)
	}
})();