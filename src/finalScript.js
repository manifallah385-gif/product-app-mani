import { createBrowserRouter, useNavigation } from "./package/router/router.js";
import { LandingPage, ProductListPage, CreateProductPage } from "./pages/index.js";


const navigation = useNavigation()
navigation("/")

createBrowserRouter([
    { path: "/", element: () => { return ProductListPage() } },
    { path: "/create", element: () => { return CreateProductPage() } },    
])