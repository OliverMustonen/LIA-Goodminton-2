import './style.css'
import * as THREE from 'three'
/* import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js' */
import * as dat from 'dat.gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'



const gltfLoader = new GLTFLoader()

// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const oliver_mustonen = new THREE.TextureLoader().load('oliver_mustonen.png');
const jeff = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: oliver_mustonen }));

scene.add(jeff);
    jeff.position.x = 0.05
    jeff.position.y = 0.5
    jeff.position.z = -3.8

    const home = new THREE.TextureLoader().load('home.png');
    const start = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: home }));
    
    scene.add(start);
        start.position.x = -1.45
        start.position.y = 0.5
        start.position.z = -3.8

        const flower = new THREE.TextureLoader().load('UX done.png');
        const ao_hana = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 1), new THREE.MeshBasicMaterial({ map: flower }));
        
        scene.add(ao_hana);
            ao_hana.position.x = 1.55
            ao_hana.position.y = 0.5
            ao_hana.position.z = -3.8



// Our frame
gltfLoader.load('frame_0.gltf', (right_frame) => {
    
    scene.add(right_frame.scene)
    
    right_frame.scene.scale.set(0.4, 0.4, 0.4)
    right_frame.scene.rotation.set(0, 4.7, 0)
    right_frame.scene.position.set(1.5, -0.75, -3.9)

    /* gui.add(right_frame.scene.position, 'x').min(-9).max(9)
    gui.add(right_frame.scene.position, 'y').min(-9).max(9)
    gui.add(right_frame.scene.position, 'z').min(-9).max(9) */
})



// Our frame
gltfLoader.load('frame_0.gltf', (middle_frame) => {
    scene.add(middle_frame.scene)
    middle_frame.scene.scale.set(0.4, 0.4, 0.4)
    middle_frame.scene.rotation.set(0, 4.7, 0)
    middle_frame.scene.position.set(0, -0.75, -3.9)

  

    /* gui.add(middle_frame.scene.position, 'x').min(-9).max(9)
    gui.add(middle_frame.scene.position, 'y').min(-9).max(9)
    gui.add(middle_frame.scene.position, 'z').min(-9).max(9) */
})
// Our frame
gltfLoader.load('frame_0.gltf', (left_frame) => {
    scene.add(left_frame.scene)
    left_frame.scene.scale.set(0.4, 0.4, 0.4)
    left_frame.scene.rotation.set(0, 4.7, 0)
    left_frame.scene.position.set(-1.5, -0.75, -3.9)


    /* gui.add(left_frame.scene.position, 'x').min(-9).max(9)
    gui.add(left_frame.scene.position, 'y').min(-9).max(9)
    gui.add(left_frame.scene.position, 'z').min(-9).max(9) */
})


// Our gallery
gltfLoader.load('galleri.gltf', (galleri) => {
    scene.add(galleri.scene)
    galleri.scene.scale.set(0.4, 0.4, 0.4)
    galleri.scene.rotation.set(0, 4.71, 0)
    galleri.scene.position.set(0, -1, 1)
    /* gui.add(galleri.scene.position, 'x').min(-9).max(9)
    gui.add(galleri.scene.position, 'y').min(-9).max(9)
    gui.add(galleri.scene.position, 'z').min(-9).max(9) */
})




// Lights

const pointLight = new THREE.PointLight(0xffffff, 1)
pointLight.position.x = 0
pointLight.position.y = 0.6
pointLight.position.z = 1
scene.add(pointLight)



/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0.5
camera.position.z = 1

gui.add(camera.position, 'z').min(-9).max(9)
gui.add(camera.position, 'x').min(-9).max(9)
gui.add(camera.rotation, 'y').min(-9).max(9)
scene.add(camera)

// Controls
/* const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true */



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */


const clock = new THREE.Clock()

const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Update objects
    //sphere.rotation.y = .5 * elapsedTime

    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()