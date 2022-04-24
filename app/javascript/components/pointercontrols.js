const createCrossmouse = () => {
  $('#myModal').modal('show');
   
        var x, y;

        function handleMouse(e) {
          // Verify that x and y already have some value
          if (x && y) {
            // Scroll window by difference between current and previous positions
            window.scrollBy((e.clientX - x)*3, (e.clientY - y)*3);
          }
        
          // Store current position
          x = e.clientX;
          y = e.clientY;
         
        }
        
        // Assign handleMouse to mouse movement events
        document.onmousemove = handleMouse; 
}
const initWallPage = () => {

    if (document.querySelector('#cross')) {
        createCrossmouse();
       
    }
  }
  
  
  export { initWallPage };
  