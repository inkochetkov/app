import './styles.scss';
function Header (){
    var date = new Date()
    return (
<header>
<div className="copyright">

  <p>© {date.getFullYear()} - Kochetkov Igor</p>
                
                </div>
  <div className="social">
    <a href="/" className="home">Home</a>
    <a href="mailto:mut.e@icloud.com" className="support">Support</a>
    <a href="https://inkochetkov.github.io/privacy_policy/privacy_policy.pdf" className="policy">Privacy Policy</a>
  </div>
</header>

    );
}

export default Header;