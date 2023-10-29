import Products from "@/components/products/Products"
import clientPromise from "@/lib/mongodb";

let receivedData = "";
export default async function ProductsPage({params, searchParams}) {
    receivedData = ""
    let apiRoute = ""
    let category = params.category

    switch (category) {
        case "airpods-cases":
            receivedData = "earbudcases"
            apiRoute = "earbuds"
            break;
        case "macbook-cases":
            receivedData = "laptopcases"
            apiRoute = "laptops"
            break;
        case "phone-cases":
            receivedData = "phonecases"
            apiRoute = "phones"
            break;
        case "smartwatch-bands":
            receivedData = "watchbands"
            apiRoute = "watches"
            break;
        case "sale":
            receivedData = "allProducts"
            apiRoute = "discounted"
            break;
        case "new-in":
            receivedData = "allProducts"
            apiRoute = "new"
            break;
    }

    let allProducts = await callAPI(apiRoute)
    let lengthData = (JSON.parse(allProducts)).length;
    
    return (
        <div>
            <Products category={category} searchParams={searchParams} lengthData={lengthData}/>
        </div>
    )
}


let client
let db
let products
async function init() {
    try {
        client = await clientPromise
        db = client.db("magmaData")
        products = await db.collection(receivedData)
        return products
    } catch (error) {
        throw new Error("failed to connect to db")
    }
}

export const getData = async (page = 1, limit = 12, filter, sortBy) => {
    try {
        await init()
        if(!products) await init()
        const skip = (page - 1) * limit
        
        const result = await products
        .find(filter)
        .sort(sortBy)
        .limit(limit)
        .skip(skip)
        .toArray()
        
        return JSON.stringify(result)

    } catch (error){
        return {error}
    }
}

export const callAPI = (async (arg) => {
    let data = await fetch(`${process.env.APIURL}/api/${arg}`, {method: 'GET'})
    .then (data => data.json())
    return JSON.stringify(data)
})

export function generateStaticParams() {
    return [{ category: 'airpods-cases' }, 
    { category: 'macbook-cases' }, { category: 'phone-cases' }, { category: 'smartwatch-bands' }]
  }