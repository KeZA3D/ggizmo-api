const api = require("../../api");
const { stringify } = require("querystring");

class Deposittransactions extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/deposittransactions");
    }

    /**
     *
     * @param {Object} options
     * @param {String} [options.DateFrom]
     * @param {String} [options.DateTo]
     * @param {Number} [options.UserId]
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
     * @param {Number} [body.UserId]
     * @param {Number} [body.Type]
     * @param {Number} [body.Amount]
     * @param {Number} [body.PaymentMethodId]
     * @returns {Promise}
     */
    async Post(body) {
        return await this.makeFetch("post", "", body);
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

module.exports = Deposittransactions;
