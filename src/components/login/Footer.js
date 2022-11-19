import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="login_footer">
      <div className="login_footer_wrap">
        <Link to="/">English(UK)</Link>
        <Link to="/">Français (France)</Link>
        <Link to="/">বাংলা</Link>
        <Link to="/">हिन्दी</Link>
        <Link to="/">Deutsch</Link>
        <Link to="/">Italiano</Link>
        <Link to="/">Español</Link>
        <Link to="/">नेपाली</Link>
        <Link to="/">اردو</Link>
        <Link to="/">Portuguese (Brazil)</Link>
      </div>
      <hr />
      <div className="login_footer_wrap">
        <Link to="/">Sign Up</Link>
        <Link to="/">Log In</Link>
        <Link to="/">Messanger</Link>
        <Link to="/">Facebook</Link>
        <Link to="/">Watch</Link>
        <Link to="/">Place</Link>
        <Link to="/">Games</Link>
        <Link to="/">Marketplace</Link>
        <Link to="/">Facebook Pay</Link>
        <Link to="/">Oculus</Link>
        <Link to="/">Portal</Link>
        <Link to="/">Instagram</Link>
        <Link to="/">Bulletin</Link>
        <Link to="/">Local</Link>
        <Link to="/">Fundraiser</Link>
        <Link to="/">Service</Link>
        <Link to="/">Service</Link>
        <Link to="/">Voting Information Centre</Link>
        <Link to="/">Groups</Link>
        <Link to="/">About</Link>
        <Link to="/">Create ad</Link>
        <Link to="/">Create Page</Link>
        <Link to="/">Developers</Link>
        <Link to="/">Careers</Link>

        <Link to="/">
          AdChoice <i className="adChoice_icon"></i>
        </Link>
        <Link to="/">Terms</Link>
        <Link to="/">Help</Link>
      </div>
      <div className="login_footer_wrap">
        <Link to="/" style={{ fontSize: '12px', marginTop: '10px' }}>
          Meta © 20222
        </Link>
      </div>
    </footer>
  );
}
