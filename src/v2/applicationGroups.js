const api = require("../../api");
const { stringify } = require("querystring");

class ApplicationGroups extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/applicationgroups");
    }

    /**
     *
     * @param {Object} options
     * @param {String} [options.GroupName]
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
     * @returns {Promise}
     */
    async Post(body) {
        return await this.makeFetch("post", "", body);
    }

    /**
     *
     * @param {Object} body
     * @param {String} [body.Name]
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

    /**
     * /{Id}
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetApplicaitons(Id) {
        return await this.makeFetch("get", `/${Id}/applcations`);
    }

    /**
     *
     * @param {Number} [Id]
     * @param {Object} body
     * @param {String} [body.ApplicationId]
     * @returns {Promise}
     */
    async PostApplications(Id,body) {
        return await this.makeFetch("post", `/${Id}/applcations`, body);
    }

    /**
     * /{Id}
     *
     * @param {Number} [Id]
     * @param {Number} [ApplicationId]
     * @returns {Promise}
     */
    async DeleteApplication(Id,ApplicationId) {
        return await this.makeFetch("delete", `/${Id}/applications/${ApplicationId}`);
    }
}

module.exports = ApplicationGroups;
