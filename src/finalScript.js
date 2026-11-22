import { createBrowserRouter, useNavigation } from "./package/router/router.js";
import { LandingPage, ProductListPage } from "./pages/index.js";


const navigation = useNavigation()
navigation("/")

createBrowserRouter([
    { path: "/", element: () => { return LandingPage({ text: "Landing Page..." }) } },
    { path: "/product-list", element: () => { return ProductListPage() } },
])