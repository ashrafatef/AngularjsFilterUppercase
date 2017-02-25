/**
 * Created by user on 2/14/2017.
 */


var app = angular.module('myapp' , []);

app.filter("uppercase",function () {
    return function (input) {
        var spil_str = input.split(" "),res = "";
        for(var i = 0 ; i < spil_str.length ; i++)
            res += (spil_str[i].charAt().toUpperCase() + spil_str[i].slice(1) + " ");
        return res;
    }
});
app.controller('indesCtrl',function($scope){
    $scope.indesValue = "ashraf atef amen mostafa !";
});


