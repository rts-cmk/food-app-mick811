import { Link, useLoaderData } from 'react-router';
import { Heart, Star } from 'lucide-react';
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
      </header>
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
                  <div className="rating-container">
                    <Star stroke="#FF9633" fill="#FF9633" />
                    {product.rating}
                  </div>
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
