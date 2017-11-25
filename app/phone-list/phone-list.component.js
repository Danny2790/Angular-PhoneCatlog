angular.module("phonecatApp")
    .component("phoneList", {
        templateUrl : "./phone-list/phone-list.html",
        controller : function phoneListController(){
            this.phones = [
                {
                     name : "nexus s",
                     snippet : "Fast just got faster with Nexus S",
                     age : 1
                },
                {
                    name : "Motorola ",
                    snippet : "Moto e",
                    age : 2
                },
                {
                    name : "Nokia ",
                    snippet : "nokie at his best",
                    age : 3
                },
                {
                    name : "AAA",
                    snippet : "AA worlds leader",
                    age : 1
                }
             ]
            this.orderProp = 'age';
        }
    });


            