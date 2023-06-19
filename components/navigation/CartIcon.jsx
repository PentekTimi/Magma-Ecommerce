import Image from "next/legacy/image"

export default function CartIcon() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src="/Bag.svg" alt="account" layout="fill" sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
        </div>
    )
}