const autoBind = require('auto-bind');
class Controller {

    constructor(service) {
        this.service = service;
        autoBind(this);
    }

    /**
 * Retrieves all items from the database based on the query parameters provided in the request.
 *
 * This function handles the incoming request, retrieves the relevant data using the service layer,
 * and sends the results back as a JSON response. In case of an error, it passes the error to the next middleware.
 *
 * @async
 * @function getAll
 * @param {Object} req - The request object, which contains the query parameters.
 * @param {Object} res - The response object used to send the JSON response back to the client.
 * @param {Function} next - The next middleware function in the stack, used for error handling.
 * @returns {Promise<void>} This function does not return a value; it sends the response directly.
 * @throws {Error} If the retrieval operation fails, the error is passed to the next middleware.
 */
async getAll(req, res, next) {
    try {
        const result = await this.service.getAll(req.query);
        return res.json(result);
    } catch (error) {
        next(error);
    }
}


    /**
 * Retrieves a specific item from the database based on the provided ID in the request parameters.
 *
 * This function extracts the ID from the request parameters, calls the service layer to fetch
 * the corresponding item, and sends the response back to the client with the appropriate status code.
 * If an error occurs during the retrieval process, it passes the error to the next middleware for handling.
 *
 * @async
 * @function get
 * @param {Object} req - The request object, which contains the parameters, including the ID of the item to retrieve.
 * @param {Object} res - The response object used to send the retrieved item back as a JSON response.
 * @param {Function} next - The next middleware function in the stack, used for error handling.
 * @returns {Promise<void>} This function does not return a value; it sends the response directly.
 * @throws {Error} If the retrieval operation fails, the error is passed to the next middleware.
 */
async get(req, res, next) {
    const { id } = req.params;
    try {
        const response = await this.service.get(id);

        return res.status(response.statusCode).json(response);
    } catch (e) {
        next(e);
    }
}


    /**
 * Inserts a new item into the database using the data provided in the request body.
 *
 * This function processes the incoming request, extracting the data from the request body,
 * and calls the service layer to insert the new item into the database. It then sends the
 * response back to the client with the appropriate status code. If an error occurs during
 * the insertion process, it passes the error to the next middleware for handling.
 *
 * @async
 * @function insert
 * @param {Object} req - The request object, which contains the data for the new item in the body.
 * @param {Object} res - The response object used to send the result of the insertion as a JSON response.
 * @param {Function} next - The next middleware function in the stack, used for error handling.
 * @returns {Promise<void>} This function does not return a value; it sends the response directly.
 * @throws {Error} If the insertion operation fails, the error is passed to the next middleware.
 */
async insert(req, res, next) {
    try {
        const response = await this.service.insert(req.body);

        return res.status(response.statusCode).json(response);
    } catch (e) {
        next(e);
    }
}

    /**
 * Updates an existing item in the database based on the provided ID and the data in the request body.
 *
 * This function extracts the ID from the request parameters and the updated data from the request body,
 * then calls the service layer to perform the update operation. It sends the response back to the client
 * with the appropriate status code and updated item data. If an error occurs during the update process,
 * it passes the error to the next middleware for handling.
 *
 * @async
 * @function update
 * @param {Object} req - The request object, which contains the parameters (including the ID) and the updated data in the body.
 * @param {Object} res - The response object used to send the result of the update as a JSON response.
 * @param {Function} next - The next middleware function in the stack, used for error handling.
 * @returns {Promise<void>} This function does not return a value; it sends the response directly.
 * @throws {Error} If the update operation fails, the error is passed to the next middleware.
 */
async update(req, res, next) {
    const { id } = req.params;
    try {
        const response = await this.service.update(id, req.body);

        return res.status(response.statusCode).json(response);
    } catch (e) {
        next(e);
    }
}


    /**
 * Deletes a specific item from the database based on the provided ID in the request parameters.
 *
 * This function extracts the ID from the request parameters and calls the service layer to perform
 * the deletion operation. It then sends the response back to the client with the appropriate status
 * code indicating the result of the deletion. If an error occurs during the deletion process,
 * it passes the error to the next middleware for handling.
 *
 * @async
 * @function delete
 * @param {Object} req - The request object, which contains the parameters (including the ID of the item to delete).
 * @param {Object} res - The response object used to send the result of the deletion as a JSON response.
 * @param {Function} next - The next middleware function in the stack, used for error handling.
 * @returns {Promise<void>} This function does not return a value; it sends the response directly.
 * @throws {Error} If the deletion operation fails, the error is passed to the next middleware.
 */
async delete(req, res, next) {
    const { id } = req.params;
    try {
        const response = await this.service.delete(id);

        return res.status(response.statusCode).json(response);
    } catch (e) {
        next(e);
    }
}


}
module.exports = Controller;
