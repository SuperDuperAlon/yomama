import Image from 'next/image'

interface Props {
    _id?: string
    width: number
    height: number
}

const ImageCmp = ({ _id, width, height }: Props) => {

    return (
        <>
            <Image
                src='/images/top-view-beautiful-roses-bouquet-with-pink-ribbon_23-2148822309.avif'
                alt="flower name"
                width={`${width}`}
                height={`${height}`}
                style={{
                    objectFit: 'contain',
                }}
                loading="lazy"
            />
        </>
    )
}

export default ImageCmp