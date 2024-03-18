import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';

interface Props {
    _id: string
}

const ImageCmp = ({ _id }: Props) => {

    return (
        <>
            <Link href={`/catalogue/${_id}`}>
                <Image
                    src='/images/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.avif'
                    className=""
                    width={180}
                    height={120}
                    alt="flower name"
                    loading="lazy"
                />
            </Link>
        </>
    )
}

export default ImageCmp