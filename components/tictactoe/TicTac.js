import {useState} from "react";

export default function TicTac() {

  const [board, setBoard] = useState(1);
  const [num, setNum] = useState([]);
  const [X, setX] = useState([]);
  const [O, setO] = useState([]);

  const onClickElem = (event, number) => {
    let x = document.querySelector(".counterContainer");

    //Store all the winning cases in an array
    let winningCases = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];


    if (!(num.includes(number))) {
      let item = document.createElement("div");
      item.setAttribute('class', 'counter');
      item.innerText = `${board}`;
      x.appendChild(item);
      let intersection = [];

      if (board % 2 === 0) {
        event.target.innerText = "O";
        setBoard(board + 1);
        if (Array.isArray(O)) {
          O.push(number);
          for (let i = 0; i < winningCases.length; i++) {
            intersection = O.filter(x => winningCases[i].includes(x));
            console.log("Intersection " + intersection);
            console.log("Winning Cases" + winningCases[i]);
            if (winningCases[i].toString() === intersection.toString()) {
              alert("O wins");
            }
          }
        }
      } else {
        event.target.innerText = "X";
        setBoard(board + 1);
        if (Array.isArray(X)) {
          X.push(number);
          for (let i = 0; i < winningCases.length; i++) {
            intersection = X.filter(x => winningCases[i].includes(x));
            if (winningCases[i].toString() === intersection.toString()) {
              alert("X wins");
            }
          }
        }
      }
      setNum(num.concat(number));
    }
  };

  const onReset = () => {
    let x = document.querySelector(".counterContainer");
    let numbers = document.querySelectorAll(".numbers");
    numbers.forEach(function (item) {
      item.innerText = ".";
    });
    x.innerHTML = "";
    setBoard(1);
    setNum([]);
    setX([]);
    setO([]);
  }


  return (
    <div className="grid place-items-center h-screen">
      <div className="grid grid-cols-3 gap-3">
        <div
          className="numbers"
          onClick={event => onClickElem(event, 1)}>
          <p>.</p>
        </div>
        <div
          className="numbers"
          onClick={event => onClickElem(event, 2)}>
          <p>.</p>
        </div>
        <div
          className="numbers"
          onClick={event => onClickElem(event, 3)}>
          <p>.</p>
        </div>
        <div
          className="numbers"
          onClick={event => onClickElem(event, 4)}>
          <p>.</p>
        </div>
        <div
          className="numbers"
          onClick={event => onClickElem(event, 5)}>
          <p>.</p>
        </div>
        <div
          className="numbers"
          onClick={event => onClickElem(event, 6)}>
          <p>.</p>
        </div>
        <div
          className="numbers"
          onClick={event => onClickElem(event, 7)}>
          <p>.</p>
        </div>
        <div
          className="numbers"
          onClick={event => onClickElem(event, 8)}>
          <p>.</p>
        </div>
        <div
          className="numbers"
          onClick={event => onClickElem(event, 9)}>
          <p>.</p>
        </div>
        <div className="counterContainer">

        </div>
        <div
          className="counterContainer"
          onClick={() => {
            onReset()
          }}>
          <div className="resetBtn">Reset</div>
        </div>
      </div>
    </div>
  )
}