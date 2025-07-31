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

export default function createSphereData(segments = 32, rings = 16) {
  const positions = [];
  const normals = [];
  const elements = [];

  for (let lat = 0; lat <= rings; ++lat) {
    const theta = lat * Math.PI / rings;
    const sinTheta = Math.sin(theta);
    const cosTheta = Math.cos(theta);

    for (let lon = 0; lon <= segments; ++lon) {
      const phi = lon * 2 * Math.PI / segments;
      const sinPhi = Math.sin(phi);
      const cosPhi = Math.cos(phi);

      const x = cosPhi * sinTheta;
      const y = cosTheta;
      const z = sinPhi * sinTheta;

      positions.push(x, y, z);
      normals.push(x, y, z);
    }
  }

  for (let lat = 0; lat < rings; ++lat) {
    for (let lon = 0; lon < segments; ++lon) {
      const first = (lat * (segments + 1)) + lon;
      const second = first + segments + 1;
      elements.push(first, second, first + 1);
      elements.push(second, second + 1, first + 1);
    }
  }

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    elements: new Uint16Array(elements),
  };
}