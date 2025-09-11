import { useState } from 'react';
import iconError from '../assets/icon-error.svg';
import iconRetry from '../assets/icon-retry.svg';

type ServerErrorProps = {
  onHandleServerError: (serverStatus: boolean) => void;
}

const ServerError = ({ onHandleServerError }: ServerErrorProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            onHandleServerError(true);
        }, 2000);
    }
    return (
        <div className="flex flex-col items-center gap-6 text-center">
            <img className='w-[42px] h-[50px]' src={iconError} alt="Error icon" />
            <h2 className="text-preset-2 text-(--neutral-0)">Something went wrong</h2>
            <p className="text-preset-5-medium text-(--neutral-200) max-w-[550px]">We couldn’t connect to the server (API error). Please try again in a few moments.</p>
            <button className='w-[100px] h-[42px] bg-[#262540] inline-flex items-center justify-center hover:bg-(--neutral-700) text-(--neutral-0) rounded-lg cursor-pointer' onClick={handleClick} disabled={isLoading}>
                <img className={`w-[14px] h-[14px] mr-2 ${isLoading ? 'animate-spin' : ''}`} src={iconRetry} alt="Retry icon" />
                <span>Retry</span>
            </button>
        </div>
    );
}

export default ServerError;