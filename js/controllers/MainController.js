app.controller('MainController', ['$scope', '$rootScope', '$http', '$state', '$stateParams', '$filter',
    function MainController($scope, $rootScope, $http, $state, $stateParams, $filter) { 
        
    $scope.moederbordenheadline = "Moederborden:";
    $scope.moederborden = [
      {id: "01", name: "Gigabyte GA-01", socket: "775", type: "DDR2"},
      {id: "02", name: "Gigabyte GA-02", socket: "1155", type: "DDR3"},
	  {id: "03", name: "Gigabyte GA-03", socket: "1150", type: "DDR3"},
	  {id: "04", name: "Gigabyte Sniper G1", socket: "1150", type: "DDR3"},
	  {id: "05", name: "Asus Gaming", socket: "1155", type: "DDR3"},
      {id: "06", name: "Asus BA-01", socket: "1150", type: "DDR3"},
      {id: "07", name: "AsRock extreme 3", socket: "1150", type: "DDR3"},
	  {id: "08", name: "AsRock extreme 2", socket: "775", type: "DDR2"},
	  {id: "09", name: "MSI Gaming", socket: "AM3", type: "DDR3"},
	  {id: "10", name: "Gigabyte CA-01", socket: "AM3", type: "DDR3"}
    ]
	
	$scope.processorenheadline = "Processoren:";
    $scope.processoren = [
      {id: "01", name: "Intel i5 2500k", socket: "1155"},
      {id: "02", name: "Intel i7 2600k", socket: "1155"},
      {id: "03", name: "Intel Q8400", socket: "775"},
	  {id: "04", name: "Intel Q6600", socket: "775"},
	  {id: "05", name: "Intel E8400", socket: "775"},
	  {id: "06", name: "Intel E6200", socket: "775"},
      {id: "07", name: "Intel i5 4460", socket: "1150"},
	  {id: "08", name: "Intel i7 4790", socket: "1150"},
	  {id: "09", name: "Intel i7 4790k", socket: "1150"},
	  {id: "10", name: "AMD FX 6300", socket: "AM3"},
	  {id: "11", name: "AMD FX 9590", socket: "AM3"},
	  {id: "12", name: "AMD FX 8530", socket: "AM3"}
    ]
	
	$scope.geheugenheadline = "RAM Geheugen:";
    $scope.geheugenkits = [
     {id: "01", naam: "8GB G.Skill Ripjaws 1800Mhz", type: "DDR3"},
     {id: "02", naam: "4GB G.Skill Ripjaws 800Mhz", type: "DDR2"},
	 {id: "03", naam: "8GB HyperX 1800Mhz", type: "DDR3"},
	 {id: "04", naam: "4GB HyperX 800Mhz", type: "DDR2"},
	 {id: "05", naam: "2GB HyperX 666Mhz", type: "DDR2"},
	 {id: "06", naam: "8GB Crucial 1666Mhz", type: "DDR3"},
	 {id: "07", naam: "16GB Crucial 1666Mhz", type: "DDR3"},
	 {id: "08", naam: "1GB Kingston 666Mhz", type: "DDR2"}
    ]

    $scope.behuizingen = [{"image": "http://img.informatique.nl/110/535011.jpg", "stock": "Product is op voorraad", "link": "http://www.informatique.nl/535011/coolermaster-nse-300-kkn1.html", "price": "\u20ac 39,00", "title": "CoolerMaster NSE-300-KKN1"},
{"image": "http://img.informatique.nl/110/545977.jpg", "stock": "Product is op voorraad", "link": "http://www.informatique.nl/545977/fractal-design-define-r5-black.html", "price": "\u20ac 109,00", "title": "Fractal Design Define R5 Black"},
{"image": "http://img.informatique.nl/110/559869.jpg", "stock": "Product is op voorraad", "link": "http://www.informatique.nl/559869/fractal-design-r4-black-pearl.html", "price": "\u20ac 109,00", "title": "Fractal Design R4 Black Pearl"},
{"image": "http://img.informatique.nl/110/538286.jpg", "stock": "Product is op voorraad", "link": "http://www.informatique.nl/538286/nzxt-h440.html", "price": "\u20ac 118,00", "title": "NZXT H440"},
{"image": "http://img.informatique.nl/110/539497.jpg", "stock": "Product is op voorraad", "link": "http://www.informatique.nl/539497/corsair-carbide-spec-03-red-led.html", "price": "\u20ac 59,00", "title": "Corsair Carbide SPEC-03 Red LED"},
{"image": "http://img.informatique.nl/110/539495.jpg", "stock": "Product is op voorraad", "link": "http://www.informatique.nl/539495/corsair-carbide-spec-01-red-led.html", "price": "\u20ac 50,00", "title": "Corsair Carbide SPEC-01 Red LED"},
{"image": "http://img.informatique.nl/110/535615.jpg", "stock": "Product is op voorraad", "link": "http://www.informatique.nl/535615/coolermaster-cm-690-iii-atx-zwart.html", "price": "\u20ac 91,00", "title": "CoolerMaster CM 690 III, ATX, Zwart"},
]

	$scope.behuizingenheadline = "Behuizingen:";

            //go to matched page
    $scope.item_content = function (pc_item) {
    	 itemSetter(pc_item);
         $state.go('details/:pc_item_id', {pc_item_id: pc_item.id});
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

