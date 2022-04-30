const createCrossmouse = () => {
  let wall = document.getElementById('wallContainer');
  let posts = document.getElementsByClassName('containerposts');
  let postformXpos = document.getElementById('post_Xpos');
  let postformYpos = document.getElementById('post_Ypos');
  let postform = document.getElementById('new_post');
  let submitPost = document.getElementById('submitPostBTn');
  let postscollection = document.getElementsByClassName('post-container');
  
  let clicked = false;
  let posthover = false;


  




  if (posthover ===false){
  setTimeout(function() {
    wall.onclick = function(){ 
      clicked=true;
      console.log('wall container clicked');
   }
   postform.onclick = function(){
    clicked=true;
    console.log('postForm clicked');
  }
  posts.onclick = function(){
    clicked=true;
    console.log('post container clicked');
  }
}, 2000);
postform.onclick = function(){
  clicked=true;
  console.log('postForm clicked');
}


submitPost.onclick = function(){
        
  clicked=false;
}    
}  
  $('#myModal').modal('show');
   
        var x, y;

        function handleMouse(e) {
          // Verify that x and y already have some value
          if (x && y && clicked == false) {
    
            // Scroll window by difference between current and previous positions
           
            window.scrollBy((e.clientX - x)*3, (e.clientY - y)*3);
            
            if (e.pageY <1740) {
            postform.style.top = (e.pageY*0.9 )+ 'px';
            }
            if (e.pageX < 2800) {
            postform.style.left = (e.pageX *0.9 )+ 'px';
            }
            if (e.pageY <1740 && e.pageX < 2800) {
            postformXpos.value =e.pageY;
            postformYpos.value = e.pageX;
            }
          }
        
          // Store current position
          x = e.clientX;
          y = e.clientY;
          
        }
        
        // Assign handleMouse to mouse movement events
        document.onmousemove = handleMouse; 
}
const initWallPage = () => {

    if (document.querySelector('#wallContainer')) {
        createCrossmouse();
       
    }
  }
  
  
  export { initWallPage };
  