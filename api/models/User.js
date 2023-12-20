const User = {
    type: "object",
    properties: {
        username: { type: "string" },
        name: { type: "string" },
        phone: { type: "string" },
        role: { type: "string" }
    },
    required: ["username", "name", "phone", "role"],
    errorMessage: {
        required: {
            username: "Username harus di isi!"
        },
        properties: {
            username: "Username harus berupa huruf!"
        }
    },
    additionalProperties: false,
}

module.exports = User;