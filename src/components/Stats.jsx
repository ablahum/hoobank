import { stats } from '../constants'
import styles from '../styles'

const Stats = () => (
  <div className={`${styles.flexCenter} sm:flex-row flex-col flex-wrap sm:mb-16 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex flex-1 sm:justify-center justify-between items-center flex-row sm:m-3 my-3 w-full`}>
        <h4 className='font-poppins font-semibold xs:text-4xl text-3xl text-white'>{stat.value}</h4>

        <p className='font-poppins font-normal xs:text-xl text-base text-gradient uppercase ml-3'>{stat.title}</p>
      </div>
    ))}
  </div>
)

export default Stats
