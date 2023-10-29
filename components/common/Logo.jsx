import Image from "next/legacy/image";
import Link from "next/link";

export default function Logo(props) {
    let image;

    if(props.color === "black") { 
        image = <Image src="/MAGMA-black.svg" priority className="logo-image" alt="logo" layout="fill" sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
    } else {
        image = <Image src="/MAGMA-white.svg" className="logo-image" alt="logo" layout="fill" sizes="(max-width: 576px) 100vw, (max-width: 1024px) 50vw, 33vw"/>
    }

    return (
            <Link href={"/"} legacyBehavior passHref>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                    {image}
                </div>
            </Link>
    )
}
