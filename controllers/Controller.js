const autoBind = require('auto-bind');
class Controller {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    async getAll(req, res, next) {
        try {
            const result = await this.service.getAll(req.query);
            return res.json(result)
        } catch (error) {
            next(error);
        }
    }

    async get(req, res, next) {
        const { id } = req.params;
        console.log("hgduygcf  "+id);
        try {
            const response = await this.service.get(id);

            return res.status(response.statusCode).json(response);
        } catch (e) {
            next(e);
        }

    }

    async insert(req, res, next) {
        try {
            const response = await this.service.insert(req.body);

            return res.status(response.statusCode).json(response);
        } catch (e) {
            next(e);
        }
    }
    async update(req, res, next) {
        const { id } = req.params;
        console.log("nono" +id) 
        try {
            const response = await this.service.update(id, req.body);

            return res.status(response.statusCode).json(response);
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        console.log('😏🙄 ' + id);

        try {
            const response = await this.service.delete(id);

            return res.status(response.statusCode).json(response);
        } catch (e) {
            next(e);
        }
    }

}
module.exports = Controller;
