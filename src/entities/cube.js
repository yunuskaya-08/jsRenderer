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

export default function createCubeData() {
  return {
    positions: new Float32Array([
      // Front face
      -1, -1, 1,
      1, -1, 1,
      1, 1, 1,
      -1, 1, 1,
      // Back face
      -1, -1, -1,
      -1, 1, -1,
      1, 1, -1,
      1, -1, -1,
      // Top face
      -1, 1, -1,
      -1, 1, 1,
      1, 1, 1,
      1, 1, -1,
      // Bottom face
      -1, -1, -1,
      1, -1, -1,
      1, -1, 1,
      -1, -1, 1,
      // Right face
      1, -1, -1,
      1, 1, -1,
      1, 1, 1,
      1, -1, 1,
      // Left face
      -1, -1, -1,
      -1, -1, 1,
      -1, 1, 1,
      -1, 1, -1,
    ]),
    normals: new Float32Array([
      // Front
      0, 0, 1,
      0, 0, 1,
      0, 0, 1,
      0, 0, 1,
      // Back
      0, 0, -1,
      0, 0, -1,
      0, 0, -1,
      0, 0, -1,
      // Top
      0, 1, 0,
      0, 1, 0,
      0, 1, 0,
      0, 1, 0,
      // Bottom
      0, -1, 0,
      0, -1, 0,
      0, -1, 0,
      0, -1, 0,
      // Right
      1, 0, 0,
      1, 0, 0,
      1, 0, 0,
      1, 0, 0,
      // Left
      -1, 0, 0,
      -1, 0, 0,
      -1, 0, 0,
      -1, 0, 0,
    ]),
    elements: new Uint16Array([
      0, 1, 2, 0, 2, 3,     // front
      4, 5, 6, 4, 6, 7,     // back
      8, 9, 10, 8, 10, 11,   // top
      12, 13, 14, 12, 14, 15, // bottom
      16, 17, 18, 16, 18, 19, // right
      20, 21, 22, 20, 22, 23  // left
    ])
  };
}