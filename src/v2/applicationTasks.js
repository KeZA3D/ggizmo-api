const api = require("../../api");
const { stringify } = require("querystring");

class ApplicationTasks extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/applications");
    }

    /**
     *
     * @param {Object} options
     * @param {String} [options.TaskName]
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
     * @param {Object} [body.TaskJunction]
     * @param {String} [body.TaskJunction.SourceDirectory]
     * @param {String} [body.TaskJunction.DestinationDirectory]
     * @param {Boolean} [body.TaskJunction.DeleteDestination]
     * @param {Object} [body.TaskNotification]
     * @param {String} [body.TaskNotification.Title]
     * @param {String} [body.TaskNotification.Message]
     * @param {Boolean} [body.TaskNotification.Wait]
     * @param {Object} [body.TaskProcess]
     * @param {String} [body.TaskProcess.FileName]
     * @param {String} [body.TaskProcess.Arguments]
     * @param {String} [body.TaskProcess.WorkingDirectory]
     * @param {String} [body.TaskProcess.Username]
     * @param {String} [body.TaskProcess.Password]
     * @param {Boolean} [body.TaskProcess.Wait]
     * @param {Boolean} [body.TaskProcess.NoWindow]
     * @param {Object} [body.TaskScript]
     * @param {Number} [body.TaskScript.ScriptType]
     * @param {String} [body.TaskScript.Data]
     * @param {Boolean} [body.TaskScript.Wait]
     * @param {Boolean} [body.TaskScript.NoWindow]
     * @param {Number} [body.TaskType]
     * @returns {Promise}
     */
    async Post(body) {
        return await this.makeFetch("post", "", body);
    }

    /**
     *
     * @param {Object} body
     * @param {String} [body.Name]
     * @param {Object} [body.TaskJunction]
     * @param {String} [body.TaskJunction.SourceDirectory]
     * @param {String} [body.TaskJunction.DestinationDirectory]
     * @param {Boolean} [body.TaskJunction.DeleteDestination]
     * @param {Object} [body.TaskNotification]
     * @param {String} [body.TaskNotification.Title]
     * @param {String} [body.TaskNotification.Message]
     * @param {Boolean} [body.TaskNotification.Wait]
     * @param {Object} [body.TaskProcess]
     * @param {String} [body.TaskProcess.FileName]
     * @param {String} [body.TaskProcess.Arguments]
     * @param {String} [body.TaskProcess.WorkingDirectory]
     * @param {String} [body.TaskProcess.Username]
     * @param {String} [body.TaskProcess.Password]
     * @param {Boolean} [body.TaskProcess.Wait]
     * @param {Boolean} [body.TaskProcess.NoWindow]
     * @param {Object} [body.TaskScript]
     * @param {Number} [body.TaskScript.ScriptType]
     * @param {String} [body.TaskScript.Data]
     * @param {Boolean} [body.TaskScript.Wait]
     * @param {Boolean} [body.TaskScript.NoWindow]
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

module.exports = ApplicationTasks;
