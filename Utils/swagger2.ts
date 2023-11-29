import { Express , Request , Response } from "express"
import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi  from "swagger-ui-express"
import { version } from "../package.json"

const options : swaggerJSDoc.Options = {
    definition : {
        openapi : "3.0.0",
        info : {
            title : "Test",
            version
        },
        components : {
            securitySchemas : {
                bearerAuth : {
                    type : "http"
                }
            }
        }
    }
}