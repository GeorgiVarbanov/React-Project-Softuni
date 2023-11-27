const buildOptions = (data) => {

    const options = {};

    if(data) {
        options.body = JSON.stringify(data)
        options.headers = {
            "content-type": "application/json"
        }
    }

    return options;
}


export const request = async (method, url, data) => {



    const response = await fetch(url, {
        method,
        ...buildOptions(data),
    });

    if (!response.ok){
        throw new Error("")
    }

    const result = await response.json();

    return result;
};


