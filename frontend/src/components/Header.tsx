import logo from '../assets/mt-logo.png';

export const Header = () => {
    return (
        <div>
            <img src={logo} className='absolute left-6 -top-4 h-28 w-28'></img>
            <h1 className='m-4 text-4xl font-black text-center text-mt-orange'>
                MT Dashboard
            </h1>
        </div>
    );
};


