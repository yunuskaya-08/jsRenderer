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

attribute vec3 position;
attribute vec3 normal;

uniform mat4 model, view, projection;
uniform vec3 lightDir;

varying float brightness;

void main() {
  vec4 worldPosition = model * vec4(position, 1.0);
  vec3 worldNormal = normalize(mat3(model) * normal);

  brightness = max(dot(worldNormal, lightDir), 0.0);

  gl_Position = projection * view * worldPosition;
}