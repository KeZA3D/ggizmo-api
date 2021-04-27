const api = require("../../api");
const { stringify } = require("querystring");

class UserGroups extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/usergroups");
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
     * @param {String}  [body.Name]
     * @param {String}  [body.Description]
     * @param {Number}  [body.BillingProfileId]
     * @param {Object[]}  [body.RequiredUserInfo]
     * @param {Boolean}  [body.RequiredUserInfo[].FirstName]
     * @param {Boolean}  [body.RequiredUserInfo[].LastName]
     * @param {Boolean}  [body.RequiredUserInfo[].BirthDate]
     * @param {Boolean}  [body.RequiredUserInfo[].Address]
     * @param {Boolean}  [body.RequiredUserInfo[].City]
     * @param {Boolean}  [body.RequiredUserInfo[].PostCode]
     * @param {Boolean}  [body.RequiredUserInfo[].State]
     * @param {Boolean}  [body.RequiredUserInfo[].Country]
     * @param {Boolean}  [body.RequiredUserInfo[].Email]
     * @param {Boolean}  [body.RequiredUserInfo[].Phone]
     * @param {Boolean}  [body.RequiredUserInfo[].Mobile]
     * @param {Boolean}  [body.RequiredUserInfo[].Sex]
     * @param {Boolean}  [body.RequiredUserInfo[].Password]
     * @param {Boolean}  [body.OverrideApplicationGroup]
     * @param {Number}  [body.ApplicationGroupId]
     * @param {Boolean}  [body.OverrideSecurityProfile]
     * @param {Number}  [body.SecurityProfileId]
     * @param {Boolean}  [body.OverrideAgeRating]
     * @param {Boolean}  [body.IsAgeRatingEnabled]
     * @param {Boolean}  [body.EnablePersonalStorage]
     * @param {Boolean}  [body.HideLogoutButton]
     * @param {Boolean}  [body.DisallowLoginFromClient]
     * @param {Boolean}  [body.GuestUse]
     * @param {Boolean}  [body.GuestUseOnly]
     * @param {Boolean}  [body.DisallowLoginFromManager]
     * @param {Boolean}  [body.IsNegativeBalanceAllowed]
     * @param {Number}  [body.CreditLimit]
     * @param {Number}  [body.PointsAwardOptions]
     * @param {Number}  [body.PointsMoneyRatio]
     * @param {Number}  [body.PointsTimeRatio]
     * @param {Number}  [body.PointsAward]
     * @param {Boolean}  [body.IsDefault]
     * @param {Boolean}  [body.DisableTimeOffer]
     * @param {Boolean}  [body.DisableFixedTime]
     * @param {Boolean}  [body.DisableDeposit]
     * @param {Boolean}  [body.IsWaitingLinePriorityEnabled]
     * @param {Number}  [body.WaitingLinePriority]
     * @returns {Promise}
     */
    async Post(body) {
        return await this.makeFetch("post", "", body);
    }

    /**
     *
     * @param {Object} body
     * @param {String}  [body.Name]
     * @param {String}  [body.Description]
     * @param {Number}  [body.BillingProfileId]
     * @param {Object[]}  [body.RequiredUserInfo]
     * @param {Boolean}  [body.RequiredUserInfo[].FirstName]
     * @param {Boolean}  [body.RequiredUserInfo[].LastName]
     * @param {Boolean}  [body.RequiredUserInfo[].BirthDate]
     * @param {Boolean}  [body.RequiredUserInfo[].Address]
     * @param {Boolean}  [body.RequiredUserInfo[].City]
     * @param {Boolean}  [body.RequiredUserInfo[].PostCode]
     * @param {Boolean}  [body.RequiredUserInfo[].State]
     * @param {Boolean}  [body.RequiredUserInfo[].Country]
     * @param {Boolean}  [body.RequiredUserInfo[].Email]
     * @param {Boolean}  [body.RequiredUserInfo[].Phone]
     * @param {Boolean}  [body.RequiredUserInfo[].Mobile]
     * @param {Boolean}  [body.RequiredUserInfo[].Sex]
     * @param {Boolean}  [body.RequiredUserInfo[].Password]
     * @param {Boolean}  [body.OverrideApplicationGroup]
     * @param {Number}  [body.ApplicationGroupId]
     * @param {Boolean}  [body.OverrideSecurityProfile]
     * @param {Number}  [body.SecurityProfileId]
     * @param {Boolean}  [body.OverrideAgeRating]
     * @param {Boolean}  [body.IsAgeRatingEnabled]
     * @param {Boolean}  [body.EnablePersonalStorage]
     * @param {Boolean}  [body.HideLogoutButton]
     * @param {Boolean}  [body.DisallowLoginFromClient]
     * @param {Boolean}  [body.GuestUse]
     * @param {Boolean}  [body.GuestUseOnly]
     * @param {Boolean}  [body.DisallowLoginFromManager]
     * @param {Boolean}  [body.IsNegativeBalanceAllowed]
     * @param {Number}  [body.CreditLimit]
     * @param {Number}  [body.PointsAwardOptions]
     * @param {Number}  [body.PointsMoneyRatio]
     * @param {Number}  [body.PointsTimeRatio]
     * @param {Number}  [body.PointsAward]
     * @param {Boolean}  [body.IsDefault]
     * @param {Boolean}  [body.DisableTimeOffer]
     * @param {Boolean}  [body.DisableFixedTime]
     * @param {Boolean}  [body.DisableDeposit]
     * @param {Boolean}  [body.IsWaitingLinePriorityEnabled]
     * @param {Number}  [body.WaitingLinePriority]
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
     * @param {Object} body
     * @param {Number} [body.HostGroupId]
     * @param {Boolean} [body.IsDisallowed]
     * @returns {Promise}
     */
    async PostDisallowedHostGroups(Id, body) {
        return await this.makeFetch("post", `/${Id}/disallowedhostgroups`, body);
    }

    /**
     *
     * @param {Object} body
     * @param {Number} [body.HostGroupId]
     * @param {Number} [body.UserGroupId]
     * @param {Boolean} [body.IsDisallowed]
     * @param {Number} [body.Id]
     * @returns {Promise}
     */
    async PutDisallowedHostGroups(body) {
        return await this.makeFetch("put", "/disallowedhostgroups", body);
    }

    /**
     * /{Id}
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetDisallowedHostGroupsById(Id) {
        return await this.makeFetch("get", `/${Id}/disallowedhostgroups`);
    }

    /**
     * /{Id}
     *
     * @param {Number} [Id]
     * @param {Number} [UserGroupDisallowedHostGroupId]
     * @returns {Promise}
     */
    async DeleteDisallowedHostGroups(Id,UserGroupDisallowedHostGroupId) {
        return await this.makeFetch("delete", `/${Id}/disallowedhostgroups/${UserGroupDisallowedHostGroupId}`);
    }
}

module.exports = UserGroups;
