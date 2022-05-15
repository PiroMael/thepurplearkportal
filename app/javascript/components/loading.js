const  createload = () => {
let divGif = document.getElementsByClassName('gif');

divGif[0].style.width = window.innerWidth + 'px';
divGif[0].style.height = window.innerHeight + 'px';

let divGif2 = document.getElementsByClassName('gif-distortion');
divGif2[0].style.width = window.innerWidth + 'px';
divGif2[0].style.height = window.innerHeight + 'px';

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }
  delay(4500).then(() =>divGif[0].remove());


}
const initLoading = () => {

    if (document.querySelector('#bg')) {
      createload();
    }
  }
  
  
  export { initLoading };