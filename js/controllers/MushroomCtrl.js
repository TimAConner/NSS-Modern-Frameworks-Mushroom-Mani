'use strict';

module.exports = function($scope, MushroomFactory){
    console.log('mushroomCtrl');
    $scope.pois = true;

    MushroomFactory.getMushrooms().then(mushroomData => {
        // Make array from object of objects
        $scope.mushroomList = Object.values(mushroomData.data.mushrooms);
    });
};