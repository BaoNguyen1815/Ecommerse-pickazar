import { Arg, Query, Resolver } from "type-graphql";
import ListCategory from "../../../admin/services/category/category1.type";
import loadListCategories from "./listcategory.sample";



@Resolver()
export  class ListCategoryReSolver{
    private readonly items: Promise<ListCategory[]> = loadListCategories();

    @Query(()=>[ListCategory],{description : 'get list name category'})
    async listcategories() : Promise<ListCategory[]>{
        let result = await this.items;
        // console.log("resolver: ", result);
        return await result;
    }
}