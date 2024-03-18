import CardFlower from './CardFlower'

interface FlowerProps {
    flowers: Flower[];
}

const CatalogueList = ({flowers}: FlowerProps) => {

    return (
        <>
            <div className="flower-list">
                {flowers.map((flower, idx) => {
                    return (
                        <div className='catalogue__card-list' key={idx}>
                            <CardFlower flower={flower} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CatalogueList