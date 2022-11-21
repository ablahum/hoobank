import styles from '../styles'
import { discount, robot, arrowUp } from '../assets'

const Discount = () => (
  <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
    <img src={discount} alt='discount' className='w-[32px] h-[32px]' />

    <p className={`${styles.paragraph} ml-2`}>
      <span className='text-white'>20%</span> Discount For <span className='text-white'>1 Month</span> Account
    </p>
  </div>
)

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium leading-[23.4px]'>
          <span className='text-gradient'>Get</span>
        </p>

        <img src={arrowUp} alt='arrow' className='w-[23px] h-[23px] object-contain' />
      </div>

      <p className='font-poppins font-medium leading-[23.4px]'>
        <span className='text-gradient'>Started</span>
      </p>
    </div>
  </div>
)

const Heading = () => (
  <>
    <Discount />

    <div className='flex flex-row justify-between items-center w-full'>
      <h1 className={`${styles.heading}`}>
        The Next
        <br />
        <span className='text-gradient'>Generation</span>
      </h1>

      <div className='sm:flex hidden md:mx-4 mr-0'>
        <GetStarted />
      </div>
    </div>

    <h1 className={`${styles.heading}`}>Payment Method.</h1>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
  </>
)

const Gradient = () => (
  <>
    <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />

    <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />

    <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
  </>
)

const Hero = () => (
  <div id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <Heading />
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />

      <Gradient />
    </div>

    <div className={`sm:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </div>
)

export default Hero
