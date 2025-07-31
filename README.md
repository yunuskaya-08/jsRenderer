# jsrenderer

A simple 3D renderer written in plain JavaScript. It uses:

- [regl](https://github.com/regl-project/regl) for WebGL rendering  
- [gl-matrix](https://github.com/toji/gl-matrix) for matrix math  
- [jQuery](https://jquery.com/) for DOM controls

## Requirements

You need to run this over HTTP. Opening the HTML file directly won't work due to browser restrictions on WebGL and file loading.

If you have Python installed, you can run a local server:

```bash
python3 -m http.server 8000

Then open your browser to [http://localhost:8000](http://localhost:8000)