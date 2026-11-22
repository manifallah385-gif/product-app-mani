import { html } from "../../package/events/index.js"
import { useNavigation } from "../../package/router/router.js"
import { useState } from "../../package/state/index.js"

const AppHeader = () => {

    // let message = "ProductPageBtn"

    const [state, setState, getState] = useState("ProductPageBtn")
    const [landingTextState, setLandingTextState, getLandingTextState] = useState("LandingPageBtn")

    const [productState, setProductState, getProductState] = useState([{title: "title 1", description: "description"}])

    console.log("productState ==>", productState)

    // console.log("state ==>", getState())

    const navigation = useNavigation()

    const productPageBtnClickHandler = () => {
        // window.location.hash = "#/product-list"
        navigation("/product-list")

        // message = "Product Product Page Btn"

        setState("Product Product Page Btn")

        console.log("state ==>", state)


        console.log("state 2 ==>", getState())
    }

    const landingPageBtnClickHandler = () => {
        // window.location.hash = "#/"
        navigation("/")

        console.log("state ==>", state)

        setLandingTextState("Landing Landing Page Btn")
    }
    

    return (
        html`
            <div class="app-header">
                <button onclick=${() => { productPageBtnClickHandler() }} id="ProductPageBtn">${getState()}</button>
                <button onclick=${() => { landingPageBtnClickHandler() }} id="LandingPageBtn">${getLandingTextState()}</button>
            </div>
        `
    )
}

export default AppHeader