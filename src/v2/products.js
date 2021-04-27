const api = require("../../api");
const { stringify } = require("querystring");

class Products extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/products");
    }

    /**
     *
     * @param {Object} options
     * @param {Number} [options.ProductType]
     * @param {Number} [options.ProductGroupId]
     * @param {String} [options.ProductName]
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
     * @param {Number} [body.ProductGroupId]
     * @param {String} [body.Name]
     * @param {String} [body.Description]
     * @param {Number} [body.Price]
     * @param {Number} [body.Cost]
     * @param {Boolean} [body.DisallowClientOrder]
     * @param {Boolean} [body.RestrictGuestSale]
     * @param {Boolean} [body.RestrictSale]
     * @param {Number} [body.PurchaseOptions]
     * @param {Number} [body.Points]
     * @param {Number} [body.PointsPrice]
     * @param {String} [body.Barcode]
     * @param {Boolean} [body.EnableStock]
     * @param {Boolean} [body.DisallowSaleIfOutOfStock]
     * @param {Boolean} [body.StockAlert]
     * @param {Number} [body.StockAlertThreshold]
     * @param {Boolean} [body.StockTargetDifferentProduct]
     * @param {Number} [body.StockTargetProductId]
     * @param {Number} [body.StockProductAmount]
     * @param {Boolean} [body.IsDeleted]
     * @param {Number} [body.DisplayOrder]
     * @param {Object} [body.TimeProduct]
     * @param {Number} [body.TimeProduct.Minutes]
     * @param {Boolean} [body.TimeProduct.ExpiresAtLogout]
     * @param {Boolean} [body.TimeProduct.ExpiresAtDayTime]
     * @param {Number} [body.TimeProduct.ExpiresAtDayTimeMinute]
     * @param {Boolean} [body.TimeProduct.ExpiresAfterTime]
     * @param {Number} [body.TimeProduct.ExpiresAfterType]
     * @param {Number} [body.TimeProduct.ExpiresAfter]
     * @param {Number} [body.TimeProduct.ExpiresFrom]
     * @param {Number} [body.TimeProduct.UseOrder]
     * @param {Object} [body.Bundle]
     * @param {Boolean} [body.Bundle.SelfStock]
     * @param {Number} [body.ProductType]
     *
     * @returns {Promise}
     */
    async Post(body) {
        return await this.makeFetch("post", "", body);
    }

    /**
     *
     * @param {Object} body
     * @param {Number} [body.ProductGroupId]
     * @param {String} [body.Name]
     * @param {String} [body.Description]
     * @param {Number} [body.Price]
     * @param {Number} [body.Cost]
     * @param {Boolean} [body.DisallowClientOrder]
     * @param {Boolean} [body.RestrictGuestSale]
     * @param {Boolean} [body.RestrictSale]
     * @param {Number} [body.PurchaseOptions]
     * @param {Number} [body.Points]
     * @param {Number} [body.PointsPrice]
     * @param {String} [body.Barcode]
     * @param {Boolean} [body.EnableStock]
     * @param {Boolean} [body.DisallowSaleIfOutOfStock]
     * @param {Boolean} [body.StockAlert]
     * @param {Number} [body.StockAlertThreshold]
     * @param {Boolean} [body.StockTargetDifferentProduct]
     * @param {Number} [body.StockTargetProductId]
     * @param {Number} [body.StockProductAmount]
     * @param {Boolean} [body.IsDeleted]
     * @param {Number} [body.DisplayOrder]
     * @param {Object} [body.TimeProduct]
     * @param {Number} [body.TimeProduct.Minutes]
     * @param {Boolean} [body.TimeProduct.ExpiresAtLogout]
     * @param {Boolean} [body.TimeProduct.ExpiresAtDayTime]
     * @param {Number} [body.TimeProduct.ExpiresAtDayTimeMinute]
     * @param {Boolean} [body.TimeProduct.ExpiresAfterTime]
     * @param {Number} [body.TimeProduct.ExpiresAfterType]
     * @param {Number} [body.TimeProduct.ExpiresAfter]
     * @param {Number} [body.TimeProduct.ExpiresFrom]
     * @param {Number} [body.TimeProduct.UseOrder]
     * @param {Object} [body.Bundle]
     * @param {Boolean} [body.Bundle.SelfStock]
     * @param {Number} [body.ProductType]
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
     * /{Id}/purchaseavailability
     *
     * @param {Object} body
     * @param {Boolean} [body.DateRange]
     * @param {Number} [body.StartDate]
     * @param {Number} [body.EndDate]
     * @param {Boolean} [body.TimeRange]
     * @param {Object[]} [body.DaysAvailable]
     * @param {Number} [body.DaysAvailable[].Day]
     * @param {Object[]} [body.DaysAvailable[].DayTimesAvailable]
     * @param {Number} [body.DaysAvailable[].DayTimesAvailable[].StartSecond]
     * @param {Number} [body.DaysAvailable[].DayTimesAvailable[].EndSecond]
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async PutPurchaseAvailability(Id, body) {
        return await this.makeFetch("put", `/${Id}/purchaseavailability`, body);
    }

    /**
     * /{Id}/purchaseavailability
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetPurchaseAvailability(Id) {
        return await this.makeFetch("get", `/${Id}/purchaseavailability`);
    }

    /**
     * /{Id}/images
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetImage(Id) {
        return await this.makeFetch("get", `/${Id}/images`);
    }

    /**
     * /{Id}/images
     *
     * @param {Number} [Id]
     * @param {Object} body
     * @param {String} [body.Image]
     *
     * @returns {Promise}
     */
    async PostImage(Id, body) {
        return await this.makeFetch("post", `/${Id}/images`, body);
    }

    /**
     * /{Id}/images
     *
     * @param {Object} body
     * @param {String} [body.Image]
     * @param {Number} [body.ProductId]
     * @param {Number} [body.Id]
     * @returns {Promise}
     */
    async PutImage(body) {
        return await this.makeFetch("put", "/images", body);
    }

    /**
     * /{Id}/images/{ProductImageId}
     *
     * @param {Number} [Id]
     * @param {Number} [ProductImageId]
     * @returns {Promise}
     */
    async DeleteImage(Id, ProductImageId) {
        return await this.makeFetch("delete", `/${Id}/images/${ProductImageId}`);
    }

    /**
     * /{Id}/userprices
     *
     * @param {Number} [Id]
     * @param {Object} body
     * @param {Number} [body.UserGroupId]
     * @param {Number} [body.Price]
     * @param {Number} [body.PointsPrice]
     * @param {Number} [body.PurchaseOptions]
     * @param {Boolean} [body.IsEnabled]
     *
     * @returns {Promise}
     */
    async PostUserPrices(Id, body) {
        return await this.makeFetch("post", `/${Id}/userprices`, body);
    }

    /**
     * /userprices
     *
     * @param {Object} body
     * @param {Number} [body.UserGroupId]
     * @param {Number} [body.Price]
     * @param {Number} [body.PointsPrice]
     * @param {Number} [body.PurchaseOptions]
     * @param {Boolean} [body.IsEnabled]
     * @param {Number} [body.Id]
     * @param {Number} [body.ProductId]
     * @returns {Promise}
     */
    async PutUserPrices(body) {
        return await this.makeFetch("put", "/userprices", body);
    }

    /**
     * /{Id}/userprices
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetUserPrices(Id) {
        return await this.makeFetch("get", `/${Id}/userprices`);
    }

    /**
     * /{Id}/userprices/{UserPriceId}
     *
     * @param {Number} [UserPriceId]
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async DeleteUserPrices(Id, UserPriceId) {
        return await this.makeFetch("delete", `/${Id}/userprices/${UserPriceId}`);
    }

    /**
     * /{Id}/disallowedusergroups
     *
     * @param {Number} [Id]
     * @param {Object} body
     * @param {Number} [body.UserGroupId]
     * @param {Boolean} [body.IsDisallowed]
     *
     * @returns {Promise}
     */
    async PostUserDisallowedUserGroups(Id, body) {
        return await this.makeFetch("post", `/${Id}/disallowedusergroups`, body);
    }

    /**
     * /disallowedusergroups
     *
     * @param {Object} body
     * @param {Number} [body.UserGroupId]
     * @param {Boolean} [body.IsDisallowed]
     * @param {Number} [body.ProductId]
     * @param {Number} [body.Id]
     * @returns {Promise}
     */
    async PutUserDisallowedUserGroups(body) {
        return await this.makeFetch("put", "/disallowedusergroups", body);
    }

    /**
     * /{Id}/disallowedusergroups
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetUserDisallowedUserGroups(Id) {
        return await this.makeFetch("get", `/${Id}/disallowedusergroups`);
    }

    /**
     * /{Id}/disallowedusergroups/{ProductDisallowedUserGroupId}
     *
     * @param {Number} [ProductDisallowedUserGroupId]
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async DeleteUserDisallowedUserGroups(Id, ProductDisallowedUserGroupId) {
        return await this.makeFetch(
            "delete",
            `/${Id}/disallowedusergroups/${ProductDisallowedUserGroupId}`
        );
    }

    /**
     * /bundle/{Id}/bundledproducts
     *
     * @param {Number} [Id]
     * @param {Object} body
     * @param {Number} [body.ProductId]
     * @param {Number} [body.Quantity]
     * @param {Number} [body.UnitPrice]
     *
     * @returns {Promise}
     */
    async PostBundledProducts(Id, body) {
        return await this.makeFetch("post", `/bundle/${Id}/bundledproducts`, body);
    }

    /**
     * /bundledproducts
     *
     * @param {Object} body
     * @param {Number} [body.ProductId]
     * @param {Number} [body.Quantity]
     * @param {Number} [body.UnitPrice]
     * @param {Number} [body.Id]
     *
     * @returns {Promise}
     */
    async PutBundledProducts(body) {
        return await this.makeFetch("put", "/bundle/bundledproducts", body);
    }

    /**
     * /bundle/{Id}/bundledproducts
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetBundledProducts(Id) {
        return await this.makeFetch("get", `/bundle/${Id}/bundledproducts`);
    }

    /**
     * /bundle/{Id}/bundledproducts/{BundledProductsId}
     *
     * @param {Number} [BundledProductsId]
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async DeleteBundledProducts(Id, BundledProductsId) {
        return await this.makeFetch(
            "delete",
            `/bundle/${Id}/bundledproducts/${BundledProductsId}`
        );
    }

    /**
     * /bundle/{Id}/bundledproducts/{BundledProductId}/userprices
     *
     * @param {Number} [Id]
     * @param {Object} body
     * @param {Number} [body.UserGroupId]
     * @param {Number} [body.UserPrice]
     *
     * @returns {Promise}
     */
    async PostBundledProductsUserPrices(Id, BundledProductId, body) {
        return await this.makeFetch(
            "post",
            `/bundle/${Id}/bundledproducts/${BundledProductId}/userprices`,
            body
        );
    }

    /**
     * /bundle/bundledproducts/userprices
     *
     * @param {Object} body
     * @param {Number} [body.UserGroupId]
     * @param {Number} [body.UserPrice]
     * @param {Number} [body.BundledProductId]
     * @param {Number} [body.Id]
     *
     * @returns {Promise}
     */
    async PutBundledProductsUserPrices(body) {
        return await this.makeFetch(
            "put",
            "/bundle/bundledproducts/userprices",
            body
        );
    }

    /**
     * /bundle/{Id}/bundledproducts/{BundledProductId}/userprices
     *
     * @param {Number} [Id]
     * @param {Number} [BundledProductsId]
     * @returns {Promise}
     */
    async GetBundledProductsUserPrices(Id, BundledProductsId) {
        return await this.makeFetch(
            "get",
            `/bundle/${Id}/bundledproducts/${BundledProductId}/userprices`
        );
    }

    /**
     * /bundle/{Id}/bundledproducts/{BundledProductsId}/userprices/{UserPriceId}
     *
     * @param {Number} [BundledProductsId]
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async DeleteBundledProductsUserPrices(Id, BundledProductsId, UserPriceId) {
        return await this.makeFetch(
            "delete",
            `/bundle/${Id}/bundledproducts/${BundledProductsId}/userprices/${UserPriceId}`
        );
    }

    /**
     * /time/{Id}/usageavailability
     *
     * @param {Object} body
     * @param {Boolean} [body.DateRange]
     * @param {Number} [body.StartDate]
     * @param {Number} [body.EndDate]
     * @param {Boolean} [body.TimeRange]
     * @param {Object[]} [body.DaysAvailable]
     * @param {Number} [body.DaysAvailable[].Day]
     * @param {Object[]} [body.DaysAvailable[].DayTimesAvailable]
     * @param {Number} [body.DaysAvailable[].DayTimesAvailable[].StartSecond]
     * @param {Number} [body.DaysAvailable[].DayTimesAvailable[].EndSecond]
     * @param {Number} [Id]
     *
     * @returns {Promise}
     */
    async PutTimeUsageAvailability(Id, body) {
        return await this.makeFetch("put", `/time/${Id}/usageavailability`, body);
    }

    /**
     * /time/{Id}/usageavailability
     *
     * @param {Number} [Id]
     * @param {Number} [BundledProductsId]
     * @returns {Promise}
     */
    async GetTimeUsageAvailability(Id) {
        return await this.makeFetch("get", `/time/${Id}/usageavailability`);
    }

    /**
     * /time/{id}/disallowedhostgroups
     *
     * @param {Number} [Id]
     * @param {Object} body
     * @param {Number} [body.HostGroupId]
     * @param {Boolean} [body.IsDisallowed]
     *
     * @returns {Promise}
     */
    async PostTimeDisallowedHostGroups(Id, BundledProductId, body) {
        return await this.makeFetch(
            "post",
            `/time/${id}/disallowedhostgroups`,
            body
        );
    }

    /**
     * /time/disallowedhostgroups
     *
     * @param {Object} body
     * @param {Number} [body.HostGroupId]
     * @param {Boolean} [body.IsDisallowed]
     * @param {Number} [body.TimeProductId]
     * @param {Number} [body.Id]
     *
     * @returns {Promise}
     */
    async PutTimeDisallowedHostGroups(body) {
        return await this.makeFetch(
            "put",
            "/time/disallowedhostgroups",
            body
        );
    }

    /**
     * /time/{id}/disallowedhostgroups
     *
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async GetTimeDisallowedHostGroups(Id) {
        return await this.makeFetch(
            "get",
            `/time/${Id}/disallowedhostgroups`
        );
    }

    /**
     * /time/{id}/disallowedhostgroups
     *
     * @param {Number} [TimeProductDisallowedHostGroupId]
     * @param {Number} [Id]
     * @returns {Promise}
     */
    async DeleteTimeDisallowedHostGroups(Id, TimeProductDisallowedHostGroupId) {
        return await this.makeFetch(
            "delete",
            `/time/${Id}/disallowedhostgroups/${TimeProductDisallowedHostGroupId}`
        );
    }
}

module.exports = Products;
