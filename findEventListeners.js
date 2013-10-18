(function findEventListeners(e){
 var events;
    while(!e.is("html")) {
      events = $._data(e.get(0),"events");
   if (events) {
   console.log(e.get(0),events);
   }
         e = e.parent();
    }
})($("#text_booking_first_name"));