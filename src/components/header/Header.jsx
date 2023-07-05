import './Header.css';

function Header() {

  return (
    <>
      <div className='header_container'>
        <div className='titulo_container'>
        <h1>ICN</h1>
        </div>
        <div className='options_container'>
          <ul className='options-flex_container'>
            <li>sobre nosotros</li>
            <li>contacto</li>
            <li>inicio</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;




