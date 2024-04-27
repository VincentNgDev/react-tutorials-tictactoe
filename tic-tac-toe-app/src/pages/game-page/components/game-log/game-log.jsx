import "./game-log.css";

export default function GameLog({ turns }) {
  return <div className="GameLog">
    <h2>Game Log</h2>
    <ol>
      {turns.map((turn, index) => {
        const { cell, player } = turn;
        const { row, col } = cell;

        return (
          <li key={index}>
            {`Player ${player} placed at row ${row + 1}, column ${col + 1}`}
          </li>
        );
      })}
    </ol>
  </div>;
}
