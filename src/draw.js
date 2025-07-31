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

async function loadShader(url) {
  const res = await fetch(url);
  return res.text();
}

export let uniforms = {
  projection: null,
  view: null,
  lightDir: [0, 0, 1],
  ambient: 0.3,
};

export function setDrawUniforms(newUniforms) {
  Object.assign(uniforms, newUniforms);
}

export default async function createDrawMesh(regl, data, vertPath, fragPath) {
  const vertex = await loadShader(vertPath);
  const fragment = await loadShader(fragPath);

  return regl({
    vert: vertex,
    frag: fragment,
    attributes: {
      position: data.positions,
      normal: data.normals,
    },
    elements: data.elements,
    uniforms: {
      projection: (ctx, props) => props.projection ?? uniforms.projection,
      view: (ctx, props) => props.view ?? uniforms.view,
      model: regl.prop('model'),
      lightDir: (ctx, props) => props.lightDir ?? uniforms.lightDir,
      baseColor: (ctx, props) => props.baseColor ?? [0.8, 0.8, 0.8, 1],
      ambient: (ctx, props) => props.ambient ?? uniforms.ambient,
    },
  });
}