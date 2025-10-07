import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { X, Star } from 'lucide-react';
import { searchProducts, type Product } from './util';

interface SearchOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<Product[]>([]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleSearch = (searchQuery: string) => {
        setQuery(searchQuery);
        setResults(searchProducts(searchQuery));
    };

    const handleClose = () => {
        setQuery('');
        setResults([]);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="search-overlay">
            <div className="search-overlay-content">
                <div className="search-overlay-header">
                    <h2>Search Products</h2>
                    <button
                        onClick={handleClose}
                        className="search-overlay-close"
                        aria-label="Close search"
                    >
                        <X size={24} />
                    </button>
                </div>

                <div className="search-overlay-input-container">
                    <input
                        type="text"
                        placeholder="Search for burgers..."
                        value={query}
                        onChange={(e) => handleSearch(e.target.value)}
                        autoFocus
                        className="search-overlay-input"
                    />
                </div>

                <div className="search-overlay-results">
                    {query && results.length === 0 ? (
                        <p className="search-overlay-no-results">No products found</p>
                    ) : (
                        <ul className="search-results-list">
                            {results.map((product) => (
                                <li key={product.id}>
                                    <Link
                                        to={`/products/${product.id}`}
                                        onClick={handleClose}
                                        className="search-result-item"
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="search-result-image"
                                        />
                                        <div className="search-result-info">
                                            <h3>{product.name}</h3>
                                            <p>{product.summary}</p>
                                            <div className="search-result-meta">
                                                <span className="search-result-rating">
                                                    <Star size={16} stroke="#FF9633" fill="#FF9633" />
                                                    {product.rating}
                                                </span>
                                                <span className="search-result-price">${product.price.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

