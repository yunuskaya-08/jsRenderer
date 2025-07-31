// Copyright (c) 2025 Yunus Kaya
// All rights reserved.
//
// You may use, copy, modify, and distribute this software
// for personal or educational purposes, as long as this
// notice stays in all copies or substantial parts of the code.
//
// Commercial use is not allowed without explicit permission.
//
// To request permission for commercial use, email:
// yunusekaya2008@gmail.com
//
// This software is provided "as is", without warranty of any kind.

import setupResize from './util/resize.js';
import createDrawMesh from './draw.js';
import { setDrawUniforms } from './draw.js';

import createSphereData from './entities/sphere.js';
import createCubeData from './entities/cube.js';

const VERTEX_SHADER_PATH = 'shaders/vertex.glsl';
const FRAGMENT_SHADER_PATH = 'shaders/fragment.glsl';

// check if shader paths are defined
if (!VERTEX_SHADER_PATH || !FRAGMENT_SHADER_PATH) {
  console.error('Shader paths are not defined.');
  throw new Error('Shader paths must be defined.');
}

// check if jQuery is available
if (!window.$) {
  console.error('jQuery is not available. Please include it in your HTML.');
  throw new Error('jQuery is required for this application.');
}

$(function () {
  // set up canvas and resize handling
  const $canvas = $('#game-canvas');
  setupResize($canvas);

  // check for required libraries
  if (!window.glMatrix) {
    console.error('glMatrix is not available. Please include it in your HTML.');
    throw new Error('glMatrix is required for this application.');
  }
  if (!window.createREGL) {
    console.error('REGL is not available. Please include it in your HTML.');
    throw new Error('REGL is required for this application.');
  }

  // create regl instance
  const regl = createREGL({ canvas: $canvas[0] });

  // cache mesh data
  const sphereData = createSphereData();
  const cubeData = createCubeData();

  // check if mesh data is valid
  if (!sphereData || !cubeData) {
    console.error('Failed to create mesh data for sphere or cube.');
    throw new Error('Mesh data creation failed.');
  }


  (async () => {

    // cache draw functions
    const drawCube = await createDrawMesh(
      regl, cubeData, VERTEX_SHADER_PATH, FRAGMENT_SHADER_PATH
    );
    const drawSphere = await createDrawMesh(
      regl, sphereData, VERTEX_SHADER_PATH, FRAGMENT_SHADER_PATH
    );

    // set up uniforms
    const projection = glMatrix.mat4.perspective([], Math.PI / 4, $canvas.width() / $canvas.height(), 0.01, 1000);
    const view = glMatrix.mat4.lookAt([], [0, 1, -10], [0, 0, 0], [0, 1, 0]);
    const lightDir = glMatrix.vec3.normalize([], [1, 1, -1]);
    const ambient = 0.3;

    setDrawUniforms({ projection, view, lightDir, ambient });

    // create model matrices
    const model1 = glMatrix.mat4.create();

    let model2 = glMatrix.mat4.create();
    glMatrix.mat4.translate(model2, model2, [0, -3, 0]);

    let angle = 0.1;

    // main render loop
    regl.frame(() => {
      model2 = glMatrix.mat4.rotateY(model2, model2, angle);

      regl.clear({ color: [0, 0, 0, 1], depth: 1 });

      drawSphere({ model: model1, baseColor: [1.0, 0.5, 0.2, 1.0] });
      drawCube({ model: model2 }); // default color is gray
    });
  })();
});