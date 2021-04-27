const api = require("../../api");
const { stringify } = require("querystring");

class Reservations extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/reservations");
    }

    /**
     *
     * @param {Object} options
     * @param {String} [options.DateFrom]
     * @param {String} [options.DateTo]
     * @param {Number} [options.Status]
     * @param {Number} [options.UserId]
     * @param {String} [options.ContactPhone]
     * @param {String} [options.ContactEmail]
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
     * @param {String} [body.Date]
     * @param {Number} [body.Duration]
     * @param {String} [body.ContactPhone]
     * @param {String} [body.ContactEmail]
     * @param {String} [body.Note]
     * @param {String} [body.Pin]
     * @param {Number} [body.Status]
     * @param {Object[]} [body.Hosts]
     * @param {Number} [body.Hosts[].HostId]
     * @param {Object[]} [body.Users]
     * @param {Number} [body.Users[].UserId]
     * @returns {Promise}
     */
    async Post(body) {
        return await this.makeFetch("post", "", body);
    }

    /**
     *
     * @param {Object} body
     * @param {Number} [body.UserId]
     * @param {String} [body.Date]
     * @param {Number} [body.Duration]
     * @param {String} [body.ContactPhone]
     * @param {String} [body.ContactEmail]
     * @param {String} [body.Note]
     * @param {String} [body.Pin]
     * @param {Number} [body.Status]
     * @param {Object[]} [body.Hosts]
     * @param {Number} [body.Hosts[].HostId]
     * @param {Object[]} [body.Users]
     * @param {Number} [body.Users[].UserId]
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

module.exports = Reservations;
