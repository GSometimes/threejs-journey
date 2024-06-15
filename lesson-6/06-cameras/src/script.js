import * as THREE from 'three';
// import orbit controls
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl');

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Instantiate Orbit Controls

// custom controls
// create cursor variable to hold coordinate values
const cursor = {
  x: 0,
  y: 0,
};
// get coordinates of the mouse
window.addEventListener('mousemove', (event) => {
  // console.log(event.clientX, event.clientY);
  // console.log(cursor.y);
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = -(event.clientY / sizes.height - 0.5);
});

// Scene
const scene = new THREE.Scene();

// Object
const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(mesh);

// Camera
// field of view, (45 or 75 is recommended)
// width and height of camera
// near and far values are the third and fourth parameters that define how close and how far the camera can see
// do not use extreme values like 0.00001 and 999999999
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
// const aspectRatio = sizes.width / sizes.height;
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio ,
//   1,
//   -1,
//   0.1,
//   100
// ); // left, right, top, bottom, near far
// camera.position.x = 2;
// camera.position.y = 2;
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// Animate
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // update camera - custom controls
  // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3;
  // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3;
  // camera.position.y = cursor.y * 5;
  // camera.lookAt(mesh.position);

  // Update Orbit Controls - Damping
  controls.update();

  // built-in threejs controls

  // Update objects
  // mesh.rotation.y = elapsedTime;

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

// Array Camera
// ArrayCamera renders the scene from multiple cameras  on specific areas of the render

// Stereo Camera
// StereoCamera renders the scene through two cameras that mimic the eyes to create a parallax effect
// Use with devices like VR headsets, red and blue glasses, or cardboard

// Cube Camera
// CubeCamera does 6 render, each one facing a different direction
// can render the surroundings for things like environment map, reflection or shadow map

// Orthographic Camera
// OrthographicCamera renders the scene without perspective

// Perspective Camera
// PerspectiveCamera renders the scene with perspective

// OrthographicCamera is different from PerspectiveCamera because it does not have perspective.
// Objects have the same size regardless of their distance to the camera
// Instead of a field of view being provided, direction is provided by providing values for left, right, top and bottom
// you'll provide field of view, aspect ratio(width/height), near and far values

// Built-in controls
// DeviceOrientationControls - deprecated
// will automatically retrieve the device orientation if your device, OS, and browser allow it and rotate the camera accordingly
// useful for VR experiences

// FlyControls
// enables moving the camera like if you were on a spaceship
// you can rotate on all 3 axes, go forward and go backward

// FirstPersonControls
// Similar to FlyControls but has a fixed axis
// doesn't work like in FPS games where you can look up and down

// PointerLockControls
// uses the pointer lock javascript api
// first person controls but with the ability to look up and down

// OrbitControls
// similar the custom controls created in this lesson

// TrackballControls
// similar to OrbitControls but does not have a vertical angle limit

// TransformControls
// nothing to do with the camera
// allows you to move, rotate and scale objects in the scene

// DragControls
// nothing to do with the camera
// allows you to drag objects in the scene
