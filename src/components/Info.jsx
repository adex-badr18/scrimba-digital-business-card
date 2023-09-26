import dp from '../assets/images/dp-nobg.png';

export default function Info() {
    return (
        <header>
            <img src={dp} className='info--img' alt="Display picture of Badrudeen" />

            <div className="info--bio">
                <h1 className="info--name">Badrudeen A. Abdul-hameed</h1>
                <p className="info--role">Frontend Developer</p>
                <a href="#" className="info--website">badrudeen.website</a>
            </div>

            <div className="info--cta-container">
                <button className="info--cta-email">
                <i class="fa-solid fa-envelope"></i> Email
                </button>

                <button className="info--cta-email">
                <i class="fa-brands fa-linkedin"></i> LinkedIn
                </button>
            </div>
        </header>
    )
}