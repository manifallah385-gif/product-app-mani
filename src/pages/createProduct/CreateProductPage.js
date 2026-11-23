import {AppHeader} from "../../components/index.js"
import {html} from "../../package/events/index.js"
import {useState} from "../../package/state/index.js"
import {useNavigation} from "../../package/router/router.js"
import {extractFormData} from "../../package/extractFormData.js"
import {idGenerator} from "../../package/idGenerator.js"
import { initialProducts } from "../../data/product.js"


const CreateProductPage = () => {
    const [products, setProducts] = useState(initialProducts)
    const navigation = useNavigation()

    const submitHandler = (e) =>{
        const newData = extractFormData(e.target, 1)
        const newProduct = {id: idGenerator(products), ...newData}

        setProducts([...products, newProduct])
        navigation("/")
    }
    
    return html`
        <div>
            ${AppHeader()}
            <form onsubmit=${submitHandler}>
            <input type="text" name="title" placeholder="Title">
            <input type="text" name="description" placeholder="Description">
            <input type="text" name="date" placeholder="YYYY/MM/DD">
            <button type="submit">Add Product</button>
            </form>
        </div>
    `
}

export default CreateProductPage