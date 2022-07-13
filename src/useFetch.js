import { useState, useEffect } from 'react'

const useFetch = (resource) => {
    var [data, setData] = useState(null)
    var [pending, setPending] = useState(true)
    var [error, setError] = useState(null);


    useEffect(() => {

        setTimeout(() => {
            fetch(resource)//dynamically fetch the resource from home.js where the resource link is passed as argument
                .then((response) => {
                    if (response.ok === false) {
                        throw Error("Data you are trying to fetch is not present");
                    }
                    return response.json();
                })
                .then((data) => { setData(data) })
                .catch((error) => { setError(error.message) })
            setPending(false);
        }, 2000)

    }, [data])

    return ({ data, pending, error });

}
export default useFetch;