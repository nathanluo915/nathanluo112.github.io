app.controller('gameController', ['$scope', 'boardService', 'gameService', function($scope, boardService, gameService){

  $scope.gameRows = gameService.initGame();
  $scope.newGame = function(){
    $scope.gameRows = gameService.initGame();
  }

  Mousetrap.bind('up', function(){
    $scope.$apply(function(){
      $scope.gameRows = gameService.move("up");
    });
  });
  Mousetrap.bind('down', function(){
    $scope.$apply(function(){
      $scope.gameRows = gameService.move("down");
    })
  });
  Mousetrap.bind('left', function(){
    $scope.$apply(function(){
      $scope.gameRows = gameService.move("left");
    });
  });
  Mousetrap.bind('right', function(){
    $scope.$apply(function(){
      $scope.gameRows = gameService.move("right");
    });
  });

}])