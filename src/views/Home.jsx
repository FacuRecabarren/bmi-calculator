import Header from "../components/Header/Header";
import MainSectionOne from "../components/MainSectionOne/MainSectionOne";
import MainSectionThree from "../components/MainSectionThree/MainSectionThree";
import MainSectionTwo from "../components/MainSectionTwo/MainSectionTwo";
import NavPage from "../components/NavPage/NavPage";

const Home = () =>{

    return(

        <>
            <NavPage/>
            <Header/>
            <MainSectionOne/>
            <MainSectionTwo/>
            <MainSectionThree/>
        </>
    )
    

} 

export default Home;