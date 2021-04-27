const api = require("../../api");
const { stringify } = require("querystring");

class ApplicationLicenses extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/applicationlicenses");
    }

    /**
     *
     * @param {Object} options
     * @param {String} [options.LicenseName]
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

module.exports = ApplicationLicenses;
