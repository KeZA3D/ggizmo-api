const api = require("../../api");
const { stringify } = require("querystring");

class AssetTransactions extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/assettransactions");
    }

    /**
     *
     * @param {Object} options
     * @param {String} [options.DateFrom]
     * @param {String} [options.DateTo]
     * @param {Number} [options.UserId]
     * @param {Boolean} [options.IsActive]
     * @param {String} [options.StartingAfter]
     * @param {String} [options.EndingBefore]
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

module.exports = AssetTransactions;
