import * as THREE from 'three'
import {gl} from './WebGL'

/*
const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize( window.innerWidth, window.innerHeight );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}*/

export class TCanvas {
    private cube: THREE.Mesh

    constructor(private container: HTMLElement) {
        this.init();
        this.createObjects();
        gl.requestAnimationFrame(this.anim)
    }

    private init() {
        gl.setup(this.container)
        //gl.scene.background = new THREE.Color(0xff0000)
        gl.camera.position.z = 5;
    }

    private createObjects() {    
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );

        this.cube = new THREE.Mesh(geometry, material);
    
        gl.scene.add(this.cube);
      }
    
      // ----------------------------------
      // animation
      private anim = () => {
        this.cube.rotation.x += 0.01;
	      this.cube.rotation.y += 0.01;
        gl.render()
      }
    
      // ----------------------------------
      // dispose
      dispose() {
        gl.dispose()
      }
}