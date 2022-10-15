(function(){
    'use strict';
    angular.module('myApp', []).controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject = ['$scope', '$filter'];
    function LunchCheckController($scope,$filter){
        $scope.lunchMenu = ''
        $scope.submitForm = function () {
            if($scope.lunchMenu !== ''){
                $scope.listMenu = $scope.lunchMenu.split(',');
                if($scope.listMenu.length <= 3){
                    $scope.message = 'Enjoy!'
                }else{
                    $scope.message = 'Too much!'
                }
            }else{
                $scope.message = 'Please enter data first'
            }
        };
    }
})();
