import header from '../assets/mt-orange.png';

export const Header = () => {
    return (
        <div>
            <img src={header} className='w-full h-10'></img>
            <h1 className='text-orange-400 text-4xl text-center font-bold m-4'>
                MT Dashboard
            </h1>
        </div>
    );
};


