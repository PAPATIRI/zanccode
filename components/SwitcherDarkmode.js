import { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkmode from '../lib/useDarkMode';

const SwitcherDarkmode = () => {
    const [colorTheme, setTheme] = useDarkmode();
    const [darkMode, setDarkMode] = useState(colorTheme === 'light' ? true : false);

    const toggleDarkmode = (checked) => {
        setTheme(colorTheme);
        setDarkMode(checked);
    };

    return (
        <div>
            <DarkModeSwitch
                checked={darkMode}
                onChange={toggleDarkmode}
                size={24}
                sunColor="rgb(202 138 4)"
                moonColor="rgb(199 210 254)"
            />
        </div>
    );
};

export default SwitcherDarkmode;
