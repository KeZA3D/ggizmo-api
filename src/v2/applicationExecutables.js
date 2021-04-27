const api = require("../../api");
const { stringify } = require("querystring");

class ApplicationExecutables extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/applicationexecutables");
    }

    /**
     *
     * @param {Object} options
     * @param {String} [options.ExecutableCaption]
     * @param {Number} [options.ApplicationId]
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
     * @param {Object} body
     * @param {String} [body.Accessible]
     * @param {String} [body.Caption]
     * @param {Boolean} [body.Description]
     * @param {Boolean} [body.ApplicationModes]
     * @param {Boolean} [body.ApplicationModes.SinglePlayer]
     * @param {Boolean} [body.ApplicationModes.Online]
     * @param {Boolean} [body.ApplicationModes.Multiplayer]
     * @param {Boolean} [body.ApplicationModes.Settings]
     * @param {Boolean} [body.ApplicationModes.Utility]
     * @param {Boolean} [body.ApplicationModes.Game]
     * @param {Boolean} [body.ApplicationModes.Application]
     * @param {Boolean} [body.ApplicationModes.FreeToPlay]
     * @param {Boolean} [body.ApplicationModes.RequiresSubscription]
     * @param {Boolean} [body.ApplicationModes.FreeTrial]
     * @param {Boolean} [body.ApplicationModes.SplitScreenMultiPlayer]
     * @param {Boolean} [body.ApplicationModes.CoOpLan]
     * @param {Boolean} [body.ApplicationModes.CoOpOnline]
     * @param {Boolean} [body.ApplicationModes.OneTimePurchase]
     * @param {String} [body.ExecutablePath]
     * @param {String} [body.WorkingDirectory]
     * @param {String} [body.Arguments]
     * @param {Number} [body.RunMode]
     * @param {Number} [body.ReservationType]
     * @param {Boolean} [body.ExecutableOptions]
     * @param {Boolean} [body.ExecutableOptions.AutoLaunch]
     * @param {Boolean} [body.ExecutableOptions.MonitorChildren]
     * @param {Boolean} [body.ExecutableOptions.MultiRun]
     * @param {Boolean} [body.ExecutableOptions.KillChildren]
     * @param {Boolean} [body.ExecutableOptions.QuickLaunch]
     * @param {Boolean} [body.ExecutableOptions.ShellExecute]
     * @param {Boolean} [body.ExecutableOptions.IgnoreConcurrentExecutionLimit]
     * @param {Number} [body.DisplayOrder]
     * @param {Number} [body.ApplicationId]
     * @param {Number} [body.DefaultDeploymentId]
     * @returns {Promise}
     */
    async Post(body) {
        return await this.makeFetch("post", "", body);
    }

    /**
     *
     * @param {Object} body
     * @param {String} [body.Accessible]
     * @param {String} [body.Caption]
     * @param {Boolean} [body.Description]
     * @param {Boolean} [body.ApplicationModes]
     * @param {Boolean} [body.ApplicationModes.SinglePlayer]
     * @param {Boolean} [body.ApplicationModes.Online]
     * @param {Boolean} [body.ApplicationModes.Multiplayer]
     * @param {Boolean} [body.ApplicationModes.Settings]
     * @param {Boolean} [body.ApplicationModes.Utility]
     * @param {Boolean} [body.ApplicationModes.Game]
     * @param {Boolean} [body.ApplicationModes.Application]
     * @param {Boolean} [body.ApplicationModes.FreeToPlay]
     * @param {Boolean} [body.ApplicationModes.RequiresSubscription]
     * @param {Boolean} [body.ApplicationModes.FreeTrial]
     * @param {Boolean} [body.ApplicationModes.SplitScreenMultiPlayer]
     * @param {Boolean} [body.ApplicationModes.CoOpLan]
     * @param {Boolean} [body.ApplicationModes.CoOpOnline]
     * @param {Boolean} [body.ApplicationModes.OneTimePurchase]
     * @param {String} [body.ExecutablePath]
     * @param {String} [body.WorkingDirectory]
     * @param {String} [body.Arguments]
     * @param {Number} [body.RunMode]
     * @param {Number} [body.ReservationType]
     * @param {Boolean} [body.ExecutableOptions]
     * @param {Boolean} [body.ExecutableOptions.AutoLaunch]
     * @param {Boolean} [body.ExecutableOptions.MonitorChildren]
     * @param {Boolean} [body.ExecutableOptions.MultiRun]
     * @param {Boolean} [body.ExecutableOptions.KillChildren]
     * @param {Boolean} [body.ExecutableOptions.QuickLaunch]
     * @param {Boolean} [body.ExecutableOptions.ShellExecute]
     * @param {Boolean} [body.ExecutableOptions.IgnoreConcurrentExecutionLimit]
     * @param {Number} [body.DisplayOrder]
     * @param {Number} [body.ApplicationId]
     * @param {Number} [body.DefaultDeploymentId]
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
     * /{Id}/personalfiles
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetPersonalFile(Id) {
        return await this.makeFetch("get", `/${Id}/personalfiles`);
    }

    /**
     * /{Id}/personalfiles
     *
     * @param {Number} [Id]
     * @param {Object} body
     * @param {Number} [body.PersonalFileId]
     * @param {Number} [body.UseOrder]
     * @returns {Promise}
     */
    async PostPersonalFile(Id, body) {
        return await this.makeFetch("post", `/${Id}/personalfiles`, body);
    }

    /**
     * /personalfiles
     *
     * @param {Number} [Id]
     * @param {Object} body
     * @param {Number} [body.PersonalFileId]
     * @param {Number} [body.UseOrder]
     * @param {Number} [body.ApplicationExecutableId]
     * @returns {Promise}
     */
    async PutPersonalFile(body) {
        return await this.makeFetch("put", `/personalfiles`, body);
    }

    /**
     * /{Id}/personalfiles
     *
     * @param {Number} [Id]
     * @param {Number} [PersonalFileId]
     * @returns {Promise}
     */
    async DeletePersonalFile(Id, PersonalFileId) {
        return await this.makeFetch(
            "delete",
            `/${Id}/personalfiles/${PersonalFileId}`
        );
    }

    /**
     * /{Id}/deployments
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetDeployment(Id) {
        return await this.makeFetch("get", `/${Id}/deployments`);
    }

    /**
     * /{Id}/deployments
     *
     * @param {Number} [Id]
     * @param {Object} body
     * @param {Number} [body.DeploymentId]
     * @param {Number} [body.UseOrder]
     * @returns {Promise}
     */
    async PostDeployment(Id, body) {
        return await this.makeFetch("post", `/${Id}/deployments`, body);
    }

    /**
     * /deployments
     *
     * @param {Number} Id
     * @param {Object} body
     * @param {Number} [body.DeploymentId]
     * @param {Number} [body.UseOrder]
     * @param {Number} [body.ApplicationExecutableId]
     * @returns {Promise}
     */
    async PutDeployment(body) {
        return await this.makeFetch("put", `/deployments`, body);
    }

    /**
     * /{Id}/deployments/{deploymentId}
     *
     * @param {Number} [Id]
     * @param {Number} [DeploymentId]
     * @returns {Promise}
     */
    async DeleteDeployment(Id, DeploymentId) {
        return await this.makeFetch("delete", `/${Id}/deployments/${DeploymentId}`);
    }

    /**
     * /{Id}/tasks
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetTask(Id) {
        return await this.makeFetch("get", `/${Id}/tasks`);
    }

    /**
     * /{Id}/tasks
     *
     * @param {Number} [Id]
     * @param {Object} body
     * @param {Number} [body.TaskId]
     * @param {Boolean} [body.PreDeploy]
     * @param {Boolean} [body.PreLicenseManagement]
     * @param {Boolean} [body.PreLaunch]
     * @param {Boolean} [body.PostTermination]
     * @param {Number} [body.UseOrder]
     * @param {Boolean} [body.IsEnabled]
     * @returns {Promise}
     */
    async PostTask(Id, body) {
        return await this.makeFetch("post", `/${Id}/tasks`, body);
    }

    /**
     * /tasks
     *
     * @param {Object} body
     * @param {Number} [body.TaskId]
     * @param {Boolean} [body.PreDeploy]
     * @param {Boolean} [body.PreLicenseManagement]
     * @param {Boolean} [body.PreLaunch]
     * @param {Boolean} [body.PostTermination]
     * @param {Number} [body.UseOrder]
     * @param {Boolean} [body.IsEnabled]
     * @param {Number} [body.ApplicationExecutableId]
     * @returns {Promise}
     */
    async PutTask(body) {
        return await this.makeFetch("put", `/tasks`, body);
    }

    /**
     * /{id}/tasks/{taskId}
     *
     * @param {Number} [Id]
     * @param {Number} [TaskId]
     * @returns {Promise}
     */
    async DeleteTask(Id, TaskId) {
        return await this.makeFetch("delete", `/${Id}/tasks/${TaskId}`);
    }

    /**
     * /{Id}/licenses
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetLicense(Id) {
        return await this.makeFetch("get", `/${Id}/licenses`);
    }

    /**
     * /{Id}/licenses
     *
     * @param {Number} [Id]
     * @param {Object} body
     * @param {Number} [body.LicenseId]
     * @param {Number} [body.UseOrder]
     * @returns {Promise}
     */
    async PostLicense(Id, body) {
        return await this.makeFetch("post", `/${Id}/licenses`, body);
    }

    /**
     * /licenses
     *
     * @param {Object} body
     * @param {Number} [body.LicenseId]
     * @param {Number} [body.UseOrder]
     * @param {Number} [body.ApplicationExecutableId]
     * @returns {Promise}
     */
    async PutLicense(body) {
        return await this.makeFetch("put", `/licenses`, body);
    }

    /**
     * /{id}/licenses/{LicenseId}
     *
     * @param {Number} [Id]
     * @param {Number} [LicenseId]
     * @returns {Promise}
     */
    async DeleteLicense(Id, LicenseId) {
        return await this.makeFetch("delete", `/${Id}/licenses/${LicenseId}`);
    }

    /**
     * /{Id}/cdimages
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetCDImage(Id) {
        return await this.makeFetch("get", `/${Id}/cdimages`);
    }

    /**
     * /{Id}/cdimages
     *
     * @param {Number} [Id]
     * @param {Object} body
     * @param {String} [body.Path]
     * @param {String} [body.MountOptions]
     * @param {String} [body.DeviceId]
     * @param {Boolean} [body.CheckExitCode]
     * @returns {Promise}
     */
    async PostCDImage(Id, body) {
        return await this.makeFetch("post", `/${Id}/cdimages`, body);
    }

    /**
     * /cdimages
     *
     * @param {Object} body
     * @param {String} [body.Path]
     * @param {String} [body.MountOptions]
     * @param {String} [body.DeviceId]
     * @param {Boolean} [body.CheckExitCode]
     * @param {Number} [body.Id]
     * @param {Number} [body.ApplicationExecutableId]
     * @returns {Promise}
     */
    async PutCDImage(body) {
        return await this.makeFetch("put", `/cdimages`, body);
    }

    /**
     * /{id}/cdimages/{CDImageId}
     *
     * @param {Number} [Id]
     * @param {Number} [CDImageId]
     * @returns {Promise}
     */
    async DeleteCDImage(Id, CDImageId) {
        return await this.makeFetch("delete", `/${Id}/cdimages/${CDImageId}`);
    }

    /**
     * /{Id}/image
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetImageById(Id) {
        return await this.makeFetch("get", `/${Id}/image`);
    }

    /**
     * /image
     *
     * @param {Object} body
     * @param {String} [body.Image]
     * @returns {Promise}
     */
    async PutImage(Id,body) {
        return await this.makeFetch("put", `/${Id}/image`, body);
    }
}

module.exports = ApplicationExecutables;
