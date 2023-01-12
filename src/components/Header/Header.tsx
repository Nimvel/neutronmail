import s from './Header.module.scss'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.logo_block}>
            <div className={s.logo}>neutronMail</div>
                <div className={s.languages}>
                    <span>English</span>
                    <span>French</span>
                    <span>Italian</span>
                    <span>Polish</span>
                </div>
            </div>
                

            <div className={s.navbar}>
                <span>About</span>
                <span>Security</span>
                <span>Blog</span>
                <span>Careers</span>
                <span>Support</span>
                <span>Donate</span>
                <span className={s.log_in}>Log in</span>
                <span className='button'>Sign up</span>
            </div>
        </div>
    )
}

export default Header