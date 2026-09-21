export default class Resultado {

    static ok(message, data = null) {
        return {
            status: true,
            message,
            data
        }
    }

    static error(message, data = null) {
        return {
            status: false,
            message,
            data
        }
    }
}