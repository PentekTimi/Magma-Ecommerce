"use client"
import ProductsPageStyles from "./products.module.css"
import { useRouter } from 'next/navigation'

export default function SortBy({category}) {
    const router = useRouter()
    
    const handleSelection = (e) => {
        switch (e.target.value) {
            case "recommended":
                router.push(`/shop/${category}?page=1&sort=recommended`)
                break;
            case "newFirst":
                router.push(`/shop/${category}?page=1&sort=newFirst`)
                break;
            case "oldFirst":
                router.push(`/shop/${category}?page=1&sort=oldFirst`)
                break;
        }
    }

    return (
        <div className={`${ProductsPageStyles.flex} ${ProductsPageStyles.productFilter}`}>
            <label htmlFor="sortBy" className={ProductsPageStyles.filterLabel}>Sort by</label>
            <select className={ProductsPageStyles.selectDropdown} onChange={handleSelection} id="sortBy">
                <option className={ProductsPageStyles.filterOption} aria-label="recommended" value={"recommended"}>Recommended</option>
                <option className={ProductsPageStyles.filterOption} aria-label="newest first" value={"newFirst"}>Newest first</option>
                <option className={ProductsPageStyles.filterOption} aria-label="oldest first" value={"oldFirst"}>Oldest first</option>
            </select>
        </div>
    )
}