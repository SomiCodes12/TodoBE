"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const package_json_1 = require("../package.json");
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Test",
            version: package_json_1.version
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: "http"
                }
            }
        }
    }
};
