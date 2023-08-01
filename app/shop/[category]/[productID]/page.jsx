export default function ProductPage({params}) {
    return (
        <div>{params.category} {params.productID}</div>
    )
}