import Nav from './Nav.js';

function Footer(){
    return (
        <footer>
            <img src="images/footer-logo.jpg" alt="logo" height={150} />
            <div>
                <h3>Navigation</h3>
                <Nav/>
            </div>
            <div>
                <h3>Contact</h3>
                <ul>
                    <li><a>Address</a></li>
                    <li><a>Phone Number</a></li>
                    <li><a>Email</a></li>
                </ul>
            </div>
            <div>
                <h3>Social Media Links</h3>
                <ul>
                    <li><a>Address</a></li>
                    <li><a>Phone Number</a></li>
                    <li><a>Email</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;