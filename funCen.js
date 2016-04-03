<!DOCTYPE html>
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="myCtrl">

{{checkNameList}}{{nameFlag}}
<br>
{{checkSacList}}{{sacFlag}}
<br>
{{checkDateList}}{{dateFlag}}
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$window) {
    $scope.Duplicate =false;
    $scope.checkNameList = [];
    $scope.checkSacList = [];
    $scope.checkDateList =[];
    //param: record collection(arrayList), key of the type in grid table(string), key of the value in grid table(string) 
    
   $scope.createCheckList = function(recordMap, checkList, keyOfType, keyOfValue){
      for(i=0; i<recordMap[keyOfType].length; i++){
          $scope.pushCheckList(recordMap[keyOfType][i][keyOfType],recordMap[keyOfValue][i][keyOfValue], checkList);}}


    $scope.pushCheckList = function (type, value, checkList) {
    tempMap={};
    tempMap[type]=value;
    checkList.push(tempMap);
    };

    $scope.createDateCheckList = function(recordMap){
      for(i=0; i<recordMap['Date'].length; i++){
          $scope.pushCheckDateList(recordMap['Date'][i]['day'],recordMap['Date'][i]['month'], recordMap['Date'][i]['year']);}}


    $scope.pushCheckDateList = function (day, month, year) {
    tempMap={};
    tempMap['day']=day;
    tempMap['month']=month;
    tempMap['year']=year;
    $scope.checkDateList.push(tempMap);
    };

    $scope.checkDuplicate = function(collection){
     var duplicate=false;
     for(i=0; i<collection.length; i++)
       {for (j=i+1; j<collection.length; j++)
         {if(angular.equals(collection[i],collection[j]) && !(angular.equals(collection[i],{})))
            {duplicate=true;
            break;}
         }
       }
      return duplicate;
     }; 

    $scope.rec = {};  
    $scope.rec.Name= [{Name: 'Chan1'},{Name: 'Chan'}];
    $scope.rec.primaryName= [{primaryName: 'primaryT2'},{primaryName: 'primaryT2'}];
    $scope.rec.sancation = [{sancation: 'ABC'},{sancation: 'ABC'}];
    $scope.rec.Date = [{day: '01', month: '02', year:'1991'},{day: '01', month: '02', year:'1991'}];

    $scope.createCheckList($scope.rec, $scope.checkNameList, 'primaryName', 'Name');
    $scope.nameFlag=$scope.checkDuplicate($scope.checkNameList);
    $scope.createCheckList($scope.rec, $scope.checkSacList, 'sancation', 'sancation');
    $scope.sacFlag=$scope.checkDuplicate($scope.checkSacList);
    $scope.createDateCheckList($scope.rec);
    $scope.dateFlag=$scope.checkDuplicate($scope.checkDateList);

});
</script>

</body>
</html>
