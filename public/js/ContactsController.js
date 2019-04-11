function ContactsController($scope, $http){
    $http.get('/contacts').then(function(response){
        $scope.contacts_list = response.data;
    }, function(response){
        console.log(response);
    });
}