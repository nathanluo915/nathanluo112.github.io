app.factory('boardService', function($compile){
  return {
    addSampleDir: function(){
      angular.element('body').append($compile("<div sample-dir></div>")(scope));
    }
  }
})