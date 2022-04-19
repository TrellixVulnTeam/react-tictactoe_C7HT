import { useState } from "react"
import "./ToggleStyle.css";

function Toggle() {
    
    const [on, setOn] = useState(false);

    const handleToggle = () => {
        setOn(() => {
            return !on;
        });
    }
    return (
        <div>
            <div className={`toggle ${on? "active": ""}`} onClick={handleToggle}>
                <div className={`spinner ${on? "active": ""}`}></div>
            </div>
          
        </div>
    );
}
export default Toggle;