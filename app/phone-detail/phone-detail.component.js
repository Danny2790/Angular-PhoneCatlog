angular.module("phonecatApp")
    .component("phoneDetail", {
        templateUrl : "./phone-detail/phone-detail.html",
        controller :[ '$routeParams', '$http', function phoneDetailController($routeParams, $http){
                //this.phoneId = $routeParams.phoneId;
                var self = this;
                self.setImage = function setImage(image){
                    self.mainImageUrl = image;
                }
                $http.get('/phones/' + $routeParams.phoneId + '.json').then(function(response){
                    self.phone = response.data;
                    self.setImage(self.phone.images[0]);
                });
            }
        ]
    });