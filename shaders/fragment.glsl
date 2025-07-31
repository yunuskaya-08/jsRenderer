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

precision mediump float;

varying float brightness;
uniform vec4 baseColor;
uniform float ambient;

void main() {
  float light = brightness + ambient;
  light = min(light, 1.0); // Clamp to [0,1]
  vec3 color = baseColor.rgb * light;
  gl_FragColor = vec4(color, baseColor.a);
}