import styles from './styles'
import { Hero, Navbar, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer } from './components'

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    {/* paddingX: 'sm:px-16 px-6',
    flexCenter: 'flex justify-center items-center',
    boxWidth: 'xl:max-w-[1280px] w-full', */}
    <div className={`${styles.paddingX} ${styles.flexCenter} ${styles.navbar}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} pt-20`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />

        <Business />

        <Billing />

        <CardDeal />

        <Testimonials />

        <Clients />

        <CTA />

        <Footer />
      </div>
    </div>
  </div>
)

export default App
