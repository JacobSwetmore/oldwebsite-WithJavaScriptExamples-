let canvas = document.getElementById("fishcanvas");
let ctx = canvas.getContext("2d");
let clearbutton = document.getElementById("clearbutton");
let savebutton = document.getElementById("savebutton");
let fillpicker = document.getElementById("fillpicker");
let strokepicker = document.getElementById("strokepicker");
let nocolourtext = document.getElementById("nocolourtext");
clearbutton.addEventListener("click", clear);
savebutton.addEventListener("click", save);
canvas.addEventListener("click", getPosition);

let shapeselector = document.getElementById("shapeselector");
let selectedshape;

let sizeselector = document.getElementById("sizeselector");
let selectedsize;

ctx.canvas.width = 800;
ctx.canvas.height = 600;

if (!Modernizr.inputtypes.color) {
  nocolourtext.innerHTML =
    "Your browser doesn't seem to have a colour picker! Please enter hex values into the above textboxes. (You can use " +
    "<a href='" +
    "https://www.webpagefx.com/web-design/color-picker/" +
    "'>this site</a>" +
    " to get hex values)";
}

function clear() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function draw(x, y) {
  selectedshape = shapeselector.options[shapeselector.selectedIndex].value;
  selectedsize = sizeselector.options[sizeselector.selectedIndex].value;
  if (selectedshape === "bubble") {
    let bubble1 = new Bubble({
      ctx: ctx,
      x: x,
      y: y,
      radius: 50 * selectedsize,
      fill: fillpicker.value,
      stroke: strokepicker.value
    });
    bubble1.draw();
  } else if (selectedshape === "ornament") {
    let ornament1 = new Ornament({
      ctx: ctx,
      x: x,
      y: y,
      size: selectedsize,
      fill: fillpicker.value,
      stroke: strokepicker.value
    });
    ornament1.draw();
  } else if (selectedshape === "starfish") {
    let starfish1 = new Starfish({
      ctx: ctx,
      x: x,
      y: y,
      size: selectedsize,
      fill: fillpicker.value,
      stroke: strokepicker.value
    });
    starfish1.draw();
  } else if (selectedshape === "funkyfish") {
    let funkyfish1 = new FunkyFish({
      ctx: ctx,
      x: x,
      y: y,
      size: selectedsize,
      fill: fillpicker.value,
      stroke: strokepicker.value
    });
    funkyfish1.draw();
  }
}

function getPosition(event) {
  let rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  draw(x, y);
}

function save() {
  let newWindow = window.open();
  newWindow.document.write(
    "<img  src='" + canvas.toDataURL("image/png") + "'  alt='from  canvas'/>"
  );
}

class Bubble {
  constructor(params) {
    this.ctx = params && params.ctx ? params.ctx : null;
    this.x = params && params.x ? params.x : 0;
    this.y = params && params.y ? params.y : 0;
    this.radius = params && params.radius ? params.radius : 50;
    this.fill = params && params.fill ? params.fill : "black";
    this.stroke = params && params.stroke ? params.stroke : "transparent";
    this.strokeWidth = params && params.strokeWidth ? params.strokeWidth : 0;
  }
  draw() {
    if (this.ctx) {
      this.ctx.fillStyle = this.fill;
      this.ctx.strokeStyle = this.stroke;
      this.ctx.lineWidth = this.strokeWidth;
      this.ctx.beginPath();
      this.ctx.arc(
        this.x + this.radius,
        this.y + this.radius,
        this.radius,
        0,
        Math.PI * 2
      );
      this.ctx.fill();
      this.ctx.stroke();
    }
  }
}

class Ornament {
  constructor(params) {
    this.ctx = params && params.ctx ? params.ctx : null;
    this.x = params && params.x ? params.x : 0;
    this.y = params && params.y ? params.y : 0;
    this.size = params && params.size ? params.size : 1;
    this.fill = params && params.fill ? params.fill : "black";
    this.stroke = params && params.stroke ? params.stroke : "transparent";
    this.strokeWidth = params && params.strokeWidth ? params.strokeWidth : 0;
  }
  draw() {
    if (this.ctx) {
      this.ctx.fillStyle = this.fill;
      this.ctx.strokeStyle = this.stroke;
      this.ctx.lineWidth = this.strokeWidth;
      this.ctx.beginPath();
      this.ctx.moveTo(this.x, this.y); // start at top left corner of canvas
      this.ctx.lineTo(this.x + 60 * this.size, this.y + 0 * this.size); // go 200px to right (x), straight line from 0 to 0
      this.ctx.lineTo(this.x + 30 * this.size, this.y - 60 * this.size);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();
    }
  }
}

