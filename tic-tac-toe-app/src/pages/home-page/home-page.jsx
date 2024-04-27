import "./home-page.css";

export default function HomePage({ onClick }) {
    return (
        <div className="HomePage">
            <img src="game-logo.png" alt="Not Found"/>
            <button onClick={onClick}>Play</button>
        </div>
    );
}