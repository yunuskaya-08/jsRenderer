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

export default function setupResize($canvas) {
  function resizeCanvas() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    $canvas.attr({ width, height }).css({ width, height });
  }

  resizeCanvas();

  window.addEventListener('resize', resizeCanvas);
}
