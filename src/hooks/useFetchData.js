import { useState, useEffect } from "react";

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const respones = await fetch(url, { mode: 'cors' });
            const result = await respones.json();
            setData(result)
        } catch (error) {
            alert('Something went wrong')
            setData(null)
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {

        fetchData();
    }, [url]);

    return { data, loading };
};

export default useFetchData;