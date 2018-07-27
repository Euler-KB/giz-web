/**
 * Holds the current user
 * @type {null}
 */
let CurrentUser = null;

class UserManager {

    /**
     * Gets the currently logged in user
     */
    static getCurrentUser(){
        return CurrentUser;
    }

    /**
     * Removes the current user
     */
    static clearUser(){
        CurrentUser = null;
    }

    /**
     * Sets the current user
     * @param user
     */
    static setCurrentUser(user){
        CurrentUser = user;
    }

}

export default UserManager;