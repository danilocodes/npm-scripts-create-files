import {useState} from 'react';
import Button from './components/Button';

const App = () => {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    const handleReset = () => {
        setCount(0);
    };

    return (
        <div className="App">
            <h1>React Example</h1>
            <h3>{count}</h3>
            <div className="btn-container">
                <div className="btn-click">
                    <Button text="Click me" onClick={handleClick} />
                </div>
                <div className="btn-reset">
                    <Button
                        text="Reset"
                        onClick={handleReset}
                        color="#aa2211"
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
