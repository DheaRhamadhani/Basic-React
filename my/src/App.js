/** import semua pages yg kita tampilkan */
import Balok from "./pages/Balok"
import Book from "./pages/Book"
import Nilai from "./pages/Nilai"
import Student from "./pages/Student"
import Tahu from "./pages/Tahu"

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar"

export default function App(){
  return(
    <BrowserRouter basename="/my-react">
    {/** BrowserRoter adalah element yg digunakan utk mengatur
     * tampilan pada halaman web berdasarkan path atau URL yg ditentukan
     * oleh user
     */}
     <Navbar/>
    <Routes>
      {/** Routes -> grouping path-path atau URL yg didefinisikan */}
      <Route path="/balok" element={<Balok/>}/>
      <Route path="/book" element={<Book/>}/>
      <Route path="/nilai" element={<Nilai/>}/>
      <Route path="/student" element={<Student/>}/>
      <Route path="/tahu" element={<Tahu/>}/>
    </Routes>
    </BrowserRouter>
  )
}