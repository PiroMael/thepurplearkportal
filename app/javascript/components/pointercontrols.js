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
  let Writing = false;

  




  if (posthover ===false){
  setTimeout(function() {
    wall.onclick = function(){ 
      clicked=true;
      /* console.log('wall container clicked'); */
   }
   postform.onclick = function(){
    clicked=true;
    /* console.log('postForm clicked'); */
    Writing = true;
  }
  posts.onclick = function(){
    
    
    /* console.log('post container clicked'); */
  }
}, 2000);
postform.onclick = function(){
  clicked=true;
  /* console.log('postForm clicked'); */
}


submitPost.onclick = function(){
        
  clicked=false;
}    
}  
  $('#myModal').modal('show');
   var x, y,Px,Py;

const onMouseMove = (e) =>{
  if (Writing == false){
  postform.style.left = e.clientX-20  + 'px';
  postform.style.top = e.clientY-20 + 'px';
  }
}
document.addEventListener('mousemove', onMouseMove);



        function handleMouse(e) {
          // Verify that x and y already have some value
          if (x && y && clicked == false && Px && Py) {
           /*  console.log(e.pageX, e.pageY);
            console.log("posform:" + postform.style.top + " " + postform.style.left); */
            // Scroll window by difference between current and previous positions
           
            window.scrollBy((e.clientX - x)*3, (e.clientY - y)*3);
            
          
            if (e.pageY <1740 && e.pageX < 2800) {
            postformXpos.value =e.pageY;
            postformYpos.value =e.pageX ;
            }
          }
        
          // Store current position
          x = e.clientX;
          y = e.clientY;
          Py = e.pageY;
          Px = e.pageX;
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
  