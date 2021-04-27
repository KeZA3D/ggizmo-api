const api = require("../../api");
const { stringify } = require("querystring");

class Invoices extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/invoices");
    }

    /**
     *
     * @param {Object} options
     * @param {String} [options.DateFrom]
     * @param {String} [options.DateTo]
     * @param {Boolean} [options.IsVoided]
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
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async Put(Id) {
        return await this.makeFetch("put", `/${Id}/void`);
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

module.exports = Invoices;
