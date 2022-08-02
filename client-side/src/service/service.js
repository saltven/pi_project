const getRequestedData = async (url) => {
    const resData = await fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw Error('Could not retrieve data ☹︎ Check server.')
            }
            return res.json();
        })
        .then( async (result) => {
            return result?.pi
        }, (error) => {
            return error.message
        });
        
    return resData;
}

export default getRequestedData;