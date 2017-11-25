var app = angular.module("phonecatApp",[]);

app.controller("PhoneListController",function PhoneListController($scope){
     $scope.phones = [
        {
             name : "nexus s",
             snippet : "Fast just got faster with Nexus S"
        },
        {
            name : "Motorola ",
            snippet : "Moto e"
        }
     ]
});