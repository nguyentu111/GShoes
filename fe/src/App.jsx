import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ShoeList } from './components/ShoeList'
import { Cart } from './components/Cart'

function App() {

  return (
    <div className="flex md:flex-row  py-5 md:py-12 md:py7 main-content justify-between gap-4 md:gap-10">
     <ShoeList/>
     <Cart/>
    </div>
  )
}

export default App
