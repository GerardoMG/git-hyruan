$(function() {   
  // Slide01   
  $(".content.slide01").swipe( {
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide02.html";
    },
    threshold:50
  });  

  // Slide02   
  $(".content.slide02").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      window.location = "index.html";
    },
    threshold:50
  });
  $(".content.slide02").swipe( {
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide03.html";
    },
    threshold:50
  });  

  // Slide03  
  $(".content.slide03").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide02.html";
    },
    threshold:50
  });
  $(".content.slide03").swipe( {
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide04.html";
    },
    threshold:50
  });  

  // Slide04  
  $(".content.slide04").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide03.html";
    },
    threshold:50
  });
  $(".content.slide04").swipe( {
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide05.html";
    },
    threshold:50
  });  

  // Slide05  
  $(".content.slide05").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide04.html";
    },
    threshold:50
  });
  $(".content.slide05").swipe( {
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide06.html";
    },
    threshold:50
  });  

  // Slide06   
  $(".content.slide06").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide05.html";
    },
    threshold:50
  });
  $(".content.slide06").swipe( {
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide07.html";
    },
    threshold:50
  });  

  // Slide07  
  $(".content.slide07").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide06.html";
    },
    threshold:50
  });
  $(".content.slide07").swipe( {
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide08.html";
    },
    threshold:50
  });  

  // Slide08  
  $(".content.slide08").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide07.html";
    },
    threshold:50
  });
  $(".content.slide08").swipe( {
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide09.html";
    },
    threshold:50
  });  

  // Slide09   
  $(".content.slide09").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide08.html";
    },
    threshold:50
  });
  $(".content.slide09").swipe( {
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide10.html";
    },
    threshold:50
  });  

  // Slide10   
  $(".content.slide10").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide09.html";
    },
    threshold:50
  });
  $(".content.slide10").swipe( {
    swipeLeft:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide11.html";
    },
    threshold:50
  });

  // Slide11
  $(".content.slide11").swipe( {
    swipeRight:function(event, direction, distance, duration, fingerCount) {
      window.location = "slide10.html";
    },
    threshold:50
  });
});
