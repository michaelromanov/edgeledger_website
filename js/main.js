function initMap(){
  const loc = { lat: 40.7128, lng: -74.0060 };
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14, 
    center: loc
  });
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// Sticky Menu Background
window.addEventListener('scroll', function(){
  if(window.scrollY>150){
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#navbar a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    
    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top-100
      },
      200
    );
  }
});

