angular.module("phonecatApp")
    .component("phoneList", {
        templateUrl : "phone-list.html",
        controller : function phoneListController(){
            this.phones = [
                {
                     name : "nexus s",
                     snippet : "Fast just got faster with Nexus S"
                },
                {
                    name : "Motorola ",
                    snippet : "Moto e"
                }
             ]
        }
    });


