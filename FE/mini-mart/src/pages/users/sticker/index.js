import {memo} from "react"
import stic from "assets/users/image/profile/sticker.jpg";

const sticker = () => {
    return <div className="container">
    <img src={stic} alt="banner" />
</div>;
};

export default memo(sticker);