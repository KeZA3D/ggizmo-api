const api = require("../../api");
const { stringify } = require("querystring");

class Users extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/users");
    }

    /**
     *
     * @param {Object} options
     * @param {String} [options.UserGroupId]
     * @param {String} [options.Username]
     * @param {Boolean} [options.IsGuest]
     * @param {Boolean} [options.IsDisabled]
     * @param {Boolean} [options.IsDeleted]
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
     * @param {Number} [body.UserGroupId]
     * @param {Boolean} [body.IsNegativeBalanceAllowed]
     * @param {Boolean} [body.IsPersonalInfoRequested]
     * @param {String} [body.EnableDate]
     * @param {String} [body.DisabledDate]
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
     * @param {Number} [body.UserGroupId]
     * @param {Boolean} [body.IsNegativeBalanceAllowed]
     * @param {Boolean} [body.IsPersonalInfoRequested]
     * @param {String} [body.EnableDate]
     * @param {String} [body.DisabledDate]
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

    /**
     * /attributes
     *
     * @param {Object} body
     * @param {Number} [body.AttributeId]
     * @param {String} [body.Value]
     * @returns {Promise}
     */
    async PostAttribute(Id, body) {
        return await this.makeFetch("post", `/${Id}/attributes`, body);
    }

    /**
     * /attributes
     *
     * @param {Object} body
     * @param {Number} [body.AttributeId]
     * @param {String} [body.Value]
     * @param {Number} [body.UserId]
     * @param {Number} [body.Id]
     * @returns {Promise}
     */
    async PutAttribute(body) {
        return await this.makeFetch("put", "/attributes", body);
    }

    /**
     * /{Id}/attributes
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetAttributeById(Id) {
        return await this.makeFetch("get", `/${Id}/attributes`);
    }

    /**
     * /{Id}/attributes/{UserAttributeId}
     *
     * @param {Number} [Id]
     * @param {Number} [UserAttributeId]
     * @returns {Promise}
     */
    async DeleteAttribute(Id, UserAttributeId) {
        return await this.makeFetch(
            "delete",
            `/${Id}/attributes/${UserAttributeId}`
        );
    }

    /**
     * /{Id}/notes
     *
     * @param {Object} options
     * @param {Number} [options.StartingAfter]
     * @param {Number} [options.EndingBefore]
     * @param {Number} [options.Limit]
     * @param {Array} [options.Expand]
     * @returns {Promise}
     */
    async GetNotes(Id, options) {
        return await this.makeFetch("get", `/${Id}/notes?${stringify(options)}`);
    }

    /**
     * /{Id}/notes
     *
     * @param {Object} body
     * @param {String} [body.Text]
     * @param {Number} [body.Severity]
     * @returns {Promise}
     */
    async PostNotes(Id, body) {
        return await this.makeFetch("post", `/${Id}/notes`, body);
    }

    /**
     * /notes
     *
     * @param {Object} body
     * @param {String} [body.Text]
     * @param {Number} [body.Severity]
     * @param {Number} [body.Id]
     * @returns {Promise}
     */
    async PutNotes(body) {
        return await this.makeFetch("put", "/notes", body);
    }

    /**
     * /{Id}/notes/UserNoteId
     *
     * @param {Number} [Id]
     * @param {Number} [UserNoteId]
     * @returns {Promise}
     */
    async GetNotesById(Id, UserNoteId) {
        return await this.makeFetch("get", `/${Id}/notes/${UserNoteId}`);
    }

    /**
     * /{Id}/notes/UserNoteId
     *
     * @param {Number} [Id]
     * @param {Number} [UserNoteId]
     * @returns {Promise}
     */
    async DeleteNotes(Id, UserNoteId) {
        return await this.makeFetch("delete", `/${Id}/notes/${UserNoteId}`);
    }

    /**
     * /{Id}/picture
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetPicture(Id) {
        return await this.makeFetch("get", `/${Id}/picture`);
    }

    
    /**
     *
     * @param {Number} [Id]
     * @param {Object} body
     * @param {String} [body.Picture]
     * @returns {Promise}
     */
     async PutPicture(Id,body) {
        return await this.makeFetch("put", `/${Id}/picture`, body);
    }
}

module.exports = Users;
