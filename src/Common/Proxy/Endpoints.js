class DealersEndpoints {

    static getUrl(){
        return "api/dealers";
    }

    static searchQuery(params){
        return {
            url: `${DealersEndpoints.getUrl()}/query`,
            method:"post",
            content: params
        }
    }

    static getAll(){
        return {
            url: `${DealersEndpoints.getUrl()}/all`,
            method: "get"
        }
    }

}

class UsersEndpoints{

    static getUrl(){
        return "api/users";
    }

    static login(username , password , accountType){

        return {
            url: `${UsersEndpoints.getUrl()}/login`,
            method: "post",
            content: {
                Username: username,
                Password: password,
                AccountType: accountType
            }
        }
    }

    static refreshToken(refreshToken){

        return {
            url: `${UsersEndpoints.getUrl()}/refresh_token`,
            method: "post",
            content: {
                RefreshToken: refreshToken
            }
        };

    }

    static forgotPassword(input){

        return {
            url: `${UsersEndpoints.getUrl()}/forgotpassword`,
            method: "post",
            content: {
                UserInput: input
            }
        };

    }

    static resetPassword(identity, token, password,verify = false){

        return {
            url: `${UsersEndpoints.getUrl()}/resetpassword`,
            method: "post",
            content: {
                Identity: identity,
                Token: token,
                Password: password,
                Verify: verify
            }
        }

    }

    static getMySelf(){
        return {
            url: `${UsersEndpoints.getUrl()}/me`,
            method: "get"
        }
    }

    static updateMySelf(payload){

        return {
            url: `${UsersEndpoints.getUrl()}/me`,
            method: "put",
            content: payload
        };

    }

    static activate(identity,token){
        return {
            url: `${UsersEndpoints.getUrl()}/activate`,
            method: "post",
            content: {
                Identity: identity,
                Token: token
            }
        }
    }

    static beginActivation(identity){
        return {
            url: `${UsersEndpoints.getUrl()}/beginactivate`,
            method: "post",
            content: {
                Identity: identity
            }
        }
    }

    static register(payload){
        return {
            url: `${UsersEndpoints.getUrl()}/register`,
            method: "post",
            content: payload
        }
    }

}

class ProductsEndpoints{

    static getUrl(){
        return "api/products"
    }

    static getAll(){

        return {
            url : `${ProductsEndpoints.getUrl()}/all`,
            method: "get"
        };

    }

    static searchQuery(params){

        return {
            url: `${ProductsEndpoints.getUrl()}/query`,
            method: "post",
            content: params
        };

    }

    static getDealerProducts( dealerId , productType ){

        return {
            url: `${ProductsEndpoints.getUrl()}/${dealerId}`,
            method: "get",
            query:{
                productType: productType
            }
        };

    }

    static getSummary(){

        return {
            url: `${ProductsEndpoints.getUrl()}/summary`,
            method: "get"
        };
    }

    static getSolutions(product){
        return {
            url: `${ProductsEndpoints.getUrl()}/solutions`,
            method: "get",
            query: {
                product: product
            }
        }
    }

    static updateProductLifeCyclePhoto(productId,lifeCycleId){

    }

    static deleteProductLifeCyclePhoto(productId,lifeCycleId,tag){

    }

    static getProduct(id){

        return {
            url: `${ProductsEndpoints.getUrl()}/${id}`,
            method: "get"
        };

    }

    static uploadProductPhoto(productId){

        return {
            url: `${ProductsEndpoints.getUrl()}/${productId}`
        }

    }

    static removeProductPhoto(productId,tag){

        return {
            url: `${ProductsEndpoints.getUrl()}/${productId}/photo/${tag}`,
            method: "delete"
        };

    }

    static create(product){

        return {
            url: `${ProductsEndpoints.getUrl()}`,
            method: "post",
            content: product
        };

    }

    static update(productId , payload) {

        return {
            url: `${ProductsEndpoints.getUrl()}/${productId}`,
            method: "put",
            content: payload
        };

    }

    static deleteProduct(productId){
        return {
            url: `${ProductsEndpoints.getUrl()}/${productId}`,
            method: "delete"
        }
    }

}

class MiscEndpoints{

    static getUrl(){
        return "api/misc"
    }

    static getRegions(){
        return {
            url: `${MiscEndpoints.getUrl()}/regions`,
            method: "get"
        };
    }

    static getProductTypes(){
        return {
            url: `${MiscEndpoints.getUrl()}/products/types`,
            method: "get"
        };
    }

    static getProduces(){
        return {
            url: `${MiscEndpoints.getUrl()}/produce`,
            method: "get"
        };
    }

}

export {
    UsersEndpoints,
    DealersEndpoints,
    MiscEndpoints,
    ProductsEndpoints
}