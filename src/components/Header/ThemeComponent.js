import React, {useEffect, useState} from 'react';
import "../../index.css"

const ThemeComponent = () => {
    const [theme, setTheme] = useState(false)
    const handleclick = () => {
        setTheme(!theme)
    }
    useEffect(() => {
        if (theme == true){
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    });
    return (
        <div>
           <button onClick={handleclick} className={'button'}>{theme?'Light theme' : 'Dark theme'}</button>
        </div>
    );
};

export {ThemeComponent};