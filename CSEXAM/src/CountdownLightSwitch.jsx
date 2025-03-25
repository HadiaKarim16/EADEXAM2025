import React,{useState, useEffect} from "react";
// Functional Components
function LightSwitcher(){
    const [isDarkMode, setDarkMode] = useState(false);
    // Implementing 30 seconds Count down  timer 
    const [timeLeft, setTimeLeft] = useState(30);

    const toggleTheme= ()=>{
        setDarkMode(!isDarkMode);
    }

    // Countdown timer effect
        useEffect(() => {
             if (timeLeft > 0) {
                const timer = setInterval(() => {
                     setTimeLeft((prevTime) => prevTime - 1);
                }, 1000);
            return () => {
                clearInterval(timer)
            };
        }
  }, [timeLeft]);


    return(
        
        <div className={`container ${isDarkMode ? "dark" : "light"}`}>
            <h1>Countdown Light Switch</h1>
        
        <button onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
        </button>
        <h2>Time Left: {timeLeft} seconds</h2>
        <div className="progress-bar">
        <div className="progress" style={{ width: `${(timeLeft / 30) * 100}%` }}></div>
        </div>
        
        
        </div>



    );
}
export default LightSwitcher;