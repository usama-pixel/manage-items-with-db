class NotFoundError extends Error {
    constructor(message = 'Route not found') {
        super(message);
        this.statusCode = 404;

        // Ensure the name of this error is the same as the class name
        this.name = this.constructor.name;

        // Capture the stack trace
        Error.captureStackTrace(this, this.constructor);
    }

    serializeErrors() {
        return [{ msg: this.message }];
    }
}

module.exports = { NotFoundError };
