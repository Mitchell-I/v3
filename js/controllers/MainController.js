app.controller('MainController', ['$scope', '$rootScope', '$http', '$state', '$stateParams', '$filter',
    function MainController($scope, $rootScope, $http, $state, $stateParams, $filter) { 
        
    $scope.moederbordenheadline = "Moederborden:";
    $rootScope.moederborden = [
      {id: "01", naam: "Gigabyte GA-01", socket: "775", type: "DDR2"},
      {id: "02", naam: "Gigabyte GA-02", socket: "1155", type: "DDR3"},
	  {id: "03", naam: "Gigabyte GA-03", socket: "1150", type: "DDR3"},
	  {id: "04", naam: "Gigabyte Sniper G1", socket: "1150", type: "DDR3"},
	  {id: "05", naam: "Asus Gaming", socket: "1155", type: "DDR3"},
      {id: "06", naam: "Asus BA-01", socket: "1150", type: "DDR3"},
      {id: "07", naam: "AsRock extreme 3", socket: "1150", type: "DDR3"},
	  {id: "08", naam: "AsRock extreme 2", socket: "775", type: "DDR2"},
	  {id: "09", naam: "MSI Gaming", socket: "AM3", type: "DDR3"},
	  {id: "10", naam: "Gigabyte CA-01", socket: "AM3", type: "DDR3"}
    ]
	
	$scope.processorenheadline = "Processoren:";
    $rootScope.processoren = [
      {id: "01", naam: "Intel i5 2500k", socket: "1155"},
      {id: "02", naam: "Intel i7 2600k", socket: "1155"},
      {id: "03", naam: "Intel Q8400", socket: "775"},
	  {id: "04", naam: "Intel Q6600", socket: "775"},
	  {id: "05", naam: "Intel E8400", socket: "775"},
	  {id: "06", naam: "Intel E6200", socket: "775"},
      {id: "07", naam: "Intel i5 4460", socket: "1150"},
	  {id: "08", naam: "Intel i7 4790", socket: "1150"},
	  {id: "09", naam: "Intel i7 4790k", socket: "1150"},
	  {id: "10", naam: "AMD FX 6300", socket: "AM3"},
	  {id: "11", naam: "AMD FX 9590", socket: "AM3"},
	  {id: "12", naam: "AMD FX 8530", socket: "AM3"}
    ]
	
	$scope.geheugenheadline = "RAM Geheugen:";
    $rootScope.geheugenkits = [
     {id: "01", naam: "8GB G.Skill Ripjaws 1800Mhz", type: "DDR3"},
     {id: "02", naam: "4GB G.Skill Ripjaws 800Mhz", type: "DDR2"},
	 {id: "03", naam: "8GB HyperX 1800Mhz", type: "DDR3"},
	 {id: "04", naam: "4GB HyperX 800Mhz", type: "DDR2"},
	 {id: "05", naam: "2GB HyperX 666Mhz", type: "DDR2"},
	 {id: "06", naam: "8GB Crucial 1666Mhz", type: "DDR3"},
	 {id: "07", naam: "16GB Crucial 1666Mhz", type: "DDR3"},
	 {id: "08", naam: "1GB Kingston 666Mhz", type: "DDR2"}
    ]


            //go to matched iconbox
    $scope.item_content = function (pc_item) {
    	 itemSetter(pc_item);
         $state.go('moederborden.detail/:pc_item_id', {pc_item_id: pc_item.id});
    }

        //pass the pc_item to our next view (item details) 
        //* note *// passing an object like this should become a factory
    itemSetter = function (pc_item) {
            $scope.item_set = pc_item;
    }



	$scope.sidemenu = false;

    $scope.toggle_sidemenu = function () {
    	$scope.sidemenu =! $scope.sidemenu;
    }
	
	$rootScope.$on('$stateChangeStart', 
	function(event, toState, toParams, fromState, fromParams){ 
	      if($scope.sidemenu == true) {
	      $scope.sidemenu = false;
	    }
	})
	
    }
]);

