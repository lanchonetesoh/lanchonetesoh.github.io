var map;

function initialize() {
    var latlng = new google.maps.LatLng(-3.776532, -38.562602);

    var options = {
        zoom: 15,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById("mapa"), options);
}

initialize();

var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-3.776532, -38.562602),
    title: "Loja 1",
    map: map,
    icon: 'images/pin.png'
});

var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-3.773565, -38.562882),
    map: map,
    icon: 'images/pin.png'
});


 var contentString = "R. Sete de Setembro, n xxx";

  var infowindow = new google.maps.InfoWindow({
  content: contentString,
  maxWidth: 800
});

// Exibir texto ao clicar no pin;
google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map, marker);
});
