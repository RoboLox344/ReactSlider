import { useState } from "react"


export default function ButtonNavWp({handleNext, handleBack}){

    const [bool, setBoll] = useState(true)
    function ative(){
        setBoll(!bool)
    }
    function onClickF(){
        handleBack()
        ative()
    }
    function onClickS(){
        handleNext()
        ative()
    }
    return(
        <div className="flex">
            <div className="button-nav-wp">
                <button className="btn-left"  onClick={onClickF}>
                    <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6192 0.389472C11.1115 -0.129824 10.2883 -0.129824 9.78063 0.389472L1.14236 9.22549C-0.380418 10.7831 -0.380808 13.3082 1.14132 14.8664L9.6832 23.6105C10.1909 24.1298 11.0141 24.1298 11.5218 23.6105C12.0295 23.0912 12.0295 22.2492 11.5218 21.7298L2.97768 12.9902C2.46987 12.4708 2.46987 11.6289 2.97768 11.1096L11.6192 2.27024C12.1269 1.75082 12.1269 0.908902 11.6192 0.389472Z" fill="#0F0F0F"/>
                    </svg>
                    {bool ?  <div className="roun-state"></div>: <div className="roun-state passive"></div>}
                </button>
                <button className="btn-rigth" onClick={onClickS}>
                    {bool ? <div className="roun-state passive"></div> : <div className="roun-state"></div>}
                    <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.380779 23.6105C0.888497 24.1298 1.71165 24.1298 2.21937 23.6105L10.8576 14.7745C12.3804 13.2169 12.3808 10.6918 10.8587 9.13362L2.3168 0.389502C1.80909 -0.129834 0.985925 -0.129834 0.47822 0.389502C-0.0294854 0.908825 -0.0294854 1.75083 0.47822 2.27015L9.02232 11.0098C9.53013 11.5292 9.53013 12.3711 9.02232 12.8904L0.380779 21.7298C-0.126926 22.2492 -0.126926 23.0911 0.380779 23.6105Z" fill="#0F0F0F"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}