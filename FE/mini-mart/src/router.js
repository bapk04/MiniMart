import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import ProfilePage from "./pages/users/profilePage";
import { ROUTER} from "./utils/router"
import MasterLayout from "./pages/users/theme/masterLayout";
import Balinewbie from "pages/users/balinewbie";
import Balivalorant from "pages/users/balivalorant";
import Balicsgo from "pages/users/balicsgo";
import Mockhoa from "pages/users/mockhoa";
import Baoduong from "pages/users/baoduong";
import Sticker from "pages/users/sticker";


const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTER.USER.HOME,
            component: <HomePage /> 
        },

        {
            path: ROUTER.USER.PRODUCTS.MAIN,
            component: <ProfilePage /> 
        },
        {
            path: ROUTER.USER.PRODUCTS.BALISONG_NEW_BIE,
            component: <Balinewbie /> 
        },
        {
            path: ROUTER.USER.PRODUCTS.BALISONG_VALORANT,
            component: <Balivalorant /> 
        },
        {
            path: ROUTER.USER.PRODUCTS.BALISONG_CS_GO,
            component: <Balicsgo /> 
        },
        {
            path: ROUTER.USER.PRODUCTS.MOC_KHOA,
            component: <Mockhoa /> 
        },
        {
            path: ROUTER.USER.PRODUCTS.BAO_DUONG,
            component: <Baoduong /> 
        },
        {
            path: ROUTER.USER.PRODUCTS.STICKER,
            component: <Sticker /> 
        },
    ];

    return (
    <MasterLayout>
        <Routes>
            {
                userRouter.map((items, key) => (
                <Route key ={key} path={items.path} element={items.component} />
            ))}
        </Routes> 
    </MasterLayout>
        ); 
};

const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;