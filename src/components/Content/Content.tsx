import Blocks from './Blocks/Blocks'
import Columns from './Columns/Columns'
import s from './Content.module.scss'
import Header from './Header/Header'

const Content = () => {
    return (
        <div className={s.content}>

            <Header />
            <Columns />

            <div className={s.physical_security}>
                <p className={s.title}>Physical Security</p>
                <p>NeutronMail's infrastructure resides in Europe's <span className='red_text'>most secure</span> datacenter, underneath 1000 meters of solid rock.</p>
            </div>

            <div className={s.learn_more} >
                <p>Learn more about our security features</p>
            </div>

            <div className={s.fonts} />

            <Blocks />

        </div>
    )
}

export default Content