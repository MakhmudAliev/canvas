const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Describing the object
const logo = {
  top: {
    x: 150,
    y: 106,
    w: 100,
    h: 16,
    dx: 0,
    dy: 0,
  },
  left: {
    x: 112,
    y: 144,
    w: 16,
    h: 150,
    dx: 0,
    dy: 0
  },
  right: {
    x: 272,
    y: 144,
    w: 16,
    h: 150,
    dx: 0,
    dy: 0,
  },
  speed: 5,
}

// Draw Top Part of Object
 const drawTop = () => {
  ctx.fillStyle = 'white';
  ctx.fillRect(logo.top.x, logo.top.y, logo.top.w, logo.top.h);
}
// Draw Left
 const drawLeft = () => {
  ctx.fillStyle = 'white';
  ctx.fillRect(logo.left.x, logo.left.y, logo.left.w, logo.left.h);
}
//Draw Right
 const drawRight = () => {
  ctx.fillStyle = 'white';
  ctx.fillRect(logo.right.x, logo.right.y, logo.right.w, logo.right.h);
}

// Clear Canvas
function clear() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// New Position
function newPos() {
  logo.top.x += logo.top.dx;
  logo.top.y += logo.top.dy;

  logo.left.x += logo.left.dx;
  logo.left.y += logo.left.dy;

  logo.right.x += logo.right.dx;
  logo.right.y += logo.right.dy;

  detectWalls();
}

// Key Down
const keyDown = (e) => {
  if (e.key === 'ArrowRight' || e.key === 'Right') {
    moveRight();
  } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    moveLeft();
  } else if (e.key === 'ArrowUp' || e.key === 'Up') {
    moveUp();
  } else if (e.key === 'ArrowDown' || e.key === 'Down') {
    moveDown();
  }
}
// Key Up
const keyUp= (e) => {
  if (
    e.key == 'Right' ||
    e.key == 'ArrowRight' ||
    e.key == 'Left' ||
    e.key == 'ArrowLeft' ||
    e.key == 'Up' ||
    e.key == 'ArrowUp' ||
    e.key == 'Down' ||
    e.key == 'ArrowDown'
  ) {
    logo.top.dx = 0;
    logo.top.dy = 0;

    logo.left.dx = 0;
    logo.left.dy = 0;

    logo.right.dx = 0;
    logo.right.dy = 0;
  }
}

// Move Up
const moveUp = () => {
  logo.top.dy = -logo.speed;
  logo.left.dy = -logo.speed;
  logo.right.dy = -logo.speed;
}
// Move Down
const moveDown = () => {
  logo.top.dy = logo.speed;
  logo.left.dy = logo.speed;
  logo.right.dy = logo.speed;
}
// Move Right
const moveRight = () => {
  logo.top.dx = logo.speed;
  logo.left.dx = logo.speed;
  logo.right.dx = logo.speed;
}
// Move Left
const moveLeft = () => {
  logo.top.dx = -logo.speed;
  logo.left.dx = -logo.speed;
  logo.right.dx = -logo.speed;
}

// Clone object
const clone = () => {

}

// Detect Walls
const detectWalls = () => {
  // Left wall
  if (logo.left.x + logo.left.w < 0) {
    logo.left.x = canvas.width - -logo.left.x;
  }

  // Right Wall
  if (logo.left.x > canvas.width) {
    logo.left.x = logo.left.x - canvas.width ;
  }

  // // Top wall
  // if (player.y < 0) {
  //   player.y = 0;
  // }

  // // Bottom Wall
  // if (player.y + player.h > canvas.height) {
  //   player.y = canvas.height - player.h;
  // }
}


// Main function 
const update = () => {
  clear();
  drawTop();
  drawLeft();
  drawRight();

  newPos(); 

  requestAnimationFrame(update);
}

// *******************
update();
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
