import "./game-over.css";

export default function GameOver({ winner, onRestart }) {
    return (
        <div className="GameOver">
        <h2>Game Over</h2>
        {winner && <p>{`${winner} wins!`}</p>}
        {!winner && <p>It's draw</p>}
        <button onClick={onRestart}>Restart</button>
        </div>
    );
}