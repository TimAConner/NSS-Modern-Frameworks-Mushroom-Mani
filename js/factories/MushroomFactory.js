'use strict';

module.exports = function($q, $http){
    
    // Returns mushrooms from mushrooms.json
    let getMushrooms = () => {
        return $q((resolve, reject) => {
            $http
            .get('/mushrooms.json')
            .then(mushroomList => {
                resolve(mushroomList);
            })
            .catch(err => {
                reject(err);
            });
        });
    };

    return { getMushrooms };
};