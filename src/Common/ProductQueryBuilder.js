import { ProductClassifications } from '../Common/Constants';

class ProductQueryBuilder {

    WithOrganic(){
        return this.WithClassification(ProductClassifications.Organic);
    }

    WithInOrganic(){
        return this.WithClassification(ProductClassifications.Inorganic);
    }

    WithClassification(classification){
        this.Classification = classification;
        return this;
    }

    SearchKeyword(keyword){
        this.Keyword = keyword;
        return this;
    }

    HasBrands(brands){
        this.Brands = brands;
        return this;
    }

    HasCrops(crops){
        this.Crops = crops;
        return this;
    }

    HasName(name){
        this.ProductName = name;
        return this;
    }

    InRegion(regions){
        this.Regions = regions;
        return this;
    }

    HasSolution(solutions){
        this.Solutions = solutions;
        return this;
    }

    MatchLifeCycle(name,description){

        this.LifeCycle = {
            Name: name,
            Description: description
        };

        return this;
    }

    OrderBy(key){
        this.Order = key;
        return this;
    }

    CreatedWithinRange(start,end){

        this.CreationRange = {
            Start: start,
            End: end
        };

        return this;

    }

    HasDealerId(id){
        this.DealerId = id;
        return this;
    }

    HasProductId(id){
        this.ProductId = id;
        return this;
    }

    IsType(productType){
        this.ProductType = productType;
        return this;
    }

    FromDealer(name , companyName , region , country ){

        this.Dealer = {
            Name: name,
            CompanyName: companyName,
            Region: region ?  ( Array.isArray(region)  ? region : [region] ) : undefined,
            Country: country
        };

        return this;
    }

    Paginate(page , itemsPerPage){

        this.Pagination = {
            Page: page,
            ItemsPerPage: itemsPerPage
        };

        return this;
    }


    build(){

        return {

            Classification: this.Classification,
            SearchKeyword: this.Keyword,
            Crops: this.Crops,
            Regions: this.Regions,
            Brands: this.Brands,
            ItemsPerPage: this.Pagination ? this.Pagination.ItemsPerPage : undefined,
            CurrentPage: this.Pagination ? this.Pagination.Page : undefined,
            DealerName: this.Dealer ? this.Dealer.Name : undefined,
            DealerCompanyName: this.Dealer ? this.Dealer.CompanyName : undefined,
            DealerRegions: this.Dealer ? this.Dealer.Region : undefined,
            DealerCountry: this.Dealer ? this.Dealer.Country : undefined,
            Solutions: this.Solutions,
            DateRangeStart: this.CreationRange ? this.CreationRange.Start : undefined,
            DateRangeEnd: this.CreationRange  ? this.CreationRange.End : undefined,
            ProductType: this.ProductType,
            ProductName: this.ProductName,
            DealerIds : this.DealerId,
            ProductId: this.ProductId,
            OrderBy: this.Order,
            LifeCycleName: this.LifeCycle ? this.LifeCycle.Name : undefined,
            LifeCycleDescription: this.LifeCycle ? this.LifeCycle.Description : undefined,

        };

    }

}

export default ProductQueryBuilder;
