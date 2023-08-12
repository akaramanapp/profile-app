import Strings from '../Shared/Strings';
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from 'react-icons/bi';

function About() {
    return ( <div className='mt-12 px-44 text-center flex flex-col items-center'>
        <h2 className='text-[40px] font-bold'>{Strings.ABOUT_HEADER}</h2>
        <BiSolidQuoteAltLeft className='bg-green-500 p-3 text-[44px] rounded-full text-white mt-6'/>
        <h2 className='my-5 text-gray-400 text-[14px]'>{Strings.ABOUT_DESC}</h2>
        <BiSolidQuoteAltRight className='bg-green-500 p-3 text-[44px] rounded-full text-white mt-6'/>
    </div>);
}

export default About;