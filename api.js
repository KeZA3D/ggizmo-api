const fetch = require('node-fetch');

module.exports = class api {
    constructor(options) {
        this.options = options;
        if (options.bearer == true) {
            this.options.auth = 'Basic ' + Buffer.from(options.username + ':' + options.password).toString('base64');
        } else {
            this.options.auth = 'Bearer ' + options.token;
        }
    }

    setName(name) {
        this.name = name;
    }

    async makeFetch(method, url, body = null) {
        try {
            let ftch = await fetch(this.options.loc+this.name+url, {
                method: method,
                body: body,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': this.options.auth
                }
            });
            if (ftch.ok === false || (ftch.status > 299)) {
                if (ftch.status === 401) {
                    throw new Error({ result: { isError: true, errorMessage: "Unauthorized" }, httpStatusCode: ftch.status })
                }
                throw new Error(await ftch.json())
            }
            return ftch
        } catch (e) {
            console.error(e);
            return e;
        }
    }
}