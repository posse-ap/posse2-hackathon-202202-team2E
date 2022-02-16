const board = document.getElementById("board");

let turn = "black";
let opponent = "white";
let temp = "";
let passCounter = 0;

//石を置けるか確認
function canPut(line, column){
  //上確認
  if(
    document.getElementById(`cell_${line - 1}_${column }`) === null ||
    document.getElementById(`cell_${line - 1}_${column }`).className === opponent + "Area"
  ){
    for (i = 1; i < 8; i++) {
      const checkCell = document.getElementById(`cell_${line - i}_${column}`);
      if (line - i < 0) {
        break;
      } else if (checkCell.className === "cells") {
        break;
      } else if (checkCell.className === turn + "Area") {
      return true;
      }
    }
  }
  //下確認
  if(
    document.getElementById(`cell_${line + 1}_${column}`) === null ||
    document.getElementById(`cell_${line + 1}_${column}`).className === opponent + "Area"
  ){
    for (i = 1; i < 8; i++) {
      const checkCell = document.getElementById(`cell_${line + i}_${column}`);
      if (line + i > 7) {
        break;
      } else if (checkCell.className === "cells") {
        break;
      } else if (checkCell.className === turn + "Area") {
      return true;
      }
    }
  }
  //右確認
  if(
    document.getElementById(`cell_${line}_${column + 1}`) === null ||
    document.getElementById(`cell_${line}_${column + 1}`).className === opponent + "Area"
  ){
    for (i = 1; i < 8; i++) {
      const checkCell = document.getElementById(`cell_${line}_${column + i}`);
      if (column + i > 7) {
        break;
      } else if (checkCell.className === "cells") {
        break;
      } else if (checkCell.className === turn + "Area") {
      return true;
      }
    }
  }
  //左確認
  if(
    document.getElementById(`cell_${line}_${column - 1}`) === null ||
    document.getElementById(`cell_${line}_${column - 1}`).className === opponent + "Area"
  ){
    for (i = 1; i < 8; i++) {
      const checkCell = document.getElementById(`cell_${line}_${column - i}`);
      if (column - i < 0) {
        break;
      } else if (checkCell.className === "cells") {
        break;
      } else if (checkCell.className === turn + "Area") {
      return true;
      }
    }
  }
  //右上確認
  if(
    document.getElementById(`cell_${line - 1}_${column + 1}`) === null ||
    document.getElementById(`cell_${line - 1}_${column + 1}`).className === opponent + "Area"
  ){
    for (i = 1; i < 8; i++) {
      const checkCell = document.getElementById(`cell_${line - i}_${column + i}`);
      if (line - i < 0 || column + i > 7) {
        break;
      } else if (checkCell.className === "cells") {
        break;
      } else if (checkCell.className === turn + "Area") {
      return true;
      }
    }
  }

  //右下確認
  if(
    document.getElementById(`cell_${line + 1}_${column + 1}`) === null ||
    document.getElementById(`cell_${line + 1}_${column + 1}`).className === opponent + "Area"
  ){
    for (i = 1; i < 8; i++) {
      const checkCell = document.getElementById(`cell_${line + i}_${column + i}`);
      if (line + i > 7 || column + i > 7) {
        break;
      } else if (checkCell.className === "cells") {
        break;
      } else if (checkCell.className === turn + "Area") {
      return true;
      }
    }
  }

  //左下確認
  if(
    document.getElementById(`cell_${line + 1}_${column - 1}`) === null ||
    document.getElementById(`cell_${line + 1}_${column - 1}`).className === opponent + "Area"
  ){
    for (i = 1; i < 8; i++) {
      const checkCell = document.getElementById(`cell_${line + i}_${column - i}`);
      if (line + i > 7 || column - i < 0) {
        break;
      } else if (checkCell.className === "cells") {
        break;
      } else if (checkCell.className === turn + "Area") {
      return true;
      }
    }
  }

  //左上確認
  if(
    document.getElementById(`cell_${line - 1}_${column - 1}`) === null ||
    document.getElementById(`cell_${line - 1}_${column - 1}`).className === opponent + "Area"
  ){
    for (i = 1; i < 8; i++) {
      const checkCell = document.getElementById(`cell_${line - i}_${column - i}`);
      if (line - i < 0 || column - i < 0) {
        break;
      } else if (checkCell.className === "cells") {
        break;
      } else if (checkCell.className === turn + "Area") {
      return true;
      }
    }
  }
}

