import logo from '../assets/mt-logo.png';

export const Header = () => {
    return (
        <div>
            <img src={logo} className='absolute left-0 -top-4 h-28 w-28'></img>
            <h1 className='m-4 text-4xl font-black text-center underline text-mt-orange decoration-wavy'>
                MT Dashboard
            </h1>
        </div>
    );
};


