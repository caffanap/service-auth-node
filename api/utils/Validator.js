const ajv = require('ajv').default;
const ajvErrors = require("ajv-errors")

class Validator {
    constructor() {
        this.validator = new ajv({ allErrors: true })
        ajvErrors(this.validator)
    }

    compare(schema, payload) {
        const valid = this.validator.validate(schema, payload)
        const error = this.validator.errors
        return {
            valid: valid,
            error: error
        }
    }

    errorValidation(response, error) {
        const newError = error.map((item) => {
            return {
                field: item.instancePath ? item.instancePath.substring(1) : item.params.missingProperty,
                message: item.message
            }
        })
        response.status(400).send({
            message: "Validation Error!",
            error: newError
        })
    }
}

module.exports = new Validator()