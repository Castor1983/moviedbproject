import React, {useState} from 'react';
import TextField from "@mui/material/TextField"
const SearchByKeywordsComponent = () => {
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div className="main">
            <h1>React Search</h1>
            <div className="search">
                <TextField
                    id="outlined-basic"
                    onChange={inputHandler}
                    variant="outlined"
                    fullWidth
                    label="Search"
                />
            </div>
        </div>

    );
};

export {SearchByKeywordsComponent};