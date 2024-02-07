import { Navbar } from "./components/layout/Navbar"
import { ItemListContainer } from "./components/pages/ItemListContainer"
import { ProductCard } from "./components/common/ProductCard"

const App = () => {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos"/>
      <ProductCard />
    </div>
  )
}

export default App
