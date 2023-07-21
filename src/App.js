import ResponsiveAppBar from './navbar';
import "./navbar/style.css"
import Banner1 from "./banner 1/index"
import "./banner 1/style.css"
import Banner2 from "./banner 2/index"
import "./banner 2/style.css"
import ExpandMore from "./banner 3/index"
import "./banner 3/style.css"
import BasicTextFields from "./banner 4/index"
import "./banner 4/style.css"

const App = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Banner1/>
      <Banner2/>
      <ExpandMore/>
      <BasicTextFields/>
    </div>
  )
}

export default App