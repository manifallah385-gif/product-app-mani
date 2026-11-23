import { html } from "../../package/events/index.js"
import { useNavigation } from "../../package/router/router.js"
import { useState } from "../../package/state/index.js"

const AppHeader = () => {

    const [state, setState, getState] = useState("Products")
    const [landingTextState, setLandingTextState, getLandingTextState] = useState("Add Product")


    const navigation = useNavigation()

    const productPageBtnClickHandler = () => {
        navigation("/")
    }

    const landingPageBtnClickHandler = () => {
        navigation("/create")
    }
    

    return (
        html`
            <div class="app-header">
                <div>Product List</div>            
                <div>
                    <button onclick=${() => { productPageBtnClickHandler() }} id="ProductPageBtn">${getState()}</button>
                    <button onclick=${() => { landingPageBtnClickHandler() }} id="LandingPageBtn">${getLandingTextState()}</button>
                </div>  
            </div>
        `
    )
}

export default AppHeader