const Search = () => {
    return (
        <form className="w-full flex flex-col gap-3 md:flex-row md:w-[720px] xl:w-[656px]" action="">
            <input type="search" name="" id="" placeholder="Search for a place..." className="bg-(--neutral-800) bg-[url('../icon-search.svg')] bg-no-repeat bg-position-[left_24px_top_16px] text-preset-5-medium text-(--neutral-200)  ps-14 pe-6 py-4 rounded-xl w-full h-14 md:flex-3 cursor-pointer" />
            <button type="submit" className="text-preset-5-medium bg-(--blue-500) text-(--neutral-0) rounded-xl w-full h-14 cursor-pointer hover:bg-(--blue-700) md:flex-1">Search</button>
        </form>
    );
}
 
export default Search;