import ProductsPageStyles from "./products.module.css"
import Link from "next/link"
import { getData } from "@/app/shop/[category]/page"
import ProductCard from "./ProductCard"
import SortBy from "./SortBy"

export default async function Products({category, searchParams, lengthData}) {

    const page = typeof(searchParams.page) === "string" ? Number(searchParams.page) : 1
    let productsData;

    let sortBy = {}
    switch (searchParams.sort) {
        case "newFirst":
            sortBy = {releaseDate: -1}
            break;
        case "oldFirst":
            sortBy = {releaseDate: 1}
            break;
        default:
            sortBy = {}
    }

    let categoryInfo = {}
    switch (category) {
        case "sale":
            categoryInfo = {onSale: true}
            break;
        case "new-in":
            categoryInfo = {bestSeller: true}
            break;
        default:
            categoryInfo = {}
    }

    const initial = await getData(page, 12, categoryInfo, sortBy)
    productsData = JSON.parse(initial)
      
    let pageNumbers = Math.ceil(lengthData / 12)


    return (
        <div>
            <div className={ProductsPageStyles.productsHeader}>
                <h2 className={ProductsPageStyles.productsHeaderTitle}>Free standard delivery</h2>
                <h3 className={ProductsPageStyles.productsHeaderSubtitle}>On orders over £30</h3>
            </div>

            <div className={ProductsPageStyles.container}>
                <div className={ProductsPageStyles.productInfo}>
                    <div className={`${ProductsPageStyles.flex} ${ProductsPageStyles.categoryInfo}`}>
                        <p className={ProductsPageStyles.productCategory}>{category.split("-").join(" ")}</p>
                        <p className={ProductsPageStyles.productAmount}>{lengthData} designs found</p>
                    </div>
                    <SortBy category={category} searchParams={searchParams} />
                </div>

                <div className={ProductsPageStyles.productsContainer}>
                    {productsData.map((product, index) => {
                        return (
                            <div key={index}>
                                <ProductCard product={product} category={category}/>
                            </div>
                        )
                    })}
                </div>

                <div className={`${ProductsPageStyles.pageControls} ${ProductsPageStyles.flex}`}>
                    <Link href={`/shop/${category}?page=${page > 1 ? page-1 : 1}&sort=${searchParams.sort ? searchParams.sort : `recommended`}`} className={ProductsPageStyles.previousBtn}>
                    <div className={`${page <= 1 ? `${ProductsPageStyles.disableBtn} ${ProductsPageStyles.pageControlBtn}`: ProductsPageStyles.pageControlBtn}`}>Previous</div>
                    </Link>
                    <Link href={`/shop/${category}?page=${page < pageNumbers ? page + 1 : pageNumbers}&sort=${searchParams.sort ? searchParams.sort : `recommended`}`} className={ProductsPageStyles.nextBtn}>
                    <div className={page < pageNumbers ? `${ProductsPageStyles.pageControlBtn}` : `${ProductsPageStyles.pageControlBtn} ${ProductsPageStyles.disableBtn}`}>Next</div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

