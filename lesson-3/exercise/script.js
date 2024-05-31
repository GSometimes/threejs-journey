import * as THREE from 'three';
// console.log(THREE);

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene - the container where all of the objects will be when the scene class is instantiated
const scene = new THREE.Scene();

// Object - the object will be what you are adding to the scene, such as a cube, sphere, particles, etc.
const geometry = new THREE.BoxGeometry(1, 1, 1);
// Material  -  the material will be the color, texture, etc. of the object
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// Mesh - the combination of a geometry (the shape) and a material (how it looks)
const mesh = new THREE.Mesh(geometry, material);
// Add mesh to scene
scene.add(mesh);

// Sizes - the sizes will be the width and height of the canvas
const sizes = {
  width: 800,
  height: 600,
};

// Camera - the camera will be the perspective from which you are looking at the scene
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// WebGL Renderer - the renderer will render the scene from the camera's perspective
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

// Set the size of the renderer
renderer.setSize(sizes.width, sizes.height);

// Render the scene from the camera's perspective
renderer.render(scene, camera);
