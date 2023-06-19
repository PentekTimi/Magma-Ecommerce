import SearchIcon from "./SearchIcon"
import NavbarStyles from "./navigation.module.css"

export default function SearchBar() {
    return (
        <div className={NavbarStyles.searchContainer}>
            <form className={NavbarStyles.flex}>
                <div className={NavbarStyles.searchIconMobile}>
                    <SearchIcon />
                </div>
                <input className={NavbarStyles.searchInput}  type="text" name="search"></input>
            </form>
        </div>
    )
}