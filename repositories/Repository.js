const autoBind = require('auto-bind');
const db = require('./db_connect.js');
const { HttpResponse } = require( '../helpers/http-response.js' );

class Repository {
    constructor(model) {
        this.model = model;
        db.connect();
        autoBind(this);

    }
    /**
 * Retrieves all items from the database based on the given query.
 * 
 * @async
 * @function getAll
 * @returns {Promise<Array>} A promise that resolves to an array of items.
 * @throws {Error} If the operation fails.
 */
    async getAll(query) {
        try {
           const items= await this.model.find(query);
            return items;
        } catch (error) {
            console.log(error);
            throw new Error("error getting all data from DB" + error);
        }
    }
/**
 * Retrieves a single item by its ID from the database.
 * 
 * @async
 * @function get
 * @param {string} id - The ID of the item to retrieve.
 * @returns {Promise<HttpResponse>} A promise that resolves to an HttpResponse containing the item.
 * @throws {Error} If the item is not found or the operation fails.
 */
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

/**
 * Inserts a new item into the database.
 * 
 * @async
 * @function insert
 * @param {object} data - The data of the item to insert.
 * @returns {Promise<HttpResponse>} A promise that resolves to an HttpResponse containing the inserted item.
 * @throws {Error} If the operation fails.
 */
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
/**
 * Updates an existing item by its ID.
 * 
 * @async
 * @function update
 * @param {string} id - The ID of the item to update.
 * @param {object} data - The updated data of the item.
 * @returns {Promise<HttpResponse>} A promise that resolves to an HttpResponse containing the updated item or an error message.
 * @throws {Error} If the item is not found or the operation fails.
 */
    async update(id, data) {
        try {
            if (isNotValidParms(id, data))
            {
                return new HttpResponse(null, { statusCode: 422, errorMessage: 'Invalid ID or object provided' });
            }
            if (data.id && data.id != id)
            {
                return new HttpResponse(null,{ statusCode: 422, errorMessage: 'ID in query and object do not match' });
            }
          
            const item = await this.model.findOneAndUpdate({ id: id }, data, { 'new': true });
            if (!item) 
            {
                return new HttpResponse(null, { statusCode: 404, errorMessage: 'Item not found' });
            }
            return new HttpResponse(item);
        } 
        catch (errors) {
            throw errors;
        }
    }
isNotValidParms(id,data)
{
    return (!id || !data || typeof id !== 'string' || Object.keys(data).length === 0) ;
}
/**
 * Deletes an item by its ID from the database.
 * 
 * @async
 * @function delete
 * @param {string} id - The ID of the item to delete.
 * @returns {Promise<HttpResponse>} A promise that resolves to an HttpResponse containing the deleted item.
 * @throws {Error} If the item is not found or the operation fails.
 */
    async delete(id) {
        try
        {
            const item = await this.model.findOneAndDelete({ id: id });
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
