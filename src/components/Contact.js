import { FACEBOOK_URL, INSTAGRAM_URL, TWITTER_URL } from "../utils/constants";


const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Send us a message or reach out via social media.</p>
            <div className="social-media">
                <a href="#"><img src={FACEBOOK_URL} alt="Facebook" /></a>
                <a href="#"><img src={TWITTER_URL} alt="Twitter" /></a>
                <a href="#"><img src={INSTAGRAM_URL} alt="Instagram" /></a>
            </div>

        </div>
    )
}

export default Contact;