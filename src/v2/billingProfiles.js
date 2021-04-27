const api = require("../../api");
const { stringify } = require("querystring");

class BillingProfiles extends api {
    constructor(options) {
        super(options);
        this.setName("/api/v2.0/attributes");
    }

    /**
     *
     * @param {Object} options
     * @param {String} [options.BillingProfileNameName]
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
     * @param {Object} [body.DefaultRate]
     * @param {Number} [body.DefaultRate.StartFee]
     * @param {Number} [body.DefaultRate.MinimumFee]
     * @param {Number} [body.DefaultRate.Rate]
     * @param {Number} [body.DefaultRate.ChargeEvery]
     * @param {Number} [body.DefaultRate.ChargeAfter]
     * @param {Boolean} [body.DefaultRate.IsStepBased]
     * @param {Object[]} [body.DefaultRate.RateSteps]
     * @param {Number} [body.DefaultRate.RateSteps[].Minute]
     * @param {Number} [body.DefaultRate.RateSteps[].Action]
     * @param {Number} [body.DefaultRate.RateSteps[].Charge]
     * @param {Number} [body.DefaultRate.RateSteps[].Rate]
     * @param {Number} [body.DefaultRate.RateSteps[].TargetMinute]
     * @param {Object[]} [body.DefaultRate.Days]
     * @param {Number} [body.DefaultRate.Days[].Day]
     * @param {Object[]} [body.DefaultRate.Days[].DayTimesApplicable]
     * @param {Number} [body.DefaultRate.Days[].DayTimesApplicable[].StartSecond]
     * @param {Number} [body.DefaultRate.Days[].DayTimesApplicable[].EndSecond]
     * @returns {Promise}
     */
    async Post(body) {
        return await this.makeFetch("post", "", body);
    }

    /**
     *
     * @param {Object} body
     * @param {String} [body.Name]
     * @param {Object} [body.DefaultRate]
     * @param {Number} [body.DefaultRate.StartFee]
     * @param {Number} [body.DefaultRate.MinimumFee]
     * @param {Number} [body.DefaultRate.Rate]
     * @param {Number} [body.DefaultRate.ChargeEvery]
     * @param {Number} [body.DefaultRate.ChargeAfter]
     * @param {Boolean} [body.DefaultRate.IsStepBased]
     * @param {Object[]} [body.DefaultRate.RateSteps]
     * @param {Number} [body.DefaultRate.RateSteps[].Minute]
     * @param {Number} [body.DefaultRate.RateSteps[].Action]
     * @param {Number} [body.DefaultRate.RateSteps[].Charge]
     * @param {Number} [body.DefaultRate.RateSteps[].Rate]
     * @param {Number} [body.DefaultRate.RateSteps[].TargetMinute]
     * @param {Object[]} [body.DefaultRate.Days]
     * @param {Number} [body.DefaultRate.Days[].Day]
     * @param {Object[]} [body.DefaultRate.Days[].DayTimesApplicable]
     * @param {Number} [body.DefaultRate.Days[].DayTimesApplicable[].StartSecond]
     * @param {Number} [body.DefaultRate.Days[].DayTimesApplicable[].EndSecond]
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
    async GetRates(Id) {
        return await this.makeFetch("get", `/${Id}/rates`);
    }

    /**
     *
     * @param {Object} body
     * @param {String} [body.Name]
     * @param {Number} [body.StartFee]
     * @param {Number} [body.MinimumFee]
     * @param {Number} [body.Rate]
     * @param {Number} [body.ChargeEvery]
     * @param {Number} [body.ChargeAfter]
     * @param {Boolean} [body.IsStepBased]
     * @param {Object[]} [body.RateSteps]
     * @param {Number} [body.RateSteps[].Minute]
     * @param {Number} [body.RateSteps[].Action]
     * @param {Number} [body.RateSteps[].Charge]
     * @param {Number} [body.RateSteps[].Rate]
     * @param {Number} [body.RateSteps[].TargetMinute]
     * @param {Object[]} [body.Days]
     * @param {Number} [body.Days[].Day]
     * @param {Object[]} [body.Days[].DayTimesApplicable]
     * @param {Number} [body.Days[].DayTimesApplicable[].StartSecond]
     * @param {Number} [body.Days[].DayTimesApplicable[].EndSecond]
     * @returns {Promise}
     */
    async PostRates(Id, body) {
        return await this.makeFetch("post", `/${Id}/rates`, body);
    }

    /**
     *
     * @param {Object} body
     * @param {String} [body.Name]
     * @param {Number} [body.StartFee]
     * @param {Number} [body.MinimumFee]
     * @param {Number} [body.Rate]
     * @param {Number} [body.ChargeEvery]
     * @param {Number} [body.ChargeAfter]
     * @param {Boolean} [body.IsStepBased]
     * @param {Object[]} [body.RateSteps]
     * @param {Number} [body.RateSteps[].Minute]
     * @param {Number} [body.RateSteps[].Action]
     * @param {Number} [body.RateSteps[].Charge]
     * @param {Number} [body.RateSteps[].Rate]
     * @param {Number} [body.RateSteps[].TargetMinute]
     * @param {Object[]} [body.Days]
     * @param {Number} [body.Days[].Day]
     * @param {Object[]} [body.Days[].DayTimesApplicable]
     * @param {Number} [body.Days[].DayTimesApplicable[].StartSecond]
     * @param {Number} [body.Days[].DayTimesApplicable[].EndSecond]
     * @param {Number} [body.Id]
     * @returns {Promise}
     */
    async PutRates(body) {
        return await this.makeFetch("put", `/rates`, body);
    }

    /**
     * /{Id}/rates/{BillingProfileRateId}
     *
     * @param {Number} [Id]
     * @param {Number} [BillingProfileRateId]
     * @returns {Promise}
     */
    async DeleteRate(Id, BillingProfileRateId) {
        return await this.makeFetch("delete", `/${Id}/rates/${BillingProfileRateId}`);
    }
}

module.exports = BillingProfiles;
