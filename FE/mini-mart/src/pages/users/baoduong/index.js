import {memo} from "react"
import baoduo from "assets/users/image/profile/baoduong.png";

const baoduong = () => {
    return <div className="container">
    <img src={baoduo} alt="banner" />
</div>;
};

export default memo(baoduong);