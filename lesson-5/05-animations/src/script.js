import * as THREE from 'three';
import gsap from 'gsap';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// // Time
// let time = Date.now();

// Clock
// const clock = new THREE.Clock();

// gsap - takes two arguments, the object you want to animate and the duration of the animation
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });
gsap.to(mesh.position, { duration: 1, delay: 2, y: 2 });
gsap.to(mesh.position, { duration: 1, delay: 3, x: 0 });
gsap.to(mesh.position, { duration: 1, delay: 4, y: 0 });

// Animations
const tick = () => {
  //   // Timestamp
  //   const currentTime = Date.now();
  //   // Delta Time - the difference between the current time and the time of the last frame
  //   // Will help make the animation speed consistent across different devices
  //   const deltaTime = currentTime - time;
  //   // Update time to the current time for the next frame`
  //   time = currentTime;
  //   // Update Objects
  //   mesh.rotation.y += 0.001 * deltaTime;
  //   mesh.rotation.x += 0.001 * deltaTime;
  // Elapsed Time
  // const elapsedTime = clock.getElapsedTime();
  // // Update Objects
  // mesh.rotation.y = elapsedTime;
  // mesh.rotation.x = elapsedTime;
  // mesh.position.y = Math.sin(elapsedTime);
  // mesh.position.x = Math.cos(elapsedTime);
  // //   camera.position.y = Math.sin(elapsedTime);
  // //   camera.position.x = Math.cos(elapsedTime);
  // //   camera.lookAt(mesh.position);
  
  // // Render
  renderer.render(scene, camera);
  // // requestAnimationFrame a method that calls an animation function on the next frame repeatedly
  window.requestAnimationFrame(tick);
};

tick();
