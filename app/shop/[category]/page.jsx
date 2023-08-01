import Products from "@/components/products/Products"

export default async function ProductsPage({params}) {
    const {category} = params

    let productsData;
    switch (category) {
        case "airpods-cases":
            productsData = callAPI("earbuds")
            break;
        case "macbook-cases":
            productsData = callAPI("laptops")
            break;
        case "phone-cases":
            productsData = callAPI("phones")
            break;
        case "smartwatch-bands":
            productsData = callAPI("watches")
            break;
    }
    
    return (
        <div>
            <Products productsData={productsData}/>
        </div>
    )
}

// based on the category route fetch data from the correct api point
// **********currently on localhost
export async function callAPI(arg) {
    let data = await fetch(`${process.env.APIURL}/api/${arg}`, {method: 'GET'})
    .then (res => res.json())
    return JSON.stringify(data)
}


// statically generate these routes at build time instead of on-demand
export function generateStaticParams() {
    return [{ category: 'airpods-cases' }, 
    { category: 'macbook-cases' }, { category: 'phone-cases' }, { category: 'smartwatch-bands' }]
  }