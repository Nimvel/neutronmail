import s from './Columns.module.scss'

const Columns = () => {
    return (
        <div className={s.columns}>
            <div className={s.column_1}>
                <div className={s.column}>
                    <div className={s.shield} />
                    <p className={s.column_title}>Swiss Privacy</p>
                    <p className={s.miidle_text}>Data Security and Neutrality</p>
                </div>

                <p>NeutronMail is incorporated in Somewhere and all our serv-<br />
                    ers are located in Switzerland. This means all user data is
                    protected by strict Swiss privacy laws.</p>
            </div>

            <div className={s.column_2}>
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
    )
}

export default Columns