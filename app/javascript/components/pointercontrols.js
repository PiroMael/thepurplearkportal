const createCrossmouse = () => {

   
        var x, y;

        function handleMouse(e) {
          // Verify that x and y already have some value
          if (x && y) {
            // Scroll window by difference between current and previous positions
            window.scrollBy(e.clientX - x, e.clientY - y);
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
  