import { clone } from "lodash";

export const getDirection = (keyCode = null, face = null) => {
  let direction;

  if (keyCode === 37 || face === "West") {
    direction = "left";
  }
  if (keyCode === 38 || face === "North") {
    direction = "up";
  }
  if (keyCode === 39 || face === "East") {
    direction = "right";
  }
  if (keyCode === 40 || face === "South") {
    direction = "down";
  }

  return direction;
};

export const checkCollision = ({ x, y, direction }, board) => {
  let value = null;
  console.log("x: ", x);
  console.log("y: ", y);
  console.log("direction: ", direction);
  console.log("board: ", board);
  if (direction === "left" && (x > 0 && x <= 4)) {
    value = board[y][x - 1];
  }
  if (direction === "right" && (x >= 0 && x < 4)) {
    value = board[y][x + 1];
  }
  if (direction === "up" && (y > 0 && y <= 4)) {
    value = board[y - 1][x];
  }
  if (direction === "down" && (y >= 0 && y < 4)) {
    value = board[y + 1][x];
  }

  console.log("value is: ", value);
  return value;
};

export const playerCore = (currentPlayer, currentBoard) => {
  const player = { ...currentPlayer };
  const board = clone(currentBoard);

  let x = player.x;
  let y = player.y;

  console.log(
    "player function" + player.direction + "x:" + player.x + "y:" + player.y
  );

  const checkNextPos = checkCollision(player, board);
  console.log("collisionVal: ", checkNextPos);

  if (checkNextPos === 2 || checkNextPos === 3) {
    board[y][x] = 3; // Set cell as visited
    if (player.direction === "left") {
      x = x - 1;
    }
    if (player.direction === "right") {
      x = x + 1;
    }
    if (player.direction === "up") {
      y = y - 1;
    }
    if (player.direction === "down") {
      y = y + 1;
    }

    board[y][x] = 5; // Set Pacman

    player.x = x;
    player.y = y;
    console.log("appstate board" + board);
  }
  return { board, player };
};

export const rotate = (direction, clockWise = false) => {
  switch (direction) {
    case "up":
      return clockWise ? "right" : "left";
    case "down":
      return clockWise ? "left" : "right";
    case "left":
      return clockWise ? "up" : "down";
    case "right":
      return clockWise ? "down" : "up";
    default:
      return direction;
  }
};
