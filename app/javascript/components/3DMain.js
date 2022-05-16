import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import Stats from 'three/examples/jsm/libs/stats.module';
let controls;
let portal;
let divGif2 = document.getElementsByClassName('gif-distortion');
let moveForwoard = false;
			let moveBackward = false;
			let moveLeft = false;
			let moveRight = false;
const createScene = () => {
  const stats = Stats()



    const canva = document.getElementById("bg");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight , 0.1,1000);
    const loader = new GLTFLoader();
    const clock = new THREE.Clock();
    const clock2 = new THREE.Clock();
    let mixer, actions;
    let activator = true;
    let movingAction1, movingAction2,movingAction3,movingAction4,movingAction5;
    let movingAction6, movingAction7, movingAction8, movingAction9, movingAction10, movingAction11,movingAction12,movingAction13,movingAction14,movingAction15,movingAction16,movingAction17,movingAction18,movingAction19,movingAction20,movingAction21,movingAction22,movingAction23,movingAction24;
    const params = {
      exposure: 0.945,
      bloomStrength: 2.373,
      bloomThreshold: 0,
      bloomRadius:1
    };
    
    
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg'), antialias: true ,alpha: true
        
      });
      
      
        renderer.setSize(window.innerWidth, window.innerHeight  );
        /* renderer.outputEncoding = THREE.sRGBEncoding; */
        
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type=THREE.PCFSoftShadowMap;
        renderer.toneMapping = THREE.ReinhardToneMapping;
        renderer.toneMappingExposure=0.9485;
			
        renderer.physicallyCorrectLights = true;
        renderer.alpha = true;


        const composer = new EffectComposer( renderer );

        const renderPass = new RenderPass( scene, camera );
        composer.addPass( renderPass );

          

          const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
          bloomPass.threshold = params.bloomThreshold;
          bloomPass.strength = params.bloomStrength;
          bloomPass.radius = params.bloomRadius;
          
          composer.addPass( bloomPass );

          function delay(time) {
            return new Promise(resolve => setTimeout(resolve, time));
          }
          
          
      
        function teleport(){
          if (camera.position.x>=-5.7 && camera.position.x<=3.85 && camera.position.z>=-2.6 && camera.position.z<=1.83){
            divGif2[0].classList.add("startDistortion");
            divGif2[0].style.display = "block";
            delay(2000).then(() => window.location = "https://thepurpulearkportal.herokuapp.com/wall");
            controls.enabled = false;
          }
        }
      
        const listener = new THREE.AudioListener();
        listener.setMasterVolume(0.19);
        camera.add( listener );

          // create the PositionalAudio object (passing in the listener)
          const sound = new THREE.PositionalAudio( listener );

          // load a sound and set it as the PositionalAudio object's buffer
          const audioLoader = new THREE.AudioLoader();
        audioLoader.load( 'sounds/fairy-sound.ogg', function( buffer ) {
          sound.setBuffer( buffer );
          sound.setRefDistance( 7 );
          sound.play();
          sound.setLoop(true);
        });

       

        controls = new FirstPersonControls( camera, renderer.domElement );

				controls.movementSpeed = 40;
				controls.lookSpeed = 0.045;
				controls.lookVertical = false;
        controls.enableZoom = false;
        const object = []  ;
        loader.load( 'model_site_v34.glb', function ( gltf ) {
 
            gltf.scene.scale.set(5,5,5)
            
            object.push(gltf.scene) ;
            portal = object[0].children[17];
            portal.add(sound);
            let modell =  gltf.scene;
            modell.traverse(n => { if ( n.isMesh ) {
              n.castShadow = true; 
              n.receiveShadow = true;
              if(n.material.map) n.material.map.anisotropy = 16; 
            }});
            scene.add( modell );
              if(activator == true){
                const animations = gltf.animations;
                
                        mixer = new THREE.AnimationMixer( modell );

                        movingAction1 = mixer.clipAction( animations[ 0 ] );
                        movingAction2 = mixer.clipAction( animations[ 1 ] ); 
                        movingAction3 = mixer.clipAction( animations[ 2 ] );
                        movingAction4 = mixer.clipAction( animations[ 3 ] );
                        movingAction5 = mixer.clipAction( animations[ 4 ] );
                        movingAction6 = mixer.clipAction( animations[ 5 ] );
                        movingAction7 = mixer.clipAction( animations[ 6 ] );
                        movingAction8 = mixer.clipAction( animations[ 7 ] );
                        movingAction9 = mixer.clipAction( animations[ 8 ] );
                        movingAction10 = mixer.clipAction( animations[ 9 ] );
                        movingAction11 = mixer.clipAction( animations[ 10 ] );
                        movingAction12 = mixer.clipAction( animations[ 11 ] );
                        movingAction13 = mixer.clipAction( animations[ 12 ] );
                        
                        
                        actions = [ movingAction1, movingAction2, movingAction3, movingAction4, movingAction5,movingAction6, movingAction7, movingAction8,movingAction9,movingAction10,movingAction11,movingAction12,movingAction13];
              
                       
                        function activateAllActions() {
              
                          actions.forEach( function ( action ) {
                        
                            action.play();
                        
                          }); 
                        }
                        
                        activateAllActions();  
                      }			
              
              
                       
              
           
        });
        
    
        camera.position.set( 0, 16, 150 );
        
       
    
        const size = 80;
        const divisions = 10;
            
        function upfate(){
          if (mixer && activator == true){
         
           mixer.update(  clock.getDelta());

          }
        }
        
        function animate() {
          
          requestAnimationFrame( animate );
          upfate();
          
          render();
          stats.update();
          teleport(); 
        }
        
        function render() {
          controls.update(clock2.getDelta() );
          composer.render();
            
        }
        

animate();


}




const initBackgroundHomePage = () => {

  if (document.querySelector('#bg')) {
    createScene();
  }
}


export { initBackgroundHomePage };
