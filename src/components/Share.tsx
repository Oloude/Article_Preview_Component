 import facebookIcon from '../assets/icon-facebook.svg'
 import pinterestIcon from '../assets/icon-pinterest.svg'
 import twitterIcon from '../assets/icon-twitter.svg' 

function Share() {
  return (
    <div className='bottom-0 left-0 right-0 absolute rounded-b-2xl bg-desaturatedBlue flex gap-3 p-6 pb-8  lg:top-[40%] lg:bottom-auto lg:left-auto lg:py-3 lg:px-7 lg:rounded-md lg:-right-14'>
        <div className='border-l-[15px] border-l-[transparent] border-r-[15px] border-r-[transparent] border-t-[15px] border-t-desaturatedBlue absolute -bottom-3 left-[45%] hidden lg:block'></div>
        <p className='text-lightBlue text-sm uppercase font-light tracking-[6px]'>share</p>
        <img src={facebookIcon} alt="" />
        <img src={twitterIcon} alt="" />
        <img src={pinterestIcon} alt="" />
    </div>
  )
}

export default Share