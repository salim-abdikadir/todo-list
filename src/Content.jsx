import Home from "./contentPages/Home"
import Services from "./contentPages/services";



export default function Content({activePage}){


    switch (activePage) {
        case "home":
            
            return <Home/>;
        case "services":
            
            return <Services/>;
    
        default:
            return (<></>);
    }
}