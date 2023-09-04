import clientPromise from "@/lib/mongodb"
import ProductsPageStyles from "../../components/products/products.module.css"
import ProductCard from "@/components/products/ProductCard"
import Link from "next/link"

export default async function SearchResult({searchParams}) {

    let searchValue = searchParams.q

    let searchItems = await findSearchedItem(searchValue)
    let foundItems;

    if (searchItems) {
        foundItems = JSON.parse(searchItems)
    }


    function chooseCategory(index) {
        switch (foundItems[index].category) {
            case "watch":
                return "smartwatch-bands"
            case "phone":
                return "phone-cases"
            case "laptop":
                return "macbook-cases"
            case "earbuds":
                return "airpods-cases"   
        }
    }
    
    return (
        <div>

            {foundItems.length > 0 ? 
            (<div className={ProductsPageStyles.foundItemsPage}>
                <div className={ProductsPageStyles.container}>
                    <div className={ProductsPageStyles.productInfo}>
                        <div className={`${ProductsPageStyles.categoryInfo}`}>
                            <p className={ProductsPageStyles.searchTermDisplay}>Products found for "{searchValue}"</p>
                            <p className={ProductsPageStyles.productAmount}>{foundItems.length} {foundItems.length > 1 ? "designs" : "design"} found</p>
                        </div>
                    </div>

                    <div className={ProductsPageStyles.searchPage}>
                        <div className={ProductsPageStyles.productsContainer}>
                            {foundItems.map((product, index) => {
                                return (
                                    <div key={index}>
                                        <ProductCard product={product} category={chooseCategory(index)}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>


                </div>

            </div>) : (
                <div className={`${ProductsPageStyles.notFoundPage} ${ProductsPageStyles.container}`}>
                    <p className={ProductsPageStyles.notFoundError}>Ooops! Looks like we couldn`t find any products based on your search.</p>
                    <Link href={"/"} className={ProductsPageStyles.homePageLink}>Back to home page</Link>
                </div>
            )
            }
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
        products = await db.collection("allProducts")
        return products
    } catch (error) {
        throw new Error("failed to connect to db")
    }
}


export const findSearchedItem = async (query) => {
    try {
        await init()
        if(!products) await init()
        const pipeline = []

        if (query) {
            pipeline.unshift({
                $search: {
                    text: {
                        query,
                        fuzzy: {
                            maxEdits: 1,
                            prefixLength: 3,
                            maxExpansions: 50
                        },
                        path: {
                            wildcard: "*"
                        }
                    }
                }
            })
        }
        const result = await products.aggregate(pipeline).toArray()
        return JSON.stringify(result)

    } catch (error){
        return {error}
    }
}
