import ListCategory from "../../../admin/services/category/category1.type";

const db= require('../../../database_client');

const loadListCategories = () :Promise<ListCategory[]> =>{
    let result = db.categories.findAll()
    .then((categories : [ListCategory])=>{
        // 
        const list = categories.map((category)=>{
            return{
                id: category.id,
                type: category.type,
                slug: category.slug,
            }
        })
        return list;
    })
    return result;
}

export default loadListCategories;