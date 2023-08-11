import { arrays } from "@/lib/arrays"

const MainIcons = () => {
    const { heroIcons } = arrays
    return (
        <div className='index-layout'>
            <div className='flex flex-row justify-between'>
                {heroIcons.map((icon, idx) => (
                    <div key={idx} className='main-icon-list flex flex-col'>
                        <div className=''>{icon.icon}</div>
                        <div>{icon.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MainIcons