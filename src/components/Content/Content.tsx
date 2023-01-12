import s from './Content.module.scss'

const Content = () => {
    return (
        <div className={s.content}>
            <div className={s.header}>
                <div className={s.block}>
                    <div className={s.title}>Secure Email Communication</div>
                    <span className={s.text}>Based in <span className='red_text'>Somewhere</span></span>
                </div>

                <div className={s.shadow} />

                <div className={s.buttons_block}>
                    <div className='button gradient_button'>
                        <span>Create account</span>
                    </div>
                    <div className={`button small_button ${s.button_img}`} >
                        <div className={s.apple} />
                    </div>
                    <div className={`button small_button ${s.button_img}`} >
                        <div className={s.play} />
                    </div>
                </div>

                <div className={s.background} />


            </div>

            <div className={s.columns}>
                <div>
                    <div className={s.column}>
                        <div className={s.shield} />
                        <p className={s.column_title}>Swiss Privacy</p>
                        <p className={s.miidle_text}>Data Security and Neutrality</p>
                    </div>

                    <p>NeutronMail is incorporated in Somewhere and all our servers are located in Switzerland. This means all user data is
                        protected by strict Swiss privacy laws.</p>
                </div>

                <div>
                    <div className={s.column}>
                        <div className={s.lock} />
                        <p className={s.column_title}>Double Encryption</p>
                        <p className={s.miidle_text}>Automatic Email Security</p>
                    </div>

                    <p>All emails are secured automatically with end-to-end encryption. This means even we cannot decrypt and read your emails. As a result, your encrypted emails cannot
                        be shared with third parties.</p>
                </div>

                <div>
                    <div className={s.column}>
                        <div className={s.key} />
                        <p className={s.column_title}>Anonymous Email</p>
                        <p className={s.miidle_text}>Protect Your Privacy</p>
                    </div>

                    <p>No personal information is required to create your secure email account. By default, we do not keep any IP logs which can be linked to your anonymous email account. Your privacy comes first.</p>
                </div>
            </div>

            <div>
                <p className={s.title}>Physical Security</p>
                <p>NeutronMail's infrastructure resides in Europe's <p className='red_text'>most secure</p> datacenter, underneath 1000 meters of solid rock.</p>
            </div>

            <div>
                <p>Learn more about our security features</p>
            </div>

            <div className={s.fonts} />

            <div  className={s.blocks}>

                <div className={s.block_1}>
                    <div className={s.points}>
                        <div className={s.black_point} />
                        <div className={s.grey_point} />
                        <div className={s.grey_point} />
                    </div>
                    <div>
                        <p className={s.text}>A new email service being developed by a group from MIT and CERN promises to bring secure,
                            encrypted email to the masses and keep sensitive information away from prying eyes.</p>
                        <p className={s.author}>— Boston Herald</p>
                    </div>
                </div>

<div >
<p>Any device, anywhere</p>
                <p>The NeutronMail inbox is optimized for productivity. Each detail within our secure email service is optimized to help you better read, organize, and send email.</p>

                <div className={s.buttons_block}>
                    <div className={`button black_button ${s.button_img}`}>
                        <div className={s.big_apple} />
                        <p>Download on the</p>
                        <p>App Dtore</p>
                    </div>

                    <div className={`button black_button ${s.button_img}`}>
                        <div className={s.play_color} />
                        <p>Download on the</p>
                        <p>App Dtore</p>
                    </div>
                </div>
</div>

                

                <div className={s.img_1} />

                <p>Privacy is a fundamental human right.</p>
                <p>Your support helps us to protect privacy world-wide.</p>
                <div className={s.buttons_block}>
                    <div className='button gradient_button'>
                        {/* <span className={s.download}/> */}
                        <span>Upgraid to Paid Plan</span>
                    </div>
                    <div className={`button ${s.blue_button}`}>
                        {/* <span className={s.donate}/> */}
                        <span>Donate</span>
                    </div>
                </div>

                <p>Those, who help us secure your privacy</p>
                <div className={s.brands} />
            </div>

        </div>
    )
}

export default Content