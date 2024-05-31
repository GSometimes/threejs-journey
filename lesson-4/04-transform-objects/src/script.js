import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Scene Graph
// can put objects inside groups and use potsition, rotation (or quaternion), and scale on those groups with the group class
// Group
const group = new THREE.Group();
group.position.y = 1;
group.scale.y = 2;
group.rotation.y = 1;
scene.add(group);

// mesh
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.x = -2;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.x = 2;
group.add(cube3);

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// position is what you use to move an object in 3D space (x, y, z)
// position in three.js is a vector3 object
// y axis goes up by default
// x axis goes right by default
// z axis goes backward by default
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;

// can change all 3 values of x, y, z at once by using the set method
// mesh.position.set(0.7, -0.6, 1);

// Scale - what you use to scale an object in 3D space (x, y, z)
// mesh.scale.x = 1;
// mesh.scale.y = 1;
// mesh.scale.z = 1;

// can also change with set method
// mesh.scale.set(2, 0.5, 0.5);

// Rotation - what you use to rotate an object in 3D space (x, y, z)
// rotation and quaternion
// PI is what you use for half a rotation (180 degrees)
// be mindful of the order of rotation
// called a gimbal lock
// change order with reorder method before changing rotation
// reorder needs to happen before changing the rotation
// mesh.rotation.reorder('YXZ');
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;

// Quaternion - another way to rotate an object in 3D space
// Quaternion updates when you update the rotation and the rotation updates when you update the quaternion

// axes helper
const axesHelper = new THREE.AxesHelper(1);
scene.add(axesHelper);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// adjusting camera position on y and x to show third axes helper line
// camera.position.y = 1;
// camera.position.x = 1;
scene.add(camera);

// // length between the position and the center of the object
// console.log(mesh.position.length());
// // distance between the camera and the object
// console.log(mesh.position.distanceTo(camera.position));

// lookAt method - makes the object look at a specific point in 3D space
// camera.lookAt(mesh.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
