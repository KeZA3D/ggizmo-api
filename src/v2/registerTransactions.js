const api = require("../../api");
const { stringify } = require("querystring");

class RegisterTransactions extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/registertransactions");
    }

    /**
     *
     * @param {Object} options
     * @param {String} [options.DateFrom]
     * @param {String} [options.DateTo]
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
     * /{Id}
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetById(Id) {
        return await this.makeFetch("get", `/${Id}`);
    }
}

module.exports = RegisterTransactions;
