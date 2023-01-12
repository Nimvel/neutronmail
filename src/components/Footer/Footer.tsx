import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.info}>
                <div>
                <p>General: <b>contact@neutronmail.ch</b></p>
                <p>Media: <b>media@neutronmail.ch</b></p>
                <p>Security: <b>security@neutronmail.ch</b></p>
                </div>
                <div>
                <p>For support inquiries, please visit</p>
                <p><b>neutronmail.com/support</b></p>
                </div>
            </div>

            <div className={s.columns}>
                <div className={s.column_1}>
                    <p>Company</p>
                    <ul>
                        <li>Blog •</li>
                        <li>Team •</li>
                        <li>Careers •</li>
                        <li>Support •</li>
                        <li>Donate •</li>
                    </ul>
                </div>
                <div>
                    <p>Legal</p>
                    <ul>
                        <li>Imprint •</li>
                        <li>Privacy Policy •</li>
                        <li>Terms & Conditions •</li>
                        <li>Transparency Report •</li>
                        <li>Report Abuse •</li>
                    </ul>
                    </div>
                <div>
                    <p>NeutronMail</p>
                    <ul>
                        <li>Pricing •</li>
                        <li>Security •</li>
                        <li>Shop •</li>
                        <li>Press/Media Kit •</li>
                        <li>Onion Site •</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className={s.copyright_text}>
                <span>Facebook</span>
                <span>Twitter</span>
                <span>Google+</span>
                <span>Feedback Forum</span>
                <span>Reddit</span>
                <p>© 2017 Neutron Technologies AG. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer