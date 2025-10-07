import { useLoaderData, useNavigate } from "react-router";
import type { Product } from "./util";
import { Star, Minus, Plus, ArrowLeft, Search } from "lucide-react";
import { useState } from "react";

export default function ProductDetail() {
    const product = useLoaderData() as Product;
    const navigate = useNavigate();
    const [portionCount, setPortionCount] = useState(1);

    const handleIncrement = () => {
        setPortionCount(prev => prev + 1);
    };

    const handleDecrement = () => {
        setPortionCount(prev => Math.max(1, prev - 1));
    };

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <main className="product-detail-container">
            <header className="product-detail-header">
                <button onClick={handleBack} aria-label="Go back">
                    <ArrowLeft size={24} />
                </button>
                <button aria-label="Search">
                    <Search size={24} />
                </button>
            </header>

            <figure className="product-detail-image">
                <img src={product.image} alt={product.name} />
                <figcaption>
                    <h2>{product.name} {product.summary}</h2>
                </figcaption>
                <p className='rating'>
                    <div className="rating-container">
                        <Star stroke="#FF9633" fill="#FF9633" />
                        {product.rating}
                    </div>
                </p>
            </figure>

            <p className='description'>
                {product.description}
            </p>

            <section className="spice">
                <div className="spice-progress-container">
                    <h3>Spicy</h3>
                    <progress
                        className="spice-progress-bar"
                        value={product.spice}
                        max={10}
                    >
                    </progress>
                    <div className="spice-labels">
                        <span data-label="Mild">Mild</span>
                        <span data-label="Hot">Hot</span>
                    </div>
                </div>
                <div className="portion-counter">
                    <h3>Portion</h3>
                    <div className="portion-controls">
                        <button
                            className="portion-btn"
                            onClick={handleDecrement}
                            aria-label="Decrease portion"
                        >
                            <Minus size={24} strokeWidth={3} />
                        </button>
                        <span className="portion-count">{portionCount}</span>
                        <button
                            className="portion-btn"
                            onClick={handleIncrement}
                            aria-label="Increase portion"
                        >
                            <Plus size={24} strokeWidth={3} />
                        </button>
                    </div>
                </div>
            </section>

            <div className="action-buttons">
                <button className="price-button">
                    ${(product.price * portionCount).toFixed(2)}
                </button>
                <button className="order-button">
                    ORDER NOW
                </button>
            </div>
        </main>
    )
}