import {useEffect, useState} from 'react';

const useCounter = (forward = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        let increment = 1;
        if (!forward) {
            increment = -1;
        }

        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + increment);
        }, 1000);

        return () => clearInterval(interval);
    }, [forward]);

    return counter;
};

export default useCounter;
