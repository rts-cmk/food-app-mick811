import { Link, useLoaderData } from 'react-router';
import { Heart, Star, SlidersHorizontal } from 'lucide-react';
import { type Product } from './util';

const App = () => {
  const products = useLoaderData() as Product[];

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
      <section className='search-bar'>
        <input type='text' placeholder='Search' />
        <button>
          <SlidersHorizontal stroke="#fff" />
        </button>
      </section>
      <ul className='products'>
        {products.map((product) => (
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
                  <Heart stroke="#EF2A39" />
                </p>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
