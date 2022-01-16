import styles from "./ListCard.module.css"


const ListCard = ({imgSource}) => {
    return (
        <div className='flex flex-col justify-center items-center z-10'>
            <div className='w-fit z-20'>
                <img src={imgSource} alt="img-greeting-cover" class="thumbnail"/>
            </div>
            <div className='bg-white p-4 pt-10 z-10 relative -top-10  m-2'>
                <h3 className='text-xs font-bold text-slate-800'>Happy Valentine's Day</h3>
                <p className='text-xs'>Amazing cover designed especially for Valentine's Day</p>
            </div>
        </div>
    )
}

export default ListCard
