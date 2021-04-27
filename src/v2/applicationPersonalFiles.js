const api = require("../../api");
const { stringify } = require("querystring");

class ApplicationPersonalFiles extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/applicationpersonalfiles");
    }

    /**
     *
     * @param {Object} options
     * @param {String} [options.PersonalFileName]
     * @param {String} [options.PersonalFileCaption]
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
     * @param {Number} [body.Type]
     * @param {String} [body.Name]
     * @param {String} [body.Caption]
     * @param {String} [body.Description]
     * @param {Boolean} [body.Accessible]
     * @param {String} [body.Source]
     * @param {Number} [body.Activation]
     * @param {Number} [body.MaxQuota]
     * @param {Number} [body.CompressionLevel]
     * @param {Boolean} [body.CleanUp]
     * @param {Boolean} [body.Store]
     * @param {Object} [body.DirectioryOptions]
     * @param {Boolean} [body.DirectioryOptions.IncludeSubDirectories]
     * @param {String} [body.DirectioryOptions.ExcludeFiles]
     * @param {String} [body.DirectioryOptions.ExcludeDirectories]
     * @param {String} [body.DirectioryOptions.IncludeFiles]
     * @param {String} [body.DirectioryOptions.IncludeDirectiories]
     * @returns {Promise}
     */
    async Post(body) {
        return await this.makeFetch("post", "", body);
    }

    /**
     *
     * @param {Object} body
     * @param {Number} [body.Type]
     * @param {String} [body.Name]
     * @param {String} [body.Caption]
     * @param {String} [body.Description]
     * @param {Boolean} [body.Accessible]
     * @param {String} [body.Source]
     * @param {Number} [body.Activation]
     * @param {Number} [body.MaxQuota]
     * @param {Number} [body.CompressionLevel]
     * @param {Boolean} [body.CleanUp]
     * @param {Boolean} [body.Store]
     * @param {Object} [body.DirectioryOptions]
     * @param {Boolean} [body.DirectioryOptions.IncludeSubDirectories]
     * @param {String} [body.DirectioryOptions.ExcludeFiles]
     * @param {String} [body.DirectioryOptions.ExcludeDirectories]
     * @param {String} [body.DirectioryOptions.IncludeFiles]
     * @param {String} [body.DirectioryOptions.IncludeDirectiories]
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

module.exports = ApplicationPersonalFiles;
