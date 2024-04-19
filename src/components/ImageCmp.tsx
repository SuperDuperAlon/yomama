import Image from 'next/image'

interface Props {
    _id?: string
    width: number
    height: number
}

const ImageCmp = ({ _id, width, height}: Props) => {

    return (
        <>
            <Image
                src='/images/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.avif'
                className=""
                width={`${width}`}
                height={`${height}`}
                alt="flower name"
                loading="lazy"
                layout='responsive'
            />
        </>
    )
}

export default ImageCmp