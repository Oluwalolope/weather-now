const Loader = () => {
    return (
        <div className="flex flex-col items-center gap-3.5 mx-auto">
            {/* From Uiverse.io by Javierrocadev */}
            <div className="flex flex-row gap-2">
              <div className="size-3 rounded-full bg-(--neutral-0) animate-bounce [animation-delay:.7s]"></div>
              <div className="size-3 rounded-full bg-(--neutral-0) animate-bounce [animation-delay:.3s]"></div>
              <div className="size-3 rounded-full bg-(--neutral-0) animate-bounce [animation-delay:.7s]"></div>
            </div>
            <p className='text-preset-6 text-(--neutral-200)'>Loading...</p>
        </div>
    );
}

export default Loader;