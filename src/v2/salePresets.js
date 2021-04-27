const api = require("../../api");
const { stringify } = require("querystring");

class SalePresets extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/salepresets");
    }

    /**
     * /time
     * 
     * @param {Object} options
     * @param {Number} [options.StartingAfter]
     * @param {Number} [options.EndingBefore]
     * @param {Number} [options.Limit]
     * @param {Array} [options.Expand]
     * @returns {Promise}
     */
    async GetTime(options) {
        return await this.makeFetch("get", `/time?${stringify(options)}`);
    }

    /**
     * /time
     * 
     * @param {Object} body
     * @param {Number} [body.Value]
     * @param {Number} [body.DisplayOrder]
     * @returns {Promise}
     */
    async PostTime(body) {
        return await this.makeFetch("post", "/time", body);
    }

    /**
     * /time
     * 
     * @param {Object} body
     * @param {Number} [body.Value]
     * @param {Number} [body.DisplayOrder]
     * @param {Number} [body.Id]
     * @returns {Promise}
     */
    async PutTime(body) {
        return await this.makeFetch("put", "/time", body);
    }

    /**
     * /time/{Id}
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetTimeById(Id) {
        return await this.makeFetch("get", `/time/${Id}`);
    }

    /**
     * /time/{Id}
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async DeleteTime(Id) {
        return await this.makeFetch("delete", `/time/${Id}`);
    }

    
    /**
     * /money
     * 
     * @param {Object} options
     * @param {Number} [options.StartingAfter]
     * @param {Number} [options.EndingBefore]
     * @param {Number} [options.Limit]
     * @param {Array} [options.Expand]
     * @returns {Promise}
     */
     async GetMoney(options) {
        return await this.makeFetch("get", `?${stringify(options)}`);
    }

    /**
     * /money
     * 
     * @param {Object} body
     * @param {Number} [body.Value]
     * @param {Number} [body.DisplayOrder]
     * @returns {Promise}
     */
    async PostMoney(body) {
        return await this.makeFetch("post", "", body);
    }

    /**
     * /money
     * 
     * @param {Object} body
     * @param {Number} [body.Value]
     * @param {Number} [body.DisplayOrder]
     * @param {Number} [body.Id]
     * @returns {Promise}
     */
    async PutMoney(body) {
        return await this.makeFetch("put", "", body);
    }

    /**
     * /money/{Id}
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetMoneyById(Id) {
        return await this.makeFetch("get", `/${Id}`);
    }

    /**
     * /money/{Id}
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async DeleteMoney(Id) {
        return await this.makeFetch("delete", `/${Id}`);
    }
}

module.exports = SalePresets;
