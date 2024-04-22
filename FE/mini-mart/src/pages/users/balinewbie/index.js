import {memo} from "react"
import newbie from "assets/users/image/profile/newbie.jpg";
const balinewbie = () => {
    return <div className="container container__newbie">
    <img src={newbie} alt="banner" />
</div>
};

export default memo(balinewbie);