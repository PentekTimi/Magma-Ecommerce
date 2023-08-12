import Products from "@/components/products/Products"
import clientPromise from "@/lib/mongodb";

let receivedData = "";
export default async function ProductsPage({params, searchParams}) {
    receivedData = ""
    let apiRoute = ""
    let category = params.category

    // based on the dynamic category parameter update a few variables that will allow to fetch from the correct database
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
            break
    }

    // fetch full category data to find out how many products will be displayed
    let allProducts = await callAPI(apiRoute)
    let lengthData = (JSON.parse(allProducts)).length;
    
    return (
        <div>
            <Products category={category} searchParams={searchParams} lengthData={lengthData}/>
        </div>
    )
}

// initialize mongodb connection to correct collection
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

// fetch data from db given the limit of 12 products, and given the page argument that is changing
export const getData = async (page = 1, limit = 12) => {
    try {
        await init()
        if(!products) await init()
        const skip = (page - 1) * limit
        
        const result = await products
        .find()
        .limit(limit)
        .skip(skip)
        .toArray()
        
        return JSON.stringify(result)

    } catch (error){
        return {error}
    }
}

// based on the category route fetch data from the correct api point
// **********currently on localhost
export const callAPI = (async (arg) => {
    let data = await fetch(`${process.env.APIURL}/api/${arg}`, {method: 'GET'})
    .then (data => data.json())
    return JSON.stringify(data)
})

// statically generate these routes at build time instead of on-demand
export function generateStaticParams() {
    return [{ category: 'airpods-cases' }, 
    { category: 'macbook-cases' }, { category: 'phone-cases' }, { category: 'smartwatch-bands' }]
  }