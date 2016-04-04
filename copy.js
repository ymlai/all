<!DOCTYPE html>
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
<body>

<div ng-app="myApp" ng-controller="myCtrl">
{{rec}}
<br>
<br>
Name:{{checkNameList}}{{nameFlag}}
<br>
<br>
sancationList:{{checkSacList}}{{sacFlag}}
<br>
<br>
id:{{checkIdList}}{{idFlag}}
<br>
<br>
country:{{checkCountryList}}{{countryFlag}}
<br>
<br>
date:{{checkDateList}}{{dateFlag}}
<br>
<br>
{{msg}}
</div>

<script>
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope,$window) {
    model.Duplicate =false;
    model.checkNameList = [];
    model.checkSacList = [];
    model.checkDateList =[];
    model.checkIdList = [];
    model.rec = {};  
    model.rec.name= [{nameType:"type1" ,value:'Chan'},{nameType:"type1" ,value:'Chan'}];
    model.rec.sancationList = [{catgory: 'catgory01', reference: 'sancation01'},{catgory: 'catgory02', reference: 'sancation02'}];
    model.rec.date = [{dateType:"AA", day: '01', month: '03', year:'1991'},{dateType:"BB", day: '01', month: '02', year:'1991'}];
    model.rec.identification = [{idType: 'hk', id: '1'},{idType: 'hk', id: '01'}];
    model.rec.country = [{type: 'asian', value: 'sg'}, {type: 'asian', value: 'hk'}];


    //param: record collection(arrayList), key of the type in grid table(string), key of the value in grid table(string) 
    
   model.createCheckList = function(recordMap, checkList, keyOfType, keyOfValue){
      for(i=0; i<recordMap.length; i++){
          model.pushCheckList(recordMap[i][keyOfType],recordMap[i][keyOfValue], checkList);}}

    model.pushCheckList = function (type, value, checkList) {
    tempMap={};
    tempMap[type]=value;
    checkList.push(tempMap);
    };

    model.createDateCheckList = function(recordMap){
      for(i=0; i<recordMap.length; i++){
          model.pushCheckDateList(recordMap[i]['dateType'], recordMap[i]['day'], recordMap[i]['month'], recordMap[i]['year']);}}


    model.pushCheckDateList = function (dateType, day, month, year) {
    tempMap={};
    tempMap['dayType']=dateType;
    tempMap['day']=day;
    tempMap['month']=month;
    tempMap['year']=year;
    model.checkDateList.push(tempMap);
    };

    model.checkDuplicate = function(collection){
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
 
    model.save = function(){
      model.checkNameList = [];
      model.checkSacList = [];
      model.checkDateList =[];
      model.checkIdList = [];
      model.checkCountryList = [];

      model.createCheckList(model.rec.name, model.checkNameList, 'nameType', 'value');
      model.nameFlag=model.checkDuplicate(model.checkNameList);

      model.createCheckList(model.rec.sancationList, model.checkSacList, 'catgory', 'reference');
      model.sacFlag=model.checkDuplicate(model.checkSacList);

      model.createCheckList(model.rec.identification, model.checkIdList, 'idType', 'id');
      model.idFlag=model.checkDuplicate(model.checkIdList);

      model.createCheckList(model.rec.country, model.checkCountryList, 'type', 'value');
      model.countryFlag=model.checkDuplicate(model.checkCountryList);

      model.createDateCheckList(model.rec.date);
      model.dateFlag=model.checkDuplicate(model.checkDateList);  

      if ( model.nameFlag || model.sacFlag || model.idFlag || model.dateFlag)
         model.msg = "edit unsuccessfully";
      else 
         model.msg = "edit successfully";
      };
  
      model.save();



});
</script>

</body>
</html>

