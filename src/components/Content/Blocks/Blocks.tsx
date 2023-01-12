import s from './Blocks.module.scss'

const Blocks = () => {
    return (
        <div className={s.blocks}>

        <div className={s.block_1}>
            <div className={s.points}>
                <div className={s.black_point} />
                <div className={s.grey_point} />
                <div className={s.grey_point} />
            </div>
            <div>
                <p>A new email service being developed by a group from MIT and CERN promises to bring secure,
                    encrypted email to the masses and keep sensitive information away from prying eyes.</p>
                <p className={s.text}>— Boston Herald</p>
            </div>
        </div>

        <div className={s.block_2}>
            <p className={s.title}>Any device, anywhere</p>
            <p>The NeutronMail inbox is optimized for productivity. Each detail within our secure email service is optimized to help you better read, organize, and send email.</p>

            <div className={s.buttons_block}>
                <div className={`button black_button ${s.button_img}`}>
                    <div className={s.big_apple} />
                    <span>Download on the</span>
                    <p>App Store</p>
                </div>

                <div className={`button black_button ${s.button_img}`}>
                    <div className={s.play_color} />
                    <span>Get it on</span>
                    <p className='google'><span>Google</span> play</p>
                </div>
            </div>
        </div>

        <div className={s.img_1} />

        <div className={s.block_3}>
            <p className={s.title}>Privacy is a fundamental human right.</p>
            <p>Your support helps us to protect privacy world-wide.</p>
            <div className={s.buttons_block}>
                <div  className={`button gradient_button ${s.download}`}>
                    <div className={s.downloadImg}/>
                    <span>Upgraid to Paid Plan</span>
                </div>
                <div className={`button blue_button ${s.donate}`}>
                <div className={s.dollar}/>
                    <span>Donate</span>
                </div>
            </div>
        </div>

        <div className={s.block_4}>
            <p>Those, who help us secure your privacy</p>
            <div className={s.brands} />
        </div>
    </div>
    )
}

export default Blocks