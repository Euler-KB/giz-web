import React from 'react';
import { ResponseStatus } from '../Common/Constants';

/**
 * Provides basic utilities
 */
class Utils {

    /**
     * Indicates whether there's a connection error
     * @param err
     * @returns {*|boolean}
     */
    static isConnectionError(err){
        return err && !err.hasOwnProperty('response');
    }

    /**
     * Extracts the response status for the error
     * @param err
     * @return {*}
     */
    static getErrorStatus(err){

        if(!err)
            return;

        const res = err.response;

        if(res && res.body.hasOwnProperty('Status')){
            return res.body.Status;
        }

    }

    /**
     * Gets an error associated with
     * @param err
     * @return {*}
     */
    static getErrorMessage(err){

        if(!err)
            return "An unknown error occurred!";

        if(Utils.isConnectionError(err)){
            return "Failed contacting server. Please try again!";
        }

        if(err.hasOwnProperty('response')){

            const res = err.response;

            switch (res.body.Status){
                case ResponseStatus.ValidationError: {

                    if (res.body.ValidationErrors.length === 1) {
                        return res.body.ValidationErrors[0].Message;
                    }

                    return <ul>{res.body.ValidationErrors.map((m,index) => <li key={index}>{m.Message}</li>)}</ul>;
                }
                default:
                    return res.body.Message;
            }
        }

    }

}

export default Utils;