<script setup lang="ts">
import { Camera, CanvasRenderer, ColorMaterial, Particle, Scene } from 'my-threejs'
import { onMounted, ref } from 'vue';
var SCREEN_WIDTH = window.innerWidth;
var SCREEN_HEIGHT = window.innerHeight;

// var stats;
const container = ref();

var particle;

var camera: Camera;
var scene: Scene;
var renderer: CanvasRenderer;

var mouseX = 0;
var mouseY = 0;

var windowHalfX = window.innerWidth >> 1;
var windowHalfY = window.innerHeight >> 1;

onMounted(() => {

	document.addEventListener('mousemove', onDocumentMouseMove, false);
	document.addEventListener('touchstart', onDocumentTouchStart, false);

	init();
	setInterval(loop, 1000 / 60);

})

function init()
{
	// container.value = document.createElement('div');
	document.body.appendChild(container.value);				

	camera = new Camera(0, 0, 1000);
	camera.focus = 200;

	scene = new Scene();
	
	renderer = new CanvasRenderer();
	renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
console.log(renderer, 'rendererx')
	if (!renderer.viewport) return;

	for (var i = 0; i < 1000; i++)
	{
		particle = new Particle( new ColorMaterial(Math.random() * 0x808008 + 0x808080, 1) );
		particle.size = Math.random() * 10 + 5;
		particle.position.x = Math.random() * 2000 - 1000;
		particle.position.y = Math.random() * 2000 - 1000;
		particle.position.z = Math.random() * 2000 - 1000;
		particle.updateMatrix();
		scene.add( particle );
	}

	container.value.appendChild(renderer.viewport);

	// stats = new Stats();
	// container.appendChild( stats.getDisplayElement() );
}

//

function onDocumentMouseMove(event: any)
{
	mouseX = event.clientX - windowHalfX;
	mouseY = event.clientY - windowHalfY;
}

function onDocumentTouchStart( event: any )
{
	if(event.touches.length == 1)
	{
		event.preventDefault();

		mouseX = event.touches[0].pageX - windowHalfX;
		mouseY = event.touches[0].pageY - windowHalfY;

		document.addEventListener('touchmove', onDocumentTouchMove, false);
		document.addEventListener('touchend', onDocumentTouchEnd, false);
	}
}

function onDocumentTouchMove( event: any )
{
	if(event.touches.length == 1)
	{
		event.preventDefault();
		
		mouseX = event.touches[0].pageX - windowHalfX;
		mouseY = event.touches[0].pageY - windowHalfY;
	}
}

function onDocumentTouchEnd( event: any )
{
	if(event.touches.length == 0)
	{
		event.preventDefault();

		mouseX = event.touches[0].pageX - windowHalfX;
		mouseY = event.touches[0].pageY - windowHalfY;

		document.removeEventListener('touchmove', onDocumentTouchMove, false);
		document.removeEventListener('touchend', onDocumentTouchEnd, false);
	}
}

//

function loop()
{
	camera.x += (mouseX - camera.x) * .05;
	camera.y += (-mouseY - camera.y) * .05;
	camera.updateMatrix();

	renderer.render(scene, camera);

	// stats.update();
}
</script>

<template>
  <h1>my-threejs</h1>
  <div ref="container" id="container"></div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

#container {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: aquamarine;
}
</style>
