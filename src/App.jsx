import {useState} from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App" style={{backgroundColor: '#242424', height: '100vh'}}>
            <h1>React</h1>
        </div>
    );
}

export default App;
