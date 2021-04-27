const api = require("../../api");
const { stringify } = require("querystring");

class PaymentMethods extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/paymentmethods");
    }

    /**
     *
     * @param {Object} options
     * @param {String} [options.Name]
     * @param {Boolean} [options.IsDeleted]
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
     * @param {Number} [body.DisplayOrder]
     * @param {Boolean} [body.IsEnabled]
     * @param {Boolean} [body.AvailableInManager]
     * @param {Boolean} [body.AvailableInClient]
     * @param {Boolean} [body.IsDeleted]
     * @returns {Promise}
     */
    async Post(body) {
        return await this.makeFetch("post", "", body);
    }

    /**
     *
     * @param {Object} body
     * @param {String} [body.Name]
     * @param {Number} [body.DisplayOrder]
     * @param {Boolean} [body.IsEnabled]
     * @param {Boolean} [body.AvailableInManager]
     * @param {Boolean} [body.AvailableInClient]
     * @param {Boolean} [body.IsDeleted]
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

module.exports = PaymentMethods;
