function CalorieCtrl($scope) {
    /** @const */
    var params = {
        m: {
            startIndex: 66.5,
            weightIndex: 13.8,
            growthIndex: 5,
            ageIndex: 6.8
        },
        w: {
            startIndex: 655.1,
            weightIndex: 9.6,
            growthIndex: 1.8,
            ageIndex: 4.7
        }
    };

    var kgInPound = 0.453,
      smInInch = 2.54;

    var vk = {
        clientId: 3690013,
        scope: 1,
        redirectUrl: 'http://localhost:58646/redirect',
        v: 5.5
    };

    $scope.vkAuthUrl = 'https://oauth.vk.com/authorize?client_id=' + vk.clientId + '&scope=' + vk.scope + '&redirect_uri=' + encodeURIComponent(vk.redirectUrl) + '&v=' + vk.v;
    $scope.sex;
    $scope.weight;
    $scope.age;
    $scope.growth;

    $scope.result = function () {
        if ($scope.sex && $scope.weight && $scope.age && $scope.growth) {
            var uniParams = params[$scope.sex];
            return uniParams.startIndex +
            ($scope.weight * kgInPound * uniParams.weightIndex) +
            ($scope.growth * smInInch * uniParams.growthIndex) -
            ($scope.age * uniParams.ageIndex);
        }
    };
}