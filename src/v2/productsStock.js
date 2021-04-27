const api = require("../../api");
const { stringify } = require("querystring");

class ProductsStock extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/productsstock");
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
     * @param {Number} [body.Amount]
     * @param {Number} [body.Type]
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
}

module.exports = ProductsStock;
