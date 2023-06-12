import Image from "next/legacy/image"

export default function AccountIcon() {
    return (
        <Image src="/User.svg" alt="account" layout="fill" sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
    )
}