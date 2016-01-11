app.factory('gameService', ['boardService', function(boardService){

  var arr = [];
  var rowRep = [];
  var colRep = [];

  function getRandomIndex(arr) {
    var emptyIndices = [];
    for (var i in arr){
      if(arr[i] === 0){
        emptyIndices.push(i);
      }
    }
    return emptyIndices[Math.floor(Math.random()*emptyIndices.length)];
  }

  function getTwoOrFour(twoToFour){
    var twoFourArr = Array.apply(null, {length: twoToFour}).map(function(){return 2}).concat(Array.apply(null, {length: 1}).map(function(){return 4}));
    return twoFourArr[Math.floor(Math.random()*twoFourArr.length)];
  }

  function randomInsert(arr){
    var digit = {
      index: getRandomIndex(arr),
      value: getTwoOrFour(20)
    };
    arr[digit.index] = digit.value;
  }

  function updateGame(){
    randomInsert(arr);
    rowRep = arrToRow(arr);
    colRep = arrToCol(rowRep);
  }

  function arrToRow(arr){
    var rows = [];
    for (var startingIndex = 0; startingIndex < arr.length; startingIndex += 4){
      rows.push(arr.slice(startingIndex,startingIndex+4));
    }
    return rows;
  }

  function arrToCol(rowRep){
    var cols = [];
    for (var startingIndex = 0; startingIndex < 4; startingIndex ++) {
      cols.push([rowRep[0][startingIndex], rowRep[1][startingIndex],rowRep[2][startingIndex],rowRep[3][startingIndex]]);
    }
    return cols;
  }

  function colToRow(colRep){
    var rowRep = Array.apply(null, {length: colRep.length}).map(function(){return Array(colRep.length)});
    for (var i=0; i<colRep.length; i++){
      for (var j=0; j<colRep[i].length; j++){
        rowRep[i][j] = colRep[j][i];
      }
    }
    return rowRep;
  }

  function rowToarr(rowRep){
    return rowRep.join().split(',').map(function(ele){
      return parseInt(ele);
    });
  }

  function colToarr(colRep){
    return rowToarr(colToRow(colRep));
  }

  function addShift(arr){
    for (var i=0; i<arr.length-1; i++) {
      var j = i+1;

      while(arr[j] === 0 && j < arr.length){
        j++;
      }
      if (j === arr.length){
        return arr;
      } else {
        if (arr[i] === 0){
          while(arr[i] === 0){
            arr.splice(i, 1);
            arr.push(0);
          }
          i--;
        } else if(arr[i] === arr[j]) {
          arr[i] += arr[j];
          arr[j] = 0;
        } else if (j != i+1) {
          arr[i+1] = arr[j];
        }
      }
    }
    return arr;
  }

  return {
    initGame: function(){
      arr=[];
      for (var i = 0; i < 16; i++) {
        arr.push(0);
      };
      randomInsert(arr);
      updateGame();
      return rowRep;
    },

    move: function(direction){
      if (direction ==='left'){
        for (var i=0; i<rowRep.length; i++){
          rowRep[i] = addShift(rowRep[i]);
        }
        arr = rowToarr(rowRep);
      } else if(direction === 'right'){
        for (var i=0; i<rowRep.length; i++){
          rowRep[i] = addShift(rowRep[i].reverse()).reverse();
        }
        arr = rowToarr(rowRep);
      } else if(direction === 'up'){
        for (var i=0; i<colRep.length; i++){
          colRep[i] = addShift(colRep[i]);
        }
        arr = colToarr(colRep);
      } else if(direction === 'down'){
        for (var i=0; i<colRep.length; i++){
          colRep[i] = addShift(colRep[i].reverse()).reverse();
        }
        arr = colToarr(colRep);
      }
      updateGame();
      return rowRep;
    }
  };
}])