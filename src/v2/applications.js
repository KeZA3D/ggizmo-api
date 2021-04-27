const api = require("../../api");
const { stringify } = require("querystring");

class Applications extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/applications");
    }

    /**
     *
     * @param {Object} options
     * @param {String} [options.ApplicationTitle]
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
     * @param {String} [body.Title]
     * @param {String} [body.Description]
     * @param {String} [body.Version]
     * @param {Number} [body.ApplicationCategoryId]
     * @param {Number} [body.DeveloperId]
     * @param {Number} [body.PublisherId]
     * @param {Number} [body.AgeRating]
     * @param {String} [body.ReleaseDate]
     * @param {Number} [body.DefaultExecutableId]
     * @returns {Promise}
     */
    async Post(body) {
        return await this.makeFetch("post", "", body);
    }

    /**
     *
     * @param {Object} body
     * @param {String} [body.Title]
     * @param {String} [body.Description]
     * @param {String} [body.Version]
     * @param {Number} [body.ApplicationCategoryId]
     * @param {Number} [body.DeveloperId]
     * @param {Number} [body.PublisherId]
     * @param {Number} [body.AgeRating]
     * @param {String} [body.ReleaseDate]
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
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetImage(Id) {
        return await this.makeFetch("get", `/${Id}/image`);
    }

    /**
     *
     * @param {Number} [Id]
     * @param {Object} body
     * @param {String} [body.Image]
     * @returns {Promise}
     */
    async PutImage(Id, body) {
        return await this.makeFetch("put", `/${Id}/image`, body);
    }
}

module.exports = Applications;
