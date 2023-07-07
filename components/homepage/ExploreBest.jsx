import Link from "next/link";

export default function ExploreBest() {
    return (
        <div>
            <div>
                <div>
                    <h2>Explore Best Sellers</h2>
                    <p>Shop the most loved selection of phone cases from all time.</p>
                </div>
                <div>
                    interactive part
                </div>
                <div>
                    <Link href={"/"}>
                        <button>Shop now</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}