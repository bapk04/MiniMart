import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/users/homePage";
import ProfilePage from "./pages/users/profilePage";
import { ROUTER} from "./utils/router"
import MasterLayout from "./pages/users/theme/masterLayout";


const renderUserRouter = () => {
    const userRouter = [
        {
            path: ROUTER.USER.HOME,
            component: <HomePage /> 
        },

        {
            path: ROUTER.USER.PROFILE,
            component: <ProfilePage /> 
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