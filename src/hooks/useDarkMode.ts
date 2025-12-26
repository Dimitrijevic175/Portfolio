import { useEffect, useState } from 'react';

export const useDarkMode = () => {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
    }, [dark]);

    return [dark, setDark] as const;
};
