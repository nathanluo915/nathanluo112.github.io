'use strict';

app.directive('sampleDir', function($compile){
  return {
    link: function(scope, element, attrs, controller) {
      var markup = "<input type='text' ng-model='sampleData' /> <div>{{sampleData}}</div>";
      angular.element(element).html($compile(markup)(scope));
    }
  };
});

app.directive('tile', function($compile){
  return {
    template: "<div class='tile'><div ng-if='item!=0'>{{item}}</div>",
    controller: function($scope, $element){

    }
  };
});

