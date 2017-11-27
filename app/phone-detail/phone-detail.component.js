angular.module("phonecatApp")
    .component("phoneDetail", {
        templateUrl : "./phone-detail/phone-detail.html",
        controller :[ "$routeParams", function phoneListController($routeParams){
                this.phoneId = $routeParams.phoneId;
            }
        ]
    });