const createPost= () => {
    let wall = document.getElementById('wallContainer');
    let createPostBtn = document.getElementById('create-Post');

    let postform = document.getElementById('new_post');

    let submitPost = document.getElementById('submitPostBTn');
    let t =100;
    let postcontainer = document.getElementsByClassName('containerposts');
    let postscollection = document.getElementsByClassName('post-container');
    let posthover = false;


    const postArray = [];
  
  for (let i = 0; i < postscollection.length; i++) {
    
  
      // At this point we could also push the elements to an array
      postArray.push(postscollection[i]);
  }
     postArray.forEach(post => {

        post.onclick = function(){
            t+=1;
            
            post.style.zIndex = `${t}`;
        }
    });

  
  
   if(posthover === false){
    setTimeout(function() {
     
    wall.onclick = function(){ 
        postform.style.display = 'block';  
        
    }}, 3000);

    submitPost.onclick = function(){
        
        postcontainer.style.display = 'none';
    }    


    

}   
}


const initPosts = () => {

    if (document.querySelector('#wallContainer')) {
        createPost();
       
    }
  }
  
  
  export { initPosts };