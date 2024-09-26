class ExpressError extends Error {
    constructor(status, msg) {
        super();
        this.status;
        this.msg;
    }
}

export default ExpressError ;