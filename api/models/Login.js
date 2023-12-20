const Login = {
    type: "object",
    properties: {
        phone: { type: "string" },
        password: { type: "string" }
    },
    required: ["phone", "password"],
    errorMessage: {
        required: {
            phone: "Phone harus di isi!",
            password: "Password harus di isi!",
        },
        properties: {
            phone: "Phone harus Berformat 62xxxxxxxxxxx"
        }
    },
    additionalProperties: false,
}

module.exports = Login;