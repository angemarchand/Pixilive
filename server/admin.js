const express         = require("express")
const AdminBro        = require("admin-bro")
const AdminBroExpress = require("@admin-bro/express")

const app = express()

const adminBro = new AdminBro ({
    Databases: [],
    rootPath: "/admin",
})

const router = AdminBroExpress.buildRouter (adminBro)