import iconLoading from "../assets/icon-loading.svg";


const SearchInProgress = () => {
    return (
        <div className="relative">
            <div className="absolute z-20 left-0 mt-2 shadow-md rounded-xl border border-(--neutral-600) bg-(--neutral-700) w-full md:w-[76.5%] h-[52px]  px-6 py-2.5 inline-flex items-center">
                <img className='size-[20px] mr-2 animate-spin' src={iconLoading} alt="Retry icon" />
                <p className="text-preset-7 text-(--neutral-0)">Search in progress</p>

            </div>
        </div>
    );
}
 
export default SearchInProgress;