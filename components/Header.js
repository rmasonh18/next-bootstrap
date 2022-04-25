import Image from 'next/image';

/* eslint-disable @next/next/no-html-link-for-pages */
const Header = () => {
  return (
    <header className='p-3 bg-dark text-white'>
      <div className='container'>
        <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>
          <a
            href='https://jacquelinetaylorandfriends.org'
            className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none '
          >
            <Image 
              src="/images/white-logo.png"
              width={150}
              height={75}
              alt="Jacqueline Taylor & Friends"
            />
          </a>

          <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <li>
              {/* <a href='/' className='nav-link px-2 text-secondary'>
                Home
              </a> */}
            </li>
            <li>
              <a href='/about' className='nav-link px-2 text-white'>
                About
              </a>
            </li>
            <li>
              <a href='/features' className='nav-link px-2 text-white'>
                Features
              </a>
            </li>
            <li>
              <a href='/login' className='nav-link px-2 text-white'>
                Login
              </a>
            </li>
            <li>
              <a href='/signup' className='nav-link px-2 text-white'>
                Signup
              </a>
            </li>
          </ul>

         {/*  TODO: USE AT LATER DATE AS NEEDED
         <form className='col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3'>
            <input
              type='search'
              className='form-control form-control-dark'
              placeholder='Search...'
              aria-label='Search'
            />
          </form>

          <div className='text-end'>
            <button type='button' className='btn btn-outline-light me-2'>
              Login
            </button>
            <button type='button' className='btn btn-warning'>
              Sign-up
            </button>
          </div> */}
        </div>
      </div>
    </header>
  );
};
export default Header;
