import Link from 'next/link'

const MainHero = () => {
    return (
        <div className="hero full">
            <div className="hero-img">
                <div className='center'>
                    <div className='text-white'>Buy Yomama Flowers</div>
                    <Link href='/'>
                        To our catalogue
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MainHero