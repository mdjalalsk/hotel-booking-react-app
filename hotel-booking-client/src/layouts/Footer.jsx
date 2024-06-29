// import logo from '../../src/assets/sk-hotel-high-resolution-logo-transparent.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-green-400 text-base-content">
  {/* <aside>
  <img className='w-16' src={logo} alt="" />
     <p> SK Hotel Ltd<br/>Providing reliable tech since 1992</p>
  </aside>  */}
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
 <footer className="footer footer-center p-4 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-base-content">
  <aside>
    <p>Copyright © 2023 - All right reserved by  SK Hotel Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;