import s from './Content.module.scss'

const Content = () => {
    return (
        <div className={s.content}>
            <div className={s.header}>
                <div className={s.title}>Secure Email Communication</div>

                <div className={s.text}>
                    <span>Based in </span>
                    <span className={s.red_text}>Somewhere</span>
                </div>


                <div className={s.background} />

                {/* <div className='button'>Create account</div> */}
                {/* <div className={`button ${s.apple}`}/>
                <div className={`button ${s.play}`}/> */}
            </div>
            <div className={s.apple}></div>

        </div>
    )
}

export default Content