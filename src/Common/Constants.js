const ProductClassifications = Object.freeze({

    /**
     * Organic Products
     */
    Organic: 0,

    /**
     * Inorganic Products
     */
    Inorganic: 1

});

const UserAccountTypes = Object.freeze({

    Farmer: 0,

    Dealer: 1,

    Administrator: 2

});

const ResponseStatus = Object.freeze({

        /// <summary>
        /// Operation was successful
        /// </summary>
        Success:  0,

        /// <summary>
        /// Resource was not found
        /// </summary>
        NotFound: -4,

        /// <summary>
        /// A validation error occurred
        /// </summary>
        ValidationError: -3,

        /// <summary>
        /// Operation failed
        /// </summary>
        Fail: -1,

        /// <summary>
        /// An internal server error occurred
        /// </summary>
        InternalServerError: -6,

        /// <summary>
        /// User account not active
        /// </summary>
        UserAccountActivationRequired: -20
});

export {
    ProductClassifications,
    UserAccountTypes,
    ResponseStatus
}