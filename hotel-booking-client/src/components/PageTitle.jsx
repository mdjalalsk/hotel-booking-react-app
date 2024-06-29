
import {Helmet} from "react-helmet";
import logo from '../../public/favicon/icons8-home-48.png'

// eslint-disable-next-line react/prop-types
const PageTitle = ({title}) => {
    return (
        <div>
            <Helmet>
                <title>{title} | Hotel Booking</title>
                <link rel="icon" type="image/ico" href={logo} />

                </Helmet>
        </div>
    );
};

export default PageTitle;