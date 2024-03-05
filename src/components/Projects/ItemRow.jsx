import clsx from "clsx"

const ItemRow = ({ img, headline, reverse, bgColor }) => {
    return (
        <div>
            <div className={clsx('flex items-center justify-around md:gap-y-8 flex-col', reverse ? 'lg:flex-row-reverse' : 'lg:flex-row')}>
                <div className="sm:w-96 text-center">
                    <h1 className='flex items-center justify-center 2xl:text-7xl xl:text-6xl lg:text-5xl md:4xl sm:text-6xl text-3xl font-poppins font-light lg:mb-0 mb-5 break-words'>{headline}</h1>
                </div>
                <div className='lg:w-2/3 w-full rounded-lg relative group cursor-pointer overflow-hidden'>
                    <span className={clsx("z-50 group-hover:absolute w-full h-full bg-opacity-15", bgColor === 'white' ? 'text-black bg-gray-600' : 'text-white bg-white')}></span>
                    <img src={img} alt="type-fitness" className="transition-all group-hover:scale-105" />
                </div>
            </div>
        </div>
    )
}

export default ItemRow
