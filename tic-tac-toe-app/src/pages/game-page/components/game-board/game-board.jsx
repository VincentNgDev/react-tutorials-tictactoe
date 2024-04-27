import Cell from "../cell/cell";
import "./game-board.css";

export default function GameBoard({ onSelectCell, board }) {
  function handleSelectCell(rowIndex, colIndex) {
    onSelectCell(rowIndex, colIndex);
  }

  return (
    <div className="GameBoard">
      <ol id="row">
        {board.map((row, rowIndex) => {
          return (
            <li key={rowIndex}>
              <ol id="column">
                {row.map((col, colIndex) => {
                  return (
                    <Cell
                      key={colIndex}
                      value={col}
                      onClick={() => {
                        handleSelectCell(rowIndex, colIndex);
                      }}
                    />
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
