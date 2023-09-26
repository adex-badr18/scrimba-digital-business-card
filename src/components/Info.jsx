import dp from '../assets/images/dp-nobg.png';

export default function Info() {
    return (
        <header>
            <div className="info--img-container">
                <img src={dp} className='info--img' alt="Display picture of Badrudeen" />
            </div>

            <div className="info--bio">
                <h1 className="info--name">Badrudeen A. A.</h1>
                <p className="info--role">Frontend Developer</p>
                <a href="#" className="info--website">badrudeen.website</a>
            </div>

            <div className="info--cta-container">
                <button className="info--cta-email">
                    <i className="fa-solid fa-envelope"></i> Email
                </button>

                <button className="info--cta-linkedin">
                    <i className="fa-brands fa-linkedin"></i> LinkedIn
                </button>
            </div>
        </header>
    )
}