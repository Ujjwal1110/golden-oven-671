import Login from "../Login";
import {Routes, Route} from "react-router-dom";
import {  BrowserRouter } from "react-router-dom"
const Allroutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
        </BrowserRouter>
    )
}
export default Allroutes