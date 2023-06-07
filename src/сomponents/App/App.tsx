import { Main } from "../Main/Main";
import { Nav } from "../Nav/Nav";
import { Route, Routes } from "react-router-dom";
import { Settings } from '../Settings/Settings';
import { StandardPage } from "../../common/componentsCommon/StandardPage/StandardPage";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/store";



function App() {


    const standardPages = useSelector((state: RootStateType) => state.pages.pages)


    const mappedStandardPages = standardPages.map(p => {
        return <Route
            key={p.pageID}
            path={`/${p.pageURL}`}
            element={<StandardPage pageID={p.pageID} pageName={p.pageName} />} />
    })



    return (
        <div>
                <Nav />


            <Routes>
                <Route path={'/'} element={<Main />} />
                <Route path={'/settings/*'} element={<Settings />} />

                {mappedStandardPages}

            </Routes>
         

        </div>
    );
}

export default App;