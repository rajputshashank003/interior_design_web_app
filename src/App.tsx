import Header from "./components/Header"
import Page1 from "./components/Page1"

const App = () => {
    return (
        <div className="bg-gradient-to-b relative from-[#B96539] to-[#9E4A1D] ">
            <Header/>
            <div className="">
                <Page1/>
            </div>
        </div>
    )
}

export default App