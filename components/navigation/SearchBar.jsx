import SearchIcon from "./SearchIcon"
import NavbarStyles from "./navigation.module.css"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar({closeMenu}) {
    const [searchTerm, setSearchTerm] = useState("")
    const router = useRouter()

    const searchValueAdded = (event) => {
        let searchInput = document.getElementById("searchQuestionMobile")
        setSearchTerm(event.target.value)
        
        searchInput.addEventListener("keypress", function(e) {
                if (e.key === "Enter") {
                    e.preventDefault()
                    closeMenu()
                    router.push(`/search?q=${event.target.value}`)
                }
            })
    }
  

    return (
            <div  className={NavbarStyles.searchContainer}>
                <form  className={NavbarStyles.flex}>
                    <div className={NavbarStyles.searchIconMobile} onClick={() => {closeMenu(); router.push(`/search?q=${searchTerm}`)}}>
                        <SearchIcon />
                    </div>
                    <input onChange={searchValueAdded} id="searchQuestionMobile" className={NavbarStyles.searchInput} type="text" name="search"></input>
                </form>
            </div>
    )
}