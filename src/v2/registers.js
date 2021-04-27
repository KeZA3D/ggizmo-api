const api = require("../../api");
const { stringify } = require("querystring");

class Registers extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/registers");
    }

    /**
     *
     * @param {Object} options
     * @param {Number} [options.StartingAfter]
     * @param {Number} [options.EndingBefore]
     * @param {Number} [options.Limit]
     * @param {Array} [options.Expand]
     * @returns {Promise}
     */
    async Get(options) {
        return await this.makeFetch("get", `?${stringify(options)}`);
    }

    /**
     *
     * @param {Object} body
     * @param {String} [body.Name]
     * @param {String} [body.MacAddress]
     * @param {Number} [body.Number]
     * @param {Number} [body.StartCash]
     * @param {Number} [body.IdleTimeout]
     * @returns {Promise}
     */
    async Post(body) {
        return await this.makeFetch("post", "", body);
    }

    /**
     *
     * @param {Object} body
     * @param {String} [body.Name]
     * @param {String} [body.MacAddress]
     * @param {Number} [body.Number]
     * @param {Number} [body.StartCash]
     * @param {Number} [body.IdleTimeout]
     * @param {Number} [body.Id]
     * @returns {Promise}
     */
    async Put(body) {
        return await this.makeFetch("put", "", body);
    }

    /**
     * /{Id}
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetById(Id) {
        return await this.makeFetch("get", `/${Id}`);
    }

    /**
     * /{Id}
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async Delete(Id) {
        return await this.makeFetch("delete", `/${Id}`);
    }
}

module.exports = Registers;
