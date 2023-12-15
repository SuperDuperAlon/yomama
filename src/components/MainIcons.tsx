import { arrays } from "@/lib/arrays"

const MainIcons = () => {
    const { heroIcons } = arrays
    return (
            <div className='main-icon-list'>
                {heroIcons.map((icon, idx) => (
                    <div key={idx} className=''>
                        <div className=''>{icon.icon}</div>
                        <div>{icon.desc}</div>
                    </div>
                ))}
            </div>
    )
}

export default MainIcons