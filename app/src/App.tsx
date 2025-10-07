import { Link, useLoaderData, NavLink } from 'react-router';
import { Heart, Star, SlidersHorizontal } from 'lucide-react';
import { searchProducts, type Product } from './util';
import { useState } from 'react';

const App = () => {
  const { products } = useLoaderData()
  const [productList, setProductList] = useState(products)

  return (
    <>
      <header>
        <figure>
          <img src='/logo.png' alt='logo' />
          <figcaption>
            Order your favourite food!
          </figcaption>
        </figure>
        <div className='user-profile'>
          <Link to="/user">
            <img src='/images/users/alice.png' alt='User profile' />
          </Link>
        </div>
      </header>
      <main>
        <section className='search-bar'>
          <input
            type='text'
            placeholder='Search'
            onChange={(e) => setProductList(searchProducts(e.target.value))}
          />
          <button>
            <SlidersHorizontal stroke="#fff" />
          </button>
        </section>
        <section className='products-container'>
          <ul className='products'>
            {productList?.map((product: Product) => (
              <li key={product.id}>
                <article className='product-card'>
                  <Link to={`/products/${product.id}`}>
                    <figure>
                      <img src={product.image} alt={product.name} />
                      <figcaption>
                        <h2>{product.name}</h2>
                        <p>{product.summary}</p>
                      </figcaption>
                    </figure>
                    <p className='rating'>
                      <span className="rating-container">
                        <Star stroke="#FF9633" fill="#FF9633" />
                        {product.rating}
                      </span>
                      <Heart stroke="#000" />
                    </p>
                  </Link>
                </article>
              </li>
            )) ?? null}
          </ul>
        </section>
      </main>
      <footer className='footer'>
        <svg width="430" height="76" viewBox="0 0 430 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M161.5 21L179.59 20.6768C186.704 32.8337 199.898 41 215 41C230.625 41 244.208 32.2582 251.127 19.3994L273.5 19L285.5 0H437V90H-19V0H144.5L161.5 21Z" fill="#EF2A39" />
          <circle cx="144" cy="41" r="41" fill="#EF2A39" />
          <circle cx="286" cy="41" r="41" fill="#EF2A39" />
        </svg>
        <div className='footer-plus'>
          <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_0_1)">
              <circle cx="57" cy="52" r="36" fill="#EF2A39" />
            </g>
            <path d="M49 52H65" stroke="white" strokeWidth="5" strokeLinecap="round" />
            <path d="M57 60V44" stroke="white" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </div>

        <div className='footer-icons icons-left'>
          <NavLink to={"/"} className="footer-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_123)">
                <path d="M22.9747 8.69518L15.8887 1.60919C13.7393 -0.534728 10.2602 -0.534728 8.11071 1.60919L1.02472 8.69518C0.366223 9.35016 -0.00286988 10.2413 -0.00029176 11.1702V21.5481C0.00191136 22.9028 1.1001 24 2.45473 24.0011H21.5447C22.8993 24.0001 23.9975 22.9028 23.9997 21.5481V11.1702C24.0023 10.2413 23.6332 9.35016 22.9747 8.69518ZM20.9997 21.0012H15.9997V17.8191C15.9997 15.7105 14.2903 14.0011 12.1817 14.0011H11.8177C9.7091 14.0011 7.99971 15.7105 7.99971 17.8191V21.0012H2.9997V11.1702C3.00003 11.0376 3.05244 10.9104 3.14572 10.8162L10.2317 3.73019C11.2079 2.75373 12.7908 2.75355 13.7672 3.72972C13.7674 3.72986 13.7676 3.73004 13.7677 3.73019L20.8537 10.8162C20.9469 10.9104 20.9994 11.0376 20.9997 11.1702V21.0012H20.9997Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1_123">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </NavLink>
          <NavLink to={"/user"} className="footer-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_124)">
                <path d="M11.4524 14.0188C7.19063 14.404 3.94378 18.0051 4.00036 22.2838V22.5008C4.00036 23.3292 4.67194 24.0008 5.50036 24.0008C6.32878 24.0008 7.00036 23.3292 7.00036 22.5008V22.2238C6.95527 19.5967 8.89402 17.3564 11.5004 17.0238C14.2516 16.751 16.7031 18.7601 16.9759 21.5114C16.9921 21.674 17.0002 21.8373 17.0003 22.0008V22.5008C17.0003 23.3292 17.6719 24.0008 18.5003 24.0008C19.3288 24.0008 20.0003 23.3292 20.0003 22.5008V22.0008C19.9955 17.5775 16.4057 13.9957 11.9825 14.0006C11.8057 14.0008 11.6288 14.0069 11.4524 14.0188Z" fill="white" />
                <path d="M12.0004 12C15.3141 12 18.0004 9.31369 18.0004 6C18.0004 2.68631 15.3141 0 12.0004 0C8.68674 0 6.00043 2.68631 6.00043 6C6.00371 9.31233 8.6881 11.9967 12.0004 12ZM12.0004 3C13.6573 3 15.0004 4.34316 15.0004 6C15.0004 7.65684 13.6573 9 12.0004 9C10.3436 9 9.00043 7.65684 9.00043 6C9.00043 4.34316 10.3436 3 12.0004 3Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1_124">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </NavLink>
        </div>

        <div className='footer-icons icons-right'>
          <a href='https://chatgpt.com/' className="footer-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_125)">
                <path d="M23.9998 11.2459C23.8548 8.90625 23.0283 6.66019 21.6223 4.78457C20.2163 2.90894 18.2922 1.48573 16.0871 0.690381C13.8821 -0.104971 11.4924 -0.237704 9.21287 0.308546C6.93329 0.854796 4.86338 2.05615 3.25828 3.76452C1.65318 5.47289 0.583065 7.6136 0.179837 9.92278C-0.223391 12.2319 0.0578963 14.6086 0.989026 16.7599C1.92016 18.9111 3.46043 20.7429 5.41997 22.0294C7.37952 23.3159 9.67268 24.0009 12.0168 23.9999H18.4998C19.9579 23.998 21.3558 23.418 22.3868 22.3869C23.4179 21.3559 23.9979 19.958 23.9998 18.4999V11.3399V11.2459ZM20.9998 18.4999C20.9998 19.1629 20.7364 19.7988 20.2676 20.2676C19.7987 20.7365 19.1628 20.9999 18.4998 20.9999H12.0168C10.7463 20.9991 9.49016 20.7306 8.33038 20.2118C7.1706 19.693 6.13319 18.9355 5.2858 17.9889C4.43465 17.0429 3.7956 15.9259 3.41151 14.7127C3.02742 13.4996 2.90716 12.2183 3.0588 10.9549C3.29806 8.96305 4.19322 7.10745 5.60324 5.68041C7.01326 4.25337 8.85799 3.33602 10.8468 3.07288C11.2359 3.02432 11.6277 2.99994 12.0198 2.99988C14.1159 2.99388 16.1474 3.7252 17.7588 5.06588C18.6982 5.84619 19.4697 6.80878 20.0267 7.89553C20.5837 8.98228 20.9148 10.1706 20.9998 11.3889V18.4999Z" fill="white" />
                <path d="M9.50012 11.0002H12.5001C12.8979 11.0002 13.2795 10.8421 13.5608 10.5608C13.8421 10.2795 14.0001 9.89798 14.0001 9.50015C14.0001 9.10233 13.8421 8.7208 13.5608 8.43949C13.2795 8.15819 12.8979 8.00015 12.5001 8.00015H9.50012C9.1023 8.00015 8.72077 8.15819 8.43946 8.43949C8.15816 8.7208 8.00012 9.10233 8.00012 9.50015C8.00012 9.89798 8.15816 10.2795 8.43946 10.5608C8.72077 10.8421 9.1023 11.0002 9.50012 11.0002Z" fill="white" />
                <path d="M16.5001 12.9998H9.50012C9.1023 12.9998 8.72077 13.1579 8.43946 13.4392C8.15816 13.7205 8.00012 14.102 8.00012 14.4998C8.00012 14.8977 8.15816 15.2792 8.43946 15.5605C8.72077 15.8418 9.1023 15.9998 9.50012 15.9998H16.5001C16.8979 15.9998 17.2795 15.8418 17.5608 15.5605C17.8421 15.2792 18.0001 14.8977 18.0001 14.4998C18.0001 14.102 17.8421 13.7205 17.5608 13.4392C17.2795 13.1579 16.8979 12.9998 16.5001 12.9998Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1_125">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <NavLink to={"/liked"} className="footer-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_122)">
                <path d="M17.5 1.91653C16.3739 1.93405 15.2724 2.24839 14.3067 2.82781C13.341 3.40722 12.5453 4.2312 12 5.21653C11.4546 4.2312 10.6589 3.40722 9.6932 2.82781C8.7275 2.24839 7.62601 1.93405 6.49996 1.91653C4.7049 1.99453 3.01366 2.77979 1.79574 4.10077C0.577818 5.42175 -0.0677922 7.17106 -4.17093e-05 8.96653C-4.17093e-05 13.5135 4.78596 18.4795 8.79996 21.8465C9.69618 22.5997 10.8293 23.0126 12 23.0126C13.1706 23.0126 14.3037 22.5997 15.2 21.8465C19.214 18.4795 24 13.5135 24 8.96653C24.0677 7.17106 23.4221 5.42175 22.2042 4.10077C20.9863 2.77979 19.295 1.99453 17.5 1.91653Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_1_122">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </NavLink>
        </div>

      </footer>
    </>
  )
}

export default App