class Starfish {
  constructor(params) {
    this.ctx = params && params.ctx ? params.ctx : null;
    this.x = params && params.x ? params.x : 0;
    this.y = params && params.y ? params.y : 0;
    this.size = params && params.size ? params.size : 1;
    this.fill = params && params.fill ? params.fill : "black";
    this.stroke = params && params.stroke ? params.stroke : "transparent";
    this.strokeWidth = params && params.strokeWidth ? params.strokeWidth : 0;
  }
  draw() {
    if (this.ctx) {
      this.ctx.fillStyle = this.fill;
      this.ctx.strokeStyle = this.stroke;
      this.ctx.lineWidth = this.strokeWidth;
      this.ctx.beginPath();
      this.ctx.moveTo(this.x + 25 * this.size, this.y);
      this.ctx.lineTo(this.x + 30 * this.size, this.y + 20 * this.size);
      this.ctx.lineTo(this.x + 50 * this.size, this.y + 20 * this.size);
      this.ctx.lineTo(this.x + 35 * this.size, this.y + 30 * this.size);
      this.ctx.lineTo(this.x + 40 * this.size, this.y + 50 * this.size);
      this.ctx.lineTo(this.x + 25 * this.size, this.y + 35 * this.size);
      this.ctx.lineTo(this.x + 10 * this.size, this.y + 50 * this.size);
      this.ctx.lineTo(this.x + 15 * this.size, this.y + 30 * this.size);
      this.ctx.lineTo(this.x + 0 * this.size, this.y + 20 * this.size);
      this.ctx.lineTo(this.x + 20 * this.size, this.y + 20 * this.size);
      this.ctx.lineTo(this.x + 25 * this.size, this.y + 0 * this.size);
      this.ctx.closePath();
      this.ctx.fill();
      this.ctx.stroke();
    }
  }
}

class FunkyFish {
  constructor(params) {
    this.ctx = params && params.ctx ? params.ctx : null;
    this.x = params && params.x ? params.x : 0;
    this.y = params && params.y ? params.y : 0;
    this.size = params && params.radius ? params.radius : 50;
    this.fill = params && params.fill ? params.fill : "black";
    this.stroke = params && params.stroke ? params.stroke : "transparent";
    this.strokeWidth = params && params.strokeWidth ? params.strokeWidth : 0;
  }
  draw() {
    if (this.ctx) {
      let fishtail = new Ornament({
        ctx: ctx,
        x: this.x + 70 * selectedsize,
        y: this.y + 40 * selectedsize,
        size: selectedsize,
        fill: fillpicker.value,
        stroke: strokepicker.value
      });
      let fishhead = new Bubble({
        ctx: ctx,
        x: this.x,
        y: this.y,
        radius: 50 * selectedsize,
        fill: fillpicker.value,
        stroke: strokepicker.value
      });
      let fisheye = new Bubble({
        ctx: ctx,
        x: this.x + 25 * selectedsize,
        y: this.y + 25 * selectedsize,
        radius: 7 * selectedsize,
        fill: "white",
        stroke: "black"
      });
      let fishpupil = new Bubble({
        ctx: ctx,
        x: this.x + 27 * selectedsize,
        y: this.y + 29 * selectedsize,
        radius: 3 * selectedsize,
        fill: "black",
        stroke: "black"
      });

      fishtail.draw();
      fishhead.draw();
      fisheye.draw();
      fishpupil.draw();
      this.ctx.beginPath();
      this.ctx.arc(
        this.x + 20 * selectedsize,
        this.y + 50 * selectedsize,
        20 * selectedsize,
        Math.PI / 8,
        Math.PI / 1.5
      );
      this.ctx.stroke();
    }
  }
}
