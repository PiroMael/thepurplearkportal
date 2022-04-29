const createPost= () => {
   
    let createPostBtn = document.getElementById('create-Post');

    let postform = document.getElementById('new_post');

    let submitPost = document.getElementById('submitPostBTn');

    let postcontainer = document.getElementsByClassName('containerposts');

    createPostBtn.onclick = function(){ 
        postform.style.display = 'block';  
        
    }

    submitPost.onclick = function(){
        
        postcontainer.style.display = 'block';
    }    


    

    
}


const initPosts = () => {

    if (document.querySelector('#cross')) {
        createPost();
       
    }
  }
  
  
  export { initPosts };