import  DarkModeToggle  from '../components/dark-mode-toggle';
import globalStyles from '../styles/global.js';

import  Link  from 'next/link'

const Layout = props => {
    const { children } = props;
    return (
      <div className="main-layout">
      <style jsx global>{globalStyles}</style>
        <div className="navbar">
          <h1><Link href="/" as="/index" ><a><img src={'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg'} /></a></Link> </h1>
          <DarkModeToggle />
        </div>
        <div className="content">{children}</div>
      </div>
    );
  };

export default Layout;