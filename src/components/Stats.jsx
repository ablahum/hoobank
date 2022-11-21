import { stats } from '../constants'
import styles from '../styles'

const Stats = () => (
  <div className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className='font-poppins font-semibold xs:text-4xl text-3xl text-white'>{stat.value}</h4>

        <p className='font-poppins font-normal xs:text-xl text-base text-gradient uppercase ml-3'>{stat.title}</p>
      </div>
    ))}
  </div>
)

export default Stats
