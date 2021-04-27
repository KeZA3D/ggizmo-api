const api = require("../../api");
const { stringify } = require("querystring");

class MonetaryUnits extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/monetaryunits");
    }

    /**
     *
     * @param {Object} options
     * @param {String} [options.Username]
     * @param {Boolean} [options.IsDeleted]
     * @param {Boolean} [options.IsDisabled]
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
     * @param {String} [body.Username]
     * @param {String} [body.Email]
     * @param {String} [body.FirstName]
     * @param {String} [body.LastName]
     * @param {String} [body.BirthDate]
     * @param {String} [body.Address]
     * @param {String} [body.City]
     * @param {String} [body.Country]
     * @param {String} [body.PostCode]
     * @param {String} [body.Phone]
     * @param {String} [body.MobilePhone]
     * @param {Number} [body.Sex]
     * @param {Boolean} [body.IsDeleted]
     * @param {Boolean} [body.IsDisabled]
     * @param {String} [body.SmartCardUid]
     * @param {String} [body.Identification]
     * @param {String} [body.Password]
     * @returns {Promise}
     */
    async Post(body) {
        return await this.makeFetch("post", "", body);
    }

    /**
     *
     * @param {Object} body
     * @param {String} [body.Username]
     * @param {String} [body.Email]
     * @param {String} [body.FirstName]
     * @param {String} [body.LastName]
     * @param {String} [body.BirthDate]
     * @param {String} [body.Address]
     * @param {String} [body.City]
     * @param {String} [body.Country]
     * @param {String} [body.PostCode]
     * @param {String} [body.Phone]
     * @param {String} [body.MobilePhone]
     * @param {Number} [body.Sex]
     * @param {Boolean} [body.IsDeleted]
     * @param {Boolean} [body.IsDisabled]
     * @param {String} [body.SmartCardUid]
     * @param {String} [body.Identification]
     * @param {String} [body.Password]
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

module.exports = MonetaryUnits;
