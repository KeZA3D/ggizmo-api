"use strict";

const fetch = require("node-fetch");

class GizmoAPI {
    /**
     *
     * @param {Object} options
     * @param {Boolean} [AuthorizationBearer=0]
     * @param {String} [options.host=127.0.0.1]
     * @param {String} [options.username]
     * @param {String} [options.password]
     * @param {String} [options.token]
     * @param {Number} [options.port=80]
     * @param {Boolean} [options.ssl=false]
     */
    constructor(AuthorizationBearer = 0, options) {
        options = {
            token: null,
            host: "127.0.0.1",
            username: null,
            password: null,
            port: 80,
            ssl: false,
            bearer: AuthorizationBearer,
            ...options,
        };
        if (options.username == null || options.password == null) {
            throw new TypeError(
                '"username", "password" options must be specified'
            );
        }
        options.ssl === true ? (options.http = "https") : (options.http = "http");
        this.loc = `${options.http}://${options.host}:${options.port}`;
        options.loc = this.loc;
        this.options = options;
    }

    async createToken() {
        try {
            let request = await fetch(`${this.loc}/auth/token?username=${encodeURI(this.options.username)}&password=${encodeURI(this.options.password)}`);
            if (!request.ok || request.status == 401) {
                throw new Error(await request.text());
            }
            let result = (await request.json());
            this.options.token = result.token
            return result;
        } catch (e) {
            console.error(e)
            return e;
        }
    }

    async test() {
        return await fetch(
            "http://" +
            this._user +
            ":" +
            this._password +
            "@" +
            this._ip +
            ":" +
            this._port +
            "/api/service/settings"
        ).then((res) => {
            return res.status;
        });
    }

    v2() {
        if (this.options.bearer == true && this.options.token === null) {
            throw new Error("Token is required!");
        }
        return {
            AppCategories: new (require("./src/v2/applicationCategories"))(this.options),
            AppDeployments: new (require("./src/v2/applicationDeployments"))(this.options),
            AppEnterprices: new (require("./src/v2/applicationEnterprises"))(this.options),
            AppExecutables: new (require("./src/v2/applicationExecutables"))(this.options),
            AppGroups: new (require("./src/v2/applicationGroups"))(this.options),
            AppLicenses: new (require("./src/v2/applicationLicenses"))(this.options),
            AppPersonalFiles: new (require("./src/v2/applicationPersonalFiles"))(this.options),
            Apps: new (require("./src/v2/applications"))(this.options),
            AppTasks: new (require("./src/v2/applicationTasks"))(this.options),
            Assets: new (require("./src/v2/assets"))(this.options),
            AssetTransactions: new (require("./src/v2/assetTransactions"))(this.options),
            AssetTypes: new (require("./src/v2/assetTypes"))(this.options),
            Attributes: new (require("./src/v2/attributes"))(this.options),
            BillingProfiles: new (require("./src/v2/billingProfiles"))(this.options),
            DepositTransactions: new (require("./src/v2/depositTransactions"))(this.options),
            HostGroups: new (require("./src/v2/hostGroups"))(this.options),
            HostIcons: new (require("./src/v2/hostIcons"))(this.options),
            Hosts: new (require("./src/v2/hosts"))(this.options),
            InvoicePayments: new (require("./src/v2/invoicePayments"))(this.options),
            Invoices: new (require("./src/v2/Invoices"))(this.options),
            MonetaryUnits: new (require("./src/v2/monetaryUnits"))(this.options),
            Operators: new (require("./src/v2/operators"))(this.options),
            PaymentMethods: new (require("./src/v2/paymentMethods"))(this.options),
            ProductGroups: new (require("./src/v2/productGroups"))(this.options),
            Products: new (require("./src/v2/products"))(this.options),
            ProductsStock: new (require("./src/v2/productsStock"))(this.options),
            Registers: new (require("./src/v2/registers"))(this.options),
            RegisterTransactions: new (require("./src/v2/registerTransactions"))(this.options),
            Reservations: new (require("./src/v2/reservations"))(this.options),
            SalePresets: new (require("./src/v2/salePresets"))(this.options),
            StockTransactions: new (require("./src/v2/stockTransactions"))(this.options),
            Taxes: new (require("./src/v2/taxes"))(this.options),
            UserGroups: new (require("./src/v2/userGroups"))(this.options),
            Users: new (require("./src/v2/users"))(this.options),
            Variables: new (require("./src/v2/variables"))(this.options),
        }
    }
};

module.exports = GizmoAPI