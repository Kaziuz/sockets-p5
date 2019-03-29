var socket;

function setup() {
  createCanvas(640, 400);
  background(51);
  // creamos la conection del socket con el freontend
  socket = io.connect('http://localhost:3000')

  // recivo un mensaje desde el servidor
  // cuando se recibe este mensaje
  // quiere decir que algueinse conecto
  // entonces pintamos esos datos
  socket.on('mouse', newDrawing)
}

function newDrawing(data) {
  noStroke();
  fill(255, 0, 100)
  ellipse(data.x, data.y, 36, 36)
}

function mouseDragged() {
  noStroke()
  fill(255)
  ellipse(mouseX, mouseY, 30, 30)

  // envio el packete al socket que serian las coordenadas del circulo
  var data = { x: mouseX, y: mouseY }
  socket.emit('mouse', data);
}

function draw() {
}