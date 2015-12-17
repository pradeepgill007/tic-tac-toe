tic_tac_toe.controller('loginCtrl', function ($scope, $state) {
    $scope.login = function () {
        $state.go('menu.dashboard');
    }
});

