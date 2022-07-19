import React, {useState} from "react";
import Counter from "./components/Counter";

function App() {
    const [value, setValue] = useState('Input text');



    return (
        <div className="App">
            <div className="post">
                <div className="post_content">
                    <strong>1. Java script</strong>
                    <div>
                        Java script is language of development
                    </div>
                </div>
                <div className="post_btns">
                    <button>Delete</button>
                </div>
            </div>
        </div>);
}

export default App;
