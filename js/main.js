function initMap(){
  const loc = { lat: 40.7128, lng: -74.0060 };
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14, 
    center: loc
  });
  const marker = new google.maps.Marker({ position: loc, map: map });
}