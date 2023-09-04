import SingleProduct from "@/components/products/SingleProduct";
import clientPromise from "@/lib/mongodb";
import { BSON } from "mongodb/lib/core";


export default async function ProductPage({params}) {
    
    // fetch from mongodb just the single data that the customer clicked on based on the product id
    let product = await findProduct(params.category, params.productID)
    
    return (
        <div>
            <SingleProduct product={product}/>
        </div>
    )
}


export async function findProduct(category, productId) {

    // based on the category param update the collection variable to have the same value as the database collections
    let collection;
    switch (category) {
        case "airpods-cases":
            collection = "earbudcases"
            break;
        case "macbook-cases":
            collection = "laptopcases"
            break;
        case "phone-cases":
            collection = "phonecases"
            break;
        case "smartwatch-bands":
            collection = "watchbands"
            break;
        case "sale":
            collection = "allProducts"
            break;
        case "new-in":
            collection = "allProducts"
            break;
    }

    // use mongodb connection and find the product 
    try {
        const client = await clientPromise;
        const db = client.db("magmaData");
        
        const dataSet = await db
        .collection(collection)
        .find({_id : BSON.ObjectId(productId)})
        .toArray();

   
       return JSON.stringify(dataSet);
    } catch (e) {
        console.error(e)
    }
}