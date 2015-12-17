tic_tac_toe.controller('signupCtrl', function ($scope, $state) {
    $scope.login = function () {
        $state.go('menu.dashboard');
    }
});

