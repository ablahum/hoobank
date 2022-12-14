const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',
  navbar: 'fixed top-0 left-0 right-0 z-10 backdrop-blur-lg',

  heading: 'font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]',
  heading2: 'font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full',
  paragraph: 'font-poppins font-normal text-dimWhite leading-[30.8px]',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  padding: 'sm:px-16 px-6 sm:py-12 py-4',
  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-6',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',
}

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
}

export default styles
