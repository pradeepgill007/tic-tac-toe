tic_tac_toe.controller('menuCtrl', function ($scope, $state) {
    $scope.login = function () {
        $state.go('menu.dashboard');
    }
});

