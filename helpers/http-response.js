// const defaultExcludedItemsFromResponse = [ '__v', 'password' ];

class HttpResponse {
    error = false;
    responseTimestamp = new Date();

    constructor(data, options = { totalCount: 0, statusCode: 200, deleted: null, errorMessage: null }) {
        // אם יש הודעת שגיאה, נעדכן את הסטטוס קוד ואת השגיאה
        if (options.errorMessage) {
            this.error = true;
            this.errorMessage = options.errorMessage;
            this.statusCode = options.statusCode || 500; // שגיאות ברירת מחדל עם סטטוס 500
        } else {
            this.statusCode = options.statusCode || 200;
        }

        let filteredData = data;

        if (typeof filteredData === 'object' && !this.error) {
            filteredData = this.filterData(JSON.parse(JSON.stringify(filteredData)));
        }

        if (options.deleted) {
            this.deleted = options.deleted;
        }

        if (Array.isArray(filteredData) && !this.error) {
            this.data = [...filteredData];
            this.totalCount = options.totalCount || filteredData.length || undefined;
        } else if (typeof filteredData === 'object' && !this.error) {
            this.data = { ...filteredData };
        } else if (!this.error) {
            this.data = data;
        }
    }

    filterData(data) {
        if (Array.isArray(data)) {
            data.map((x, index) => {
                // סינון מידע אם צריך
            });
        } else if (typeof data === 'object') {
            // סינון מידע אם צריך
        }
        return data;
    }
}

module.exports = { HttpResponse };