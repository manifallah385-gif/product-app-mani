import { AppHeader } from "../../components/index.js"
import { html } from "../../package/events/index.js"
import { useState } from "../../package/state/index.js"
import { initialProducts } from "../../data/product.js"

const ProductListPage = () => {
    const [products, setProducts] = useState(initialProducts)

    return html`
        ${AppHeader()}    
        <div class="product-list-page">
            ${products.map((products) =>`            
            <div class="product-card">
            <h3>${products.title}</h3>
            <p>${products.description}</p>
            <span>${products.date}</span>
            <span>Edit</span>   
            <span>Delete</span>                      
            </div>
            `)}
        </div>
    `
}

export default ProductListPage