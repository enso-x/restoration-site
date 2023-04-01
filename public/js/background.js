const loadFileContent = (url) => new Promise(async resolve => {
	const content = await fetch(url).then(res => res.text());
	resolve(content);
});

let canvas, gl; // canvas and webgl context

let program;
let vertexShader; // Vertex shader.  Not much happens in that shader, it just creates the vertex's to be drawn on
let fragmentShader; // this shader is where the magic happens. Fragment = pixel.  Vertex = kind of like "faces" on a 3d model.
let buffer;


/* Variables holding the location of uniform variables in the WebGL. We use this to send info to the WebGL script. */
let positionLocation;
let locationOfTime;
let locationOfResolution;

let startTime = new Date().getTime(); // Get start time for animating
let currentTime = 0;

const init = async () => {
	// standard canvas setup here, except get webgl context
	canvas = document.getElementById('glscreen');
	gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	// give WebGL it's viewport
	gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

	// kind of back-end stuff
	buffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
	gl.bufferData(
		gl.ARRAY_BUFFER,
		new Float32Array([
			-1.0, -1.0,
			1.0, -1.0,
			-1.0, 1.0,
			-1.0, 1.0,
			1.0, -1.0,
			1.0, 1.0 ]),
		gl.STATIC_DRAW
	); // ^^ That up there sets up the vertex's used to draw onto. I think at least, I haven't payed much attention to vertex's yet, for all I know I'm wrong.

	vertexShader = gl.createShader(gl.VERTEX_SHADER); //create the vertex shader from script
	const vertexShaderScript = await loadFileContent('/shaders/vertex.glsl');
	gl.shaderSource(vertexShader, vertexShaderScript);
	gl.compileShader(vertexShader);

	fragmentShader = gl.createShader(gl.FRAGMENT_SHADER); //create the fragment from script
	const fragmentShaderScript = await loadFileContent('/shaders/fragment.glsl');
	gl.shaderSource(fragmentShader, fragmentShaderScript);
	gl.compileShader(fragmentShader);

	program = gl.createProgram(); // create the WebGL program.  This variable will be used to inject our javascript variables into the program.
	gl.attachShader(program, vertexShader); // add the shaders to the program
	gl.attachShader(program, fragmentShader); // ^^
	gl.linkProgram(program);	 // Tell our WebGL application to use the program
	gl.useProgram(program); // ^^ yep, but now literally use it.

	locationOfResolution = gl.getUniformLocation(program, 'u_resolution');
	locationOfTime = gl.getUniformLocation(program, 'u_time');

	gl.uniform2f(locationOfResolution, canvas.width, canvas.height);
	gl.uniform1f(locationOfTime, currentTime);

	render();
}

function render() {
	let now = new Date().getTime();
	currentTime = (now - startTime) / 1000; // update the current time for animations


	gl.uniform1f(locationOfTime, currentTime); // update the time uniform in our shader

	window.requestAnimationFrame(render, canvas); // request the next frame

	positionLocation = gl.getAttribLocation(program, 'a_position'); // do stuff for those vertex's
	gl.enableVertexAttribArray(positionLocation);
	gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
	gl.drawArrays(gl.TRIANGLES, 0, 6);
}

window.addEventListener('load', async (event) => {
	await init();
});

window.addEventListener('resize', function(event) {
	// just re-doing some stuff in the init here, to enable resizing.

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	gl.viewport(0, 0, window.innerWidth, window.innerHeight);
	locationOfResolution = gl.getUniformLocation(program, 'u_resolution');
});
