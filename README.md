# node-gizmo-api
Gizmo API Library for Node.js (NOT OFFICIAL) 

![GCGApp](https://ggbook.ru/AdminPanel/public/images/favicon-32x32.png)
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/keza3d/ggizmo-api)

## Installation
Read Gizmo API Documentation - [link](http://cloud.gizmopowered.net/doc/index.html)
```bash
npm install ggizmo-api
```

## Quick Example
```js
const api = require('ggizmo-api')

async () => {
    try {
        // Make sure you have the correct port open and the web portal enabled in the settings.
        // Enable Bearer | Basic token use True | False
        const con = new api(true, {
            host: "localhost",
            port: 80,
            ssl: false,
            username: 'admin',
            password: 'admin'
        });
        
        //Generate new Token
        await con.createToken()
        
        //Using APIv2
        const v2 = con.v2()
        
        //Simple Fetch query
        const test = await v2.UserGroups.Get()
        const data = await test.json()
        
        console.log(data)
    } catch (err) {
        // ... http error checks
    }
}
```

## Commands
All commands are identical to the requests that are specified in your server documentation (http: //localhost/doc/index.html)
Example:
```
APIv2 => UserGroups => GET QUERY = v2().UserGroups.Get(Options)
```
Here we use the GET request of the Usergroup

### Available Commands
 - AppCategories
 - AppDeployments
 - AppEnterprises
 - AppExecutables
 - AppGroups
 - AppLicenses
 - AppPersonalFiles
 - Apps
 - AppTasks
 - Assets
 - AssetTransactions
 - AssetTypes
 - Attributes
 - BillingProfiles
 - DepositTransactions
 - HostGroups
 - HostIcons
 - Hosts
 - InvoicePayments
 - Invoices
 - MonetaryUnits
 - Operators
 - PaymentMethods
 - ProductGroups
 - Products
 - ProductsStock
 - Registers
 - RegisterTransactions
 - Reservations
 - SalePresets
 - StockTransactions
 - Taxes
 - UserGroups
 - Users
 - Variables 

## Token
You can use Basic authorization or Bearer
```
const init = new api(true, { username:'admin',password:'admin' })
await init.createToken()
//Authorization: Bearer Generated Token

const init = new api(false, { username:'admin',password:'admin' })
//Authorization: Basic base64(username:password)
```
Also, if you already have a Token, you can specify it during initialization.
```
const init = new api(true, { token: '{TOKEN}' })
```

## Donate
[![](https://lh3.googleusercontent.com/proxy/AAy4TAWXHi0QZM8raIVMc_sGy9swMxc1dkQqidF-FWlEdXk3DKxYEoqUJLlryK9uPQOyoOREjZCWm1jIWDIVaihV21eOMqpZhFxJSo8Xsv6HCv4H)](https://www.paypal.me/alexzubar)


## License
GGizmo-API is released under the [MIT License](https://github.com/KeZA3D/ggizmo-api/blob/main/LICENSE)