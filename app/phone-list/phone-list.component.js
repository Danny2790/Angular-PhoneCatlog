angular.module("phonecatApp")
    .component("phoneList", {
        templateUrl : "./phone-list/phone-list.html",
        controller : ['$http', function phoneListController($http){
            var self = this; //creat an alias of controller instance
            $http.get('phones/phones.json').then( function (response){
                self.phones = response.data;                
            });
            self.orderProp = 'age';
        }
    ]
});


            