angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push({
        code : $scope.newCode, 
            name: $scope.newName, 
            coordinates : {
                latitude: $scope.newLatitude, 
                longitude: $scope.newLongitude
            }, 
            address : $scope.newAddress
      })
      $scope.newCode = '';
      $scope.newName = '';
      $scope.newLatitude = '';
      $scope.newLongitude = '';
      $scope.newAddress = '';

    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index,1);
      }
    ;
    $scope.showDetails = function(index) {
        var dispCode = $scope.listings[index].code;
        document.getElementById("codeDisp").innerHTML = dispCode;
        var dispName = $scope.listings[index].name;
        document.getElementById("nameDisp").innerHTML = dispName;
        var dispLat = $scope.listings[index].coordinates.latitude;
        document.getElementById("latDisp").innerHTML = dispLat;
        var dispLong = $scope.listings[index].coordinates.longitude;
        document.getElementById("longDisp").innerHTML = dispLong;
        var dispAdd = $scope.listings[index].address;
        document.getElementById("addDisp").innerHTML = dispAdd;
    };
   
    }
    
  

  
]);