//石を置く
function putStone(line, column) {
  const thisCell = document.getElementById(`cell_${line}_${column}`);

  const stone = document.createElement("div");
  stone.innerHTML = "";
  stone.className = turn;
  thisCell.appendChild(stone);
  thisCell.className = turn + "Area";
}

//石をひっくり返す
function turnOverStone(line, column) {
  const thisCell = document.getElementById(`cell_${line}_${column}`);

  //上側
  for (i = 1; i < 8; i++) {
    const checkCell = document.getElementById(`cell_${line - i}_${column}`);
    if (line - i < 0) {
      break;
    } else if (checkCell.className === "cells") {
      break;
    } else if (checkCell.className === turn + "Area") {
      for (j = 1; j < i; j++) {
        const returnArea = document.getElementById(`cell_${line - j}_${column}`);
        returnArea.innerHTML = "";
        const stone = document.createElement("div");
        stone.innerHTML = "";
        stone.className = turn;
        returnArea.appendChild(stone);
        returnArea.className = turn + "Area";
      }
      break
    }
  }

  //下側
  for (i = 1; i < 8; i++) {
    const checkCell = document.getElementById(`cell_${line + i}_${column}`);
    if (line + i > 7) {
      break;
    } else if (checkCell.className === "cells") {
      break;
    } else if (checkCell.className === turn + "Area") {
      for (j = 1; j < i; j++) {
        const returnArea = document.getElementById(`cell_${line + j}_${column}`);
        returnArea.innerHTML = "";
        const stone = document.createElement("div");
        stone.innerHTML = "";
        stone.className = turn;
        returnArea.appendChild(stone);
        returnArea.className = turn + "Area";
      }
      break
    }
  }

  //右側
  for (i = 1; i < 8; i++) {
    const checkCell = document.getElementById(`cell_${line}_${column + i}`);
    if (column + i > 7){
      break;
    } else if (checkCell.className === "cells") {
      break;
    } else if (checkCell.className === turn + "Area") {
      for (j = 1; j < i; j++) {
        const returnArea = document.getElementById(`cell_${line}_${column + j}`);
        returnArea.innerHTML = "";
        const stone = document.createElement("div");
        stone.innerHTML = "";
        stone.className = turn;
        returnArea.appendChild(stone);
        returnArea.className = turn + "Area";
      }
      break
    }
  }

  //左側
  for (i = 1; i < 8; i++) {
    const checkCell = document.getElementById(`cell_${line}_${column - i}`);
    if (column - i < 0) {
      break;
    } else if (checkCell.className === "cells") {
      break;
    } else if (checkCell.className === turn + "Area") {
      for (j = 1; j < i; j++) {
        const returnArea = document.getElementById(`cell_${line}_${column - j}`);
        returnArea.innerHTML = "";
        const stone = document.createElement("div");
        stone.innerHTML = "";
        stone.className = turn;
        returnArea.appendChild(stone);
        returnArea.className = turn + "Area";
      }
      break
    }
  }

  //右上
  for (i = 1; i < 8; i++) {
    const checkCell = document.getElementById(`cell_${line - i}_${column + i}`);
    if (line - i < 0 || column + i > 7) {
      break;
    } else if (checkCell.className === "cells") {
      break;
    } else if (checkCell.className === turn + "Area") {
      for (j = 1; j < i; j++) {
        const returnArea = document.getElementById(`cell_${line - j}_${column + j}`);
        returnArea.innerHTML = "";
        const stone = document.createElement("div");
        stone.innerHTML = "";
        stone.className = turn;
        returnArea.appendChild(stone);
        returnArea.className = turn + "Area";
      }
      break
    }
  }

  //右下
  for (i = 1; i < 8; i++) {
    const checkCell = document.getElementById(`cell_${line + i}_${column + i}`);
    if (line + i > 7 || column + i > 7) {
      break;
    } else if (checkCell.className === "cells") {
      break;
    } else if (checkCell.className === turn + "Area") {
      for (j = 1; j < i; j++) {
        const returnArea = document.getElementById(`cell_${line + j}_${column + j}`);
        returnArea.innerHTML = "";
        const stone = document.createElement("div");
        stone.innerHTML = "";
        stone.className = turn;
        returnArea.appendChild(stone);
        returnArea.className = turn + "Area";
      }
      break
    }
  }

  //左下
  for (i = 1; i < 8; i++) {
    const checkCell = document.getElementById(`cell_${line + i}_${column - i}`);
    if (line + i > 7 || column - i < 0) {
      break;
    } else if (checkCell.className === "cells") {
      break;
    } else if (checkCell.className === turn + "Area") {
      for (j = 1; j < i; j++) {
        const returnArea = document.getElementById(`cell_${line + j}_${column - j}`);
        returnArea.innerHTML = "";
        const stone = document.createElement("div");
        stone.innerHTML = "";
        stone.className = turn;
        returnArea.appendChild(stone);
        returnArea.className = turn + "Area";
      }
      break
    }
  }

  //左上
  for (i = 1; i < 8; i++) {
    const checkCell = document.getElementById(`cell_${line - i}_${column - i}`);
    if (line - i < 0 || column - i < 0) {
      break;
    } else if (checkCell.className === "cells") {
      break;
    } else if (checkCell.className === turn + "Area") {
      for (j = 1; j < i; j++) {
        const returnArea = document.getElementById(`cell_${line - j}_${column - j}`);
        returnArea.innerHTML = "";
        const stone = document.createElement("div");
        stone.innerHTML = "";
        stone.className = turn;
        returnArea.appendChild(stone);
        returnArea.className = turn + "Area";
      }
      break
    }
  }
}

//ゲーム終了
function gameEnd(){
  const gameSet = document.createElement("div");
  gameSet.innerHTML = "game set!";
  gameSet.id = "gameSet";
  board.appendChild(gameSet);
  const pass = document.getElementById("pass");
  pass.classList.add("noClick");

  document.querySelectorAll(".cells").forEach(element => element.classList.add("noClick"));

  let blacks = 0;
  document.querySelectorAll(".black").forEach(element => blacks++);
  let whites = 0;
  document.querySelectorAll(".white").forEach(element => whites++);

  const scoreArea = document.createElement("div");
  scoreArea.id = "scoreArea";
  const result = document.createElement("div");
  result.innerHTML = "それぞれのスコアは…"
  const blackScore = document.createElement("div");
  blackScore.innerHTML = "黒：" + blacks + "個";
  const whiteScore = document.createElement("div");
  whiteScore.innerHTML = "白：" + whites + "個";

  scoreArea.appendChild(result);
  scoreArea.appendChild(blackScore);
  scoreArea.appendChild(whiteScore);

  gameArea.appendChild(scoreArea);
}

//マスをクリック
function cellClick(line, column) {
  if(
    canPut(line, column) &&
    document.getElementById(`cell_${line}_${column}`).className === "cells"
    ){
  putStone(line, column);
  turnOverStone(line, column);
  const turnShower = document.getElementById("turnShower");
  if(turn === "black"){
    turnShower.innerHTML = "白";
  }else{
    turnShower.innerHTML = "黒";
  }
  temp = turn;
  turn = opponent;
  opponent = temp;
  passCounter = 0;
  }else{
    alert("そこには置けません！");
  }
  if(document.querySelectorAll(".cells") === null){
    gameEnd();
  }
}

//パスしたとき
function pass(){
  if(turn === "black"){
    turnShower.innerHTML = "白の番です";
  }else{
    turnShower.innerHTML = "黒の番です";
  }
  temp = turn;
  turn = opponent;
  opponent = temp;
  passCounter++;
  if(passCounter === 2){
    gameEnd();
  }
}

//マスを作成
for (i = 0; i < 8; i++) {
  for (j = 0; j < 8; j++) {
    const cell = document.createElement("div");
    cell.className = "cells";
    cell.id = `cell_${i}_${j}`;
    cell.innerHTML = "";
    cell.setAttribute("onclick", `cellClick(${i},${j})`);
    board.appendChild(cell);
  }
}

//最初の石を配置
const blackCell_1 = document.getElementById("cell_4_3");
const blackCell_2 = document.getElementById("cell_3_4");
const whiteCell_1 = document.getElementById("cell_3_3");
const whiteCell_2 = document.getElementById("cell_4_4");

const blackStone_1 = document.createElement("div");
blackStone_1.innerHTML = "";
blackStone_1.className = "black";

const blackStone_2 = document.createElement("div");
blackStone_2.innerHTML = "";
blackStone_2.className = "black";

const whiteStone_1 = document.createElement("div");
whiteStone_1.innerHTML = "";
whiteStone_1.className = "white";

const whiteStone_2 = document.createElement("div");
whiteStone_2.innerHTML = "";
whiteStone_2.className = "white";

blackCell_1.appendChild(blackStone_1);
blackCell_1.className = "blackArea";
blackCell_2.appendChild(blackStone_2);
blackCell_2.className = "blackArea";
whiteCell_1.appendChild(whiteStone_1);
whiteCell_1.className = "whiteArea";
whiteCell_2.appendChild(whiteStone_2);
whiteCell_2.className = "whiteArea";