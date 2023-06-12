import Image from "next/image"

export default function CartIcon() {
    return (
        <div>
            <Image src="/Bag.svg" alt="account" layout="fill" sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
        </div>
    )
}