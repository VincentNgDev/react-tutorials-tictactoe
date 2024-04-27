import "./cell.css";

export default function Cell({ value, onClick }) {
    return (
        <li className="Cell" >
            <button disabled={value != null} onClick={onClick}>{value}</button>
        </li>
    );
}