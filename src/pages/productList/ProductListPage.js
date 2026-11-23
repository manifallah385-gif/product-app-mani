import { AppHeader } from "../../components/index.js"
import { html } from "../../package/events/index.js"
import { useState } from "../../package/state/index.js"
import { initialProducts } from "../../data/product.js"

const ProductListPage = () => {
    const [products, setProducts] = useState(initialProducts)

    return html`
        <div class="product-list-page">
            ${AppHeader()}
            ${products.map((products) =>`            
            <div class="product-card">
            <h3>${products.title}</h3>
            <p>${products.description}</p>
            <span>${products.date}</span>
            </div>
            `)}
        </div>
    `
}

export default ProductListPage