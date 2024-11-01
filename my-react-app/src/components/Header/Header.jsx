import HeaderHomeSvg from "../Main/btn/HeaderHomeSvg";
import StickSvg from "./StickSvg";
import './Header.css'

export default function Header(){
    return(
        <haeder className='header-wp'>
            <nav className="header-nav">
                <HeaderHomeSvg/>
                <StickSvg/>
                <p className="header-text">PROJECT</p>
            </nav>
        </haeder>
    )
}