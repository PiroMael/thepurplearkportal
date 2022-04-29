const createCrossmouse = () => {
  let postformXpos = document.getElementById('post_Xpos');
  let postformYpos = document.getElementById('post_Ypos');

  console.log();
  $('#myModal').modal('show');
   
        var x, y;

        function handleMouse(e) {
          // Verify that x and y already have some value
          if (x && y) {
            // Scroll window by difference between current and previous positions
            window.scrollBy((e.clientX - x)*3, (e.clientY - y)*3);

            postformXpos.value =( e.clientX)*1.5;
            postformYpos.value = (e.clientY)*1.5;
            
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
  