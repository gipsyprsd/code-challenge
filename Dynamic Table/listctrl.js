 // create the controller and inject Angular's $scope
 sampleapp.controller('myListCtrl', function($scope, $window, dataFactory) {
   $scope.orderByField = 'name';
   $scope.reverse = false;
    // create a message to display in our view
    $scope.listItems = dataFactory.list();
    $scope.sort = function (keyname) {
      $scope.orderByField = keyname;
      $scope.reverse = !$scope.reverse;
  } 
  $scope.sortClass = function (sortCls) {
   var elementCls='';
   if(sortCls === $scope.orderByField){
      elementCls = $scope.reverse ? 'downArrow' : 'upArrow';
   }else{
      elementCls = 'downArrowDisable'
   }
   return elementCls;
} 
  
});
