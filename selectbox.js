var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.allUnSelected=false;
  $scope.allSelected = false;
  
  $scope.checkboxes = [{
    label: 'Option 1',
    checked: false
  }, {
    label: 'Option 2',
    checked: false
  }, {
    label: 'Option 3',
    checked: false
  }, {
    label: 'Option 4',
    checked: false
  }];

  $scope.cbChecked = function(){
    $scope.allSelected = true;
    $scope.allUnSelected = false;
    angular.forEach($scope.checkboxes, function(v, k) {
      if(!v.checked){
        $scope.allSelected = false;
      }
      if (v.checked){
        $scope.allUnSelected = true;
      } 
    });
  }
  
  $scope.toggleAll = function() {
    $scope.allUnSelected=!$scope.allUnSelected
    var bool = true;
    if ($scope.allSelected) {
      bool = false;
    }
    angular.forEach($scope.checkboxes, function(v, k) {
      v.checked = !bool;
      $scope.allSelected = !bool;
      if (v.checked) {
        $scope.tryit = false;
      }
    });
  }

});
