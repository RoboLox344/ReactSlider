import BigRound from "./decorComponents/BirRound";
import OutherDecor from "./decorComponents/OuterDexorWp";
import RoundFerst from "./decorComponents/RoundFerst";
import RoundTrhee from "./decorComponents/RoundThree";
import ThornFerst from "./decorComponents/ThornFerst";

export default function DecorWp(){
    return(
        <>  
            <RoundTrhee/>
            <BigRound/>
            <RoundFerst/>
            <ThornFerst/>
            <OutherDecor/>
        </>
    )
}