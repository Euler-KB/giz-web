
const _globalState = {};

/**
 * Global variables handler
 */
class Globals {

    static init(){
        window.__globals = _globalState;
    }

    /**
     * Gets a global key value
     * @param key
     * @param cb
     */
    static get(key,cb){

        if(!_globalState.hasOwnProperty(key) && cb){
            return _globalState[key] = cb();
        }

        return _globalState[key];
    }

    /**
     * Sets a global value
     * @param key
     * @param value
     */
    static set(key,value){
        _globalState[key] = value;
        return value;
    }


}

export default Globals;