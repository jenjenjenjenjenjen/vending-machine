import { Link } from 'react-router-dom';

const VendingMachine = () => {
    return (
        <>
            <h1>VENDING MACHINE</h1>
            <h2>What would you like to eat today?</h2>
            <ul>
                <Link to="/soda">SODA</Link>
                <Link to="/chips">CHIPS</Link>
                <Link to="/candy">CANDY</Link>
            </ul>
        </>
    )
}

export default VendingMachine;