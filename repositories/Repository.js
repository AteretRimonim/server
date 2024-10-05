const autoBind = require('auto-bind');
const db = require('./db_connect.js');
const { HttpResponse } = require( '../helpers/http-response.js' );

class Repository {
    constructor(model) {
        this.model = model;
        db.connect();
        autoBind(this);

    }
    async getAll(query) {
        try {
           console.log(query);
           const items= await this.model.find(query);
           console.log(items);
            return items;
        } catch (error) {
            console.log(error);
            throw new Error("error getting all data from DB" + error);
        }
    }

    async get(id) {
        try {
            const item = await this.model.findOne({id: id });

            if (!item) {
                const error = new Error('Item not found ' + id);
                error.statusCode = 404;
                throw error;
            }
            return new HttpResponse(item);
        }
        catch (errors) {
            console.log('😓 ' + errors);
            throw errors;
        }
    }
    async insert(data) {
        try {
            const item = await this.model.create(data);
            if (item) {
                return new HttpResponse(item);
            }
            throw new Error('Something wrong happened');

        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            console.log('♥ '+ id);
            const item = await this.model.findOneAndUpdate({ id: id }, data, { 'new': true });
            console.log('😣 ' + item)
            return new HttpResponse(item);
        } catch (errors) {
            throw errors;
        }
    }

    async delete(id) {
        console.log('😎 ' + id)
        try
        {
            const item = await this.model.findOneAndDelete({ id: id });
            console.log('😴 '+ item)
            if (!item) 
            {
                const error = new Error('Item not found');
                error.statusCode = 404;
                throw error;
            } 
            else
            { 
                return new HttpResponse(item, { 'deleted': true });
            }
        } 
        catch (errors)
        {
            throw errors;
        }
    }
}
module.exports = Repository;
