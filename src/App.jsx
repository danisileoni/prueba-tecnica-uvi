import { Carousel } from "./components/Carousel"
import { Description, 
         Footer, 
         FormContact, 
         NavBar, 
         Plans, 
         Services } from "./components/index"

export const App = () => {
  return (
    <>
      <NavBar/>

      <Description/>

      <Services/>

      <Carousel/>

      <Plans/>

      <FormContact/>

      <Footer/>

    </>
  )
}