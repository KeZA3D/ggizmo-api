const api = require('../../api');
const { stringify } = require('querystring');

class ApplicationDeployments extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/applicationdeployments")
    }

    /**
    * 
    * @param {Object} options 
    * @param {String} [options.DeploymentName]
    * @param {Number} [options.StartingAfter]
    * @param {Number} [options.EndingBefore]
    * @param {Number} [options.Limit]
    * @param {Array} Expand
    * @returns {Promise}
    */
    async Get(options) {
        return await this.makeFetch("get", `?${stringify(options)}`);
    }

    /**
     * 
     * @param {Object}  body
     * @param {String}  [body.Name] 
     * @param {String}  [body.Destination] 
     * @param {String}  [body.Source] 
     * @param {String}  [body.RegistryString] 
     * @param {Number}  [body.ComparisonMode] 
     * @param {Object}  [body.DeploymentOptions] 
     * @param {Boolean} [body.DeploymentOptions.IgnoreCleanup] 
     * @param {Boolean} [body.DeploymentOptions.RepairOnly] 
     * @param {Boolean} [body.DeploymentOptions.DirectAccess] 
     * @param {Boolean} [body.DeploymentOptions.Mirror] 
     * @param {Boolean} [body.DeploymentOptions.IncludeSubDirectories] 
     * @returns {Promise}
     */
    async Post(body) {
        return await this.makeFetch("post", "", body);
    }

    /**
     * 
     * @param {Object}  body
     * @param {String}  [body.Name] 
     * @param {String}  [body.Destination] 
     * @param {String}  [body.Source] 
     * @param {String}  [body.RegistryString] 
     * @param {Number}  [body.ComparisonMode] 
     * @param {Object}  [body.DeploymentOptions] 
     * @param {Boolean} [body.DeploymentOptions.IgnoreCleanup] 
     * @param {Boolean} [body.DeploymentOptions.RepairOnly] 
     * @param {Boolean} [body.DeploymentOptions.DirectAccess] 
     * @param {Boolean} [body.DeploymentOptions.Mirror] 
     * @param {Boolean} [body.DeploymentOptions.IncludeSubDirectories] 
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

module.exports = ApplicationDeployments;