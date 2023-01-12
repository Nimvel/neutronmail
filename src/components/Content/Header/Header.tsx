import s from './Header.module.scss'

const Header = () => {
    return (
            <div className={s.header}>
                <div className={s.block}>
                    <div className={s.title}>Secure Email Communication</div>
                    <span className={s.text}>Based in <span className='red_text'>Somewhere</span></span>
                </div>

                <div className={s.buttons_block}>
                    <div className={`button gradient_button ${s.button}`}>
                        <span>Create account</span>
                    </div>
                    <div className='button small_button' >
                        <div className={s.apple} />
                    </div>
                    <div className='button small_button' >
                        <div className={s.play} />
                    </div>
                </div>

                <div className={s.background} />

            </div>
    )
}

export default Header