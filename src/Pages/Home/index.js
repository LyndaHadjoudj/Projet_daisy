import Layout from "../../components/Layout";
import Slider from "../../components/Slider";
import Values from "../../components/Values";
import Services from "../../components/Services";
import Reviews from "../../components/Reviews";

import "./Home.css";

const Home = () => {
    return (
        <>
            <Layout>
                <Slider />
                <Values />
                <Services />
                <Reviews />
            </Layout>
        </>
    );
};

export default Home;
