import Header from './Header';
import Footer from './Footer';

const Layout = ({ settings, children }) => {
  // console.log('settings', settings)
  return (
    <div>
      <Header />
      {children}
      <Footer settings={settings} />
    </div>
  );
}

export default Layout;
