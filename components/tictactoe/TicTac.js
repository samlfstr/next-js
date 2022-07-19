import {useState} from "react";

export default function TicTac() {

  const [board, setBoard] = useState(1);
  const [num, setNum] = useState([]);
  const [X, setX] = useState([]);
  const [O, setO] = useState([]);

  const onClickElem = async (event, number) => {
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

      if (board % 2 === 0) {
        if (Array.isArray(O)) {
          O.push(number);
          for (const winningCasesKey in winningCases) {
            console.log(winningCases);
            console.log(O)
            if (winningCases.toString().includes(O.toString()) && O.length > 2) {
              console.log("O wins");
            }
          }
        }

        event.target.innerText = "O";
        setBoard(board + 1);
      } else {
        if (Array.isArray(X)) {
          X.push(number);
          for (let i = 0; i < winningCases.length; i++) {
            if (X.toString() === winningCases[i].toString()) {
              alert("X wins");
            }
          }
        }
        event.target.innerText = "X";
        setBoard(board + 1);
      }
      setNum(num.concat(number));
    }
  };


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
          <div className="counter">0</div>
        </div>
      </div>
    </div>
  )
}