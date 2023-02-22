import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    throw Error("Fetching is not successfull");
                }
                return res.json()
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
                console.log(data);
            })
            .catch(err => {

                setError(err.message);
                setIsLoading(false);
            })
    }, [url]);

    return { data, isLoading, error }

}

export default useFetch;