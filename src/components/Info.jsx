import dp from '../assets/images/dp-bg.png';

export default function Info() {
    return (
        <header>
            <div className="info--img-container">
                <img src={dp} className='info--img' alt="Display picture of Badrudeen" />
            </div>

            <div className="info--bio">
                <h1 className="info--name">Badrudeen A. A.</h1>
                <p className="info--role">Frontend Developer</p>
                <a href="https://adex-badr18.github.io/portfolio/" target='_blank' className="info--website">badrudeen.portfolio</a>
            </div>

            <div className="info--cta-container">
                <a href="mailto:adex.badr18@gmail.com" target="_blank" className="info--cta-email cta">
                    <i className="fa-solid fa-envelope"></i> Email
                </a>

                <a href="https://www.linkedin.com/in/badruaa/" target="_blank" className="info--cta-linkedin cta">
                    <i className="fa-brands fa-linkedin"></i> LinkedIn
                </a>
            </div>
        </header>
    )
}