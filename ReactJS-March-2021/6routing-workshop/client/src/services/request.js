const request = async (url, method = 'GET', body) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    const resp = await fetch(url, options);
    if (resp.ok === false) {
        const { status, statusText } = resp;
        throw { status, statusText };
    } else {
        const data = await resp.json();
        return data;
    }
};

export default request;