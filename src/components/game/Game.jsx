import { useState } from 'react';

// const wordList = [
//     "Bright", "Window", "Travel", "Yellow", "Circle", "Mother", "Father", "Person", "School", "Spring",
//     "Silver", "Market", "Middle", "Button", "Winter", "Middle", "Doctor", "Camera", "Coffee", "Friend",
//     "Cherry", "Winter", "Mother", "Player", "Bottom", "Branch", "Banana", "Island", "Planet", "Button",
//     "Circle", "Engine", "Laptop", "Rocket", "Forest", "Spirit", "Artist", "Basket", "Master", "Dinner",
//     "Export", "Fabric", "Guitar", "Hammer", "Jungle", "Lawyer", "Market", "Melody", "Pepper", "Pilot",
//     "Record", "Regret", "Rocket", "Shadow", "Symbol", "Winter", "Circle", "Button", "Credit", "Danger",
//     "Device", "Flower", "Friend", "Laptop", "Leader", "Orange", "Planet", "Rocket", "Silver", "Spirit",
//     "Ticket", "Branch", "Camera", "Candle", "Circle", "Engine", "Export", "Father", "Hammer", "Import",
//     "Jungle", "Middle", "Mother", "Pepper", "Planet", "Record", "Regret", "Rocket", "Shadow", "Symbol",
//     "Winter", "Circle", "Button", "Credit", "Danger", "Device", "Flower", "Friend", "Laptop", "Leader",
//     "Orange", "Planet", "Rocket", "Silver", "Spirit", "Ticket", "Branch", "Camera", "Candle", "Circle",
//     "Engine", "Export", "Father", "Hammer", "Import", "Jungle", "Middle", "Mother", "Pepper", "Planet",
//     "Record", "Regret", "Rocket", "Shadow", "Symbol", "Winter", "Circle", "Button", "Credit", "Danger",
//     "Device", "Flower", "Friend", "Laptop", "Leader", "Orange", "Planet", "Rocket", "Silver", "Spirit",
//     "Ticket", "Branch", "Camera", "Candle", "Circle", "Engine", "Export", "Father", "Hammer", "Import",
//     "Jungle", "Middle", "Mother", "Pepper", "Planet", "Record", "Regret", "Rocket", "Shadow", "Symbol",
//     "Winter", "Circle", "Button", "Credit", "Danger", "Device", "Flower", "Friend", "Laptop", "Leader",
//     "Orange", "Planet", "Rocket", "Silver", "Spirit", "Ticket", "Branch", "Camera", "Candle", "Circle",
//     "Engine", "Export", "Father", "Hammer", "Import", "Jungle", "Middle", "Mother", "Pepper", "Planet",
//     "Record", "Regret", "Rocket", "Shadow", "Symbol", "Winter", "Circle", "Button", "Credit", "Danger",
//     "Device", "Flower", "Friend", "Laptop", "Leader", "Orange", "Planet", "Rocket", "Silver", "Spirit",
//     "Ticket", "Branch", "Camera", "Candle", "Circle", "Engine", "Export", "Father", "Hammer", "Import",
//     "Jungle", "Middle", "Mother", "Pepper", "Planet", "Record", "Regret", "Rocket", "Shadow", "Symbol",
//     "Winter", "Circle", "Button", "Credit", "Danger", "Device", "Flower", "Friend", "Laptop", "Leader",
//     "Orange", "Planet", "Rocket", "Silver", "Spirit", "Ticket", "Branch", "Camera", "Candle", "Circle",
//     "Engine", "Export", "Father", "Hammer", "Import", "Jungle", "Middle", "Mother", "Pepper", "Planet",
//     "Record", "Regret", "Rocket", "Shadow", "Symbol", "Winter", "Circle", "Button", "Credit", "Danger",
//     "Device", "Flower", "Friend", "Laptop", "Leader", "Orange", "Planet", "Rocket", "Silver", "Spirit",
//     "Ticket", "Branch", "Camera", "Candle", "Circle", "Engine", "Export", "Father", "Hammer", "Import",
//     "Jungle", "Middle", "Mother", "Pepper", "Planet", "Record", "Regret", "Rocket", "Shadow", "Symbol",
//     "Winter", "Circle", "Button", "Credit", "Danger", "Device", "Flower", "Friend", "Laptop", "Leader",
//     "Orange", "Planet", "Rocket", "Silver", "Spirit", "Ticket", "Branch", "Camera", "Candle", "Circle",
//     "Engine", "Export", "Father", "Hammer", "Import", "Jungle", "Middle", "Mother", "Pepper", "Planet",
//     "Record", "Regret", "Rocket", "Shadow", "Symbol", "Winter", "Circle", "Button", "Credit", "Danger"
// ];
// const referenceWord = wordList[Math.floor(Math.random() * wordList.length)];
// console.log("Randomly selected reference word:", referenceWord);
var k = 0;
const wordList = [
    "Bright", "Window", "Travel", "Yellow", "Circle", "Mother", "Father", "Person", "School", "Spring",
    "Silver", "Market", "Middle", "Button", "Winter", "Middle", "Doctor", "Camera", "Coffee", "Friend",
    "Cherry", "Winter", "Mother", "Player", "Bottom", "Branch", "Banana", "Island", "Planet", "Button",
    "Circle", "Engine", "Laptop", "Rocket", "Forest", "Spirit", "Artist", "Basket", "Master", "Dinner",
    "Export", "Fabric", "Guitar", "Hammer", "Jungle", "Lawyer", "Market", "Melody", "Pepper", "Pilot",
    "Record", "Regret", "Rocket", "Shadow", "Symbol", "Winter", "Circle", "Button", "Credit", "Danger",
    "Device", "Flower", "Friend", "Laptop", "Leader", "Orange", "Planet", "Rocket", "Silver", "Spirit",
    "Ticket", "Branch", "Camera", "Candle", "Circle", "Engine", "Export", "Father", "Hammer", "Import",
    "Jungle", "Middle", "Mother", "Pepper", "Planet", "Record", "Regret", "Rocket", "Shadow", "Symbol",
    "Winter", "Circle", "Button", "Credit", "Danger", "Device", "Flower", "Friend", "Laptop", "Leader",
    "Orange", "Planet", "Rocket", "Silver", "Spirit", "Ticket", "Branch", "Camera", "Candle", "Circle",
    "Engine", "Export", "Father", "Hammer", "Import", "Jungle", "Middle", "Mother", "Pepper", "Planet",
    "Record", "Regret", "Rocket", "Shadow", "Symbol", "Winter", "Circle", "Button", "Credit", "Danger",
    "Device", "Flower", "Friend", "Laptop", "Leader", "Orange", "Planet", "Rocket", "Silver", "Spirit",
    "Ticket", "Branch", "Camera", "Candle", "Circle", "Engine", "Export", "Father", "Hammer", "Import",
    "Jungle", "Middle", "Mother", "Pepper", "Planet", "Record", "Regret", "Rocket", "Shadow", "Symbol",
    "Winter", "Circle", "Button", "Credit", "Danger", "Device", "Flower", "Friend", "Laptop", "Leader",
    "Orange", "Planet", "Rocket", "Silver", "Spirit", "Ticket", "Branch", "Camera", "Candle", "Circle",
    "Engine", "Export", "Father", "Hammer", "Import", "Jungle", "Middle", "Mother", "Pepper", "Planet",
    "Record", "Regret", "Rocket", "Shadow", "Symbol", "Winter", "Circle", "Button", "Credit", "Danger",
    "Device", "Flower", "Friend", "Laptop", "Leader", "Orange", "Planet", "Rocket", "Silver", "Spirit",
    "Ticket", "Branch", "Camera", "Candle", "Circle", "Engine", "Export", "Father", "Hammer", "Import",
    "Jungle", "Middle", "Mother", "Pepper", "Planet", "Record", "Regret", "Rocket", "Shadow", "Symbol",
    "Winter", "Circle", "Button", "Credit", "Danger", "Device", "Flower", "Friend", "Laptop", "Leader",
    "Orange", "Planet", "Rocket", "Silver", "Spirit", "Ticket", "Branch", "Camera", "Candle", "Circle",
    "Engine", "Export", "Father", "Hammer", "Import", "Jungle", "Middle", "Mother", "Pepper", "Planet",
    "Record", "Regret", "Rocket", "Shadow", "Symbol", "Winter", "Circle", "Button", "Credit", "Danger",
    "Device", "Flower", "Friend", "Laptop", "Leader", "Orange", "Planet", "Rocket", "Silver", "Spirit",
    "Ticket", "Branch", "Camera", "Candle", "Circle", "Engine", "Export", "Father", "Hammer", "Import",
    "Jungle", "Middle", "Mother", "Pepper", "Planet", "Record", "Regret", "Rocket", "Shadow", "Symbol",
    "Winter", "Circle", "Button", "Credit", "Danger", "Device", "Flower", "Friend", "Laptop", "Leader",
    "Orange", "Planet", "Rocket", "Silver", "Spirit", "Ticket", "Branch", "Camera", "Candle", "Circle",
    "Engine", "Export", "Father", "Hammer", "Import", "Jungle", "Middle", "Mother", "Pepper", "Planet",
    "Record", "Regret", "Rocket", "Shadow", "Symbol", "Winter", "Circle", "Button", "Credit", "Danger"
];
var referenceWord = wordList[Math.floor(Math.random() * wordList.length)];
// console.log("Randomly selected reference word:", referenceWord);

var newBgColorsKeys = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', ''
];
var score = 0;
function App() {




    const [inputValues1, setInputValues1] = useState(['.', '', '', '', '', '']);
    const [inputValues2, setInputValues2] = useState(['.', '', '', '', '', '']);
    const [inputValues3, setInputValues3] = useState(['.', '', '', '', '', '']);
    const [inputValues4, setInputValues4] = useState(['.', '', '', '', '', '']);
    const [inputValues5, setInputValues5] = useState(['.', '', '', '', '', '']);
    const [bgColors1, setBgColors1] = useState(['', '', '', '', '', '']);
    const [bgColors2, setBgColors2] = useState(['', '', '', '', '', '']);
    const [bgColors3, setBgColors3] = useState(['', '', '', '', '', '']);
    const [bgColors4, setBgColors4] = useState(['', '', '', '', '', '']);
    const [bgColors5, setBgColors5] = useState(['', '', '', '', '', '']);
    const [bgColorskeys, setBgColorskeys] = useState(
        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',
            '', '', '', '', '', '', '', ''
        ]
    );
    const [hideInput, setHideInput] = useState("hidden");
    const [hidePopup, setHidePopup] = useState("hidden");
    const [hideDot1, setHideDot1] = useState("gray");
    const [hideDot2, setHideDot2] = useState("gray");
    const [hideDot3, setHideDot3] = useState("gray");
    const [hideDot4, setHideDot4] = useState("gray");
    const [hideDot5, setHideDot5] = useState("gray");
    const [greeting, setGreeting] = useState("congratulations!!");
    const [time, setTime] = useState(0);
    const [timeMinute, setTimeMinute] = useState(0);


    const [inputValue, setInputValue] = useState('');
    const str = referenceWord;
    const arr2 = str.split("");




    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleBackspace = () => {
        setInputValue(inputValue.slice(0, -1));
    };

    const handleSubmit = () => {
        const symbolArray = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
            '_', '+', '-', '=', '[', ']', '{', '}', '|', ';',
            "'", ':', '"', ',', '.', '<', '>', '/', '?', '`'
        ];

        var inputField = document.getElementById("myInput");
        const str = inputValue;
        const arr1 = str.split("");

        if (inputValue.includes(' ')) {
            alert("word should not contain any spaces!!!")
            inputField.value = "";
            return;
        }
        if (str.length < 6) {
            alert("word should be 6 letters!!!")
            inputField.value = "";
            return
        }

        switch (k) {
            case 0: setInputValues1(arr1); break;
            case 1: setInputValues2(arr1); break;
            case 2: setInputValues3(arr1); break;
            case 3: setInputValues4(arr1); break;
            case 4: setInputValues5(arr1); break;
        }



        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === ' ' || symbolArray.includes(arr1[i])) {
                alert("word should not contain any spaces and symbols!!!");
                inputField.value = "";
                return
            }
            arr1[i] = arr1[i].toUpperCase();
        }

        for (let i = 0; i < arr2.length; i++) {
            arr2[i] = arr2[i].toUpperCase();
        }




        let newBgColors = ['', '', '', '', '', ''];
        var greenPoint = 0;
        var yellowPoint = 0;
        for (let i = 0; i < 6; i++) {
            if (arr1[i] === arr2[i]) {
                newBgColors[i] = 'lightgreen';
                const index = arr1[i].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
                newBgColorsKeys[index] = "lightgreen";
                greenPoint++;
            } else if (arr2.includes(arr1[i])) {
                newBgColors[i] = '#ffce7a';
                const index = arr1[i].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
                newBgColorsKeys[index] = "#ffce7a";
                yellowPoint++;
            }
            else {
                const index = arr1[i].toUpperCase().charCodeAt(0) - 'A'.charCodeAt(0);
                newBgColorsKeys[index] = "#333333";
            }
        }
        setBgColorskeys(newBgColorsKeys);
        var tempScore = ((yellowPoint * 50) + (greenPoint * 100)) * (5 - k);
        if (tempScore > score) {
            score = tempScore;
        }



        switch (k) {
            case 0: setBgColors1(newBgColors); setHideDot1("white"); break;
            case 1: setBgColors2(newBgColors); setHideDot2("white"); break;
            case 2: setBgColors3(newBgColors); setHideDot3("white"); break;
            case 3: setBgColors4(newBgColors); setHideDot4("white"); break;
            case 4: setBgColors5(newBgColors); setHideDot5("white"); break;
        }



        inputField.value = "";
        k++;


        var time = performance.now();
        time = time / 1000;
        var timeMinuteFind = time / 60;
        if (timeMinuteFind >= 1) {
            while (time >= 60) {
                time = time / 60;
            }
        }
        time = time.toFixed(0);
        timeMinuteFind = timeMinuteFind.toFixed(0);
        setTime(time);
        setTimeMinute(timeMinuteFind)




        if (arr1.join('') === arr2.join('')) {
            setHideInput('hidden');
            setHidePopup('block');
        }
        else if (k === 5) {
            setGreeting("you Lost!!")
            setHideInput("block");
            setHidePopup("block");
        }


    };
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();

        }
    };
    const handleReload = () => {
        window.location.href = window.location.href + '?refresh=' + Date.now();


    };
    const handleKeyboardType = (val) => {
        if (inputValue.length >= 6) return;
        setInputValue(prev => prev + val);
    }


    return (

        <div className='flex justify-center mt-[10vh] md:mt-[10vw]'>
            <div className="horizontalGrid1 ">
                <div className='flex items-center justify-center'>
                    <div>
                        <div className="chance1 flex w-fit">
                            <div className={`char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-${hideDot1} font-bold border-gray-400`} style={{ backgroundColor: bgColors1[0] }}>{inputValues1[0]}</div>
                            <div className="char2 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors1[1] }}>{inputValues1[1]}</div>
                            <div className="char3 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors1[2] }}>{inputValues1[2]}</div>
                            <div className="char4 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors1[3] }}>{inputValues1[3]}</div>
                            <div className="char5 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors1[4] }}>{inputValues1[4]}</div>
                            <div className="char6 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors1[5] }}>{inputValues1[5]}</div>
                        </div>
                        <div className="chance1 flex w-fit">
                            <div className={`char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-${hideDot2} font-bold border-gray-400`} style={{ backgroundColor: bgColors2[0] }}>{inputValues2[0]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors2[1] }}>{inputValues2[1]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors2[2] }}>{inputValues2[2]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors2[3] }}>{inputValues2[3]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors2[4] }}>{inputValues2[4]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors2[5] }}>{inputValues2[5]}</div>
                        </div>
                        <div className="chance1 flex w-fit">
                            <div className={`char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-${hideDot3} font-bold border-gray-400`} style={{ backgroundColor: bgColors3[0] }}>{inputValues3[0]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors3[1] }}>{inputValues3[1]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors3[2] }}>{inputValues3[2]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors3[3] }}>{inputValues3[3]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors3[4] }}>{inputValues3[4]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors3[5] }}>{inputValues3[5]}</div>
                        </div>
                        <div className="chance1 flex w-fit">
                            <div className={`char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-${hideDot4} font-bold border-gray-400`} style={{ backgroundColor: bgColors4[0] }}>{inputValues4[0]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors4[1] }}>{inputValues4[1]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors4[2] }}>{inputValues4[2]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors4[3] }}>{inputValues4[3]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors4[4] }}>{inputValues4[4]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors4[5] }}>{inputValues4[5]}</div>
                        </div>
                        <div className="chance1 flex w-fit">
                            <div className={`char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-${hideDot5} font-bold border-gray-400`} style={{ backgroundColor: bgColors5[0] }}>{inputValues5[0]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors5[1] }}>{inputValues5[1]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors5[2] }}>{inputValues5[2]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors5[3] }}>{inputValues5[3]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors5[4] }}>{inputValues5[4]}</div>
                            <div className="char1 border-2 w-12 p-4 my-[2px] mx-[2px] text-center text-white font-bold border-gray-400" style={{ backgroundColor: bgColors5[5] }}>{inputValues5[5]}</div>
                        </div>
                        <div className='flex justify-center mt-4 text-white'>
                            <input
                                id='myInput'
                                className='border-[1px] text-center w-24'
                                type="text"
                                maxLength={6}
                                placeholder='type here'
                                value={inputValue}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                                required
                            />

                        </div>

                    </div>



                </div>

                <div className="keyboard my-4">
                    <div className=" flex-col items-center">
                        <div className='w-full flex justify-center'>
                            <ul className='flex w-fit'>
                                <li className="alphabet1 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[16] }} onClick={() => handleKeyboardType("Q")}><button>Q</button></li>
                                <li className="alphabet2 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[22] }} onClick={() => handleKeyboardType("W")}><button>W</button></li>
                                <li className="alphabet3 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[4] }} onClick={() => handleKeyboardType("E")}><button>E</button></li>
                                <li className="alphabet4 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[17] }} onClick={() => handleKeyboardType("R")}><button>R</button></li>
                                <li className="alphabet5 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[19] }} onClick={() => handleKeyboardType("T")}><button>T</button></li>
                                <li className="alphabet6 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[24] }} onClick={() => handleKeyboardType("Y")}><button>Y</button></li>
                                <li className="alphabet7 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[20] }} onClick={() => handleKeyboardType("U")}><button>U</button></li>
                                <li className="alphabet8 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[8] }} onClick={() => handleKeyboardType("I")}><button>I</button></li>
                                <li className="alphabet9 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[14] }} onClick={() => handleKeyboardType("O")}><button>O</button></li>
                                <li className="alphabet10 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[15] }} onClick={() => handleKeyboardType("P")}><button>P</button></li>
                            </ul>
                        </div>

                        <div className='w-full flex justify-center'>
                            <ul className='flex w-fit'>
                                <li className="alphabet11 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[0] }} onClick={() => handleKeyboardType("A")}><button>A</button></li>
                                <li className="alphabet12 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[18] }} onClick={() => handleKeyboardType("S")}><button>S</button></li>
                                <li className="alphabet13 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[3] }} onClick={() => handleKeyboardType("D")}><button>D</button></li>
                                <li className="alphabet14 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[5] }} onClick={() => handleKeyboardType("F")}><button>F</button></li>
                                <li className="alphabet15 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[6] }} onClick={() => handleKeyboardType("G")}><button>G</button></li>
                                <li className="alphabet16 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[7] }} onClick={() => handleKeyboardType("H")}><button>H</button></li>
                                <li className="alphabet17 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[9] }} onClick={() => handleKeyboardType("J")}><button>J</button></li>
                                <li className="alphabet18 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[10] }} onClick={() => handleKeyboardType("K")}><button>K</button></li>
                                <li className="alphabet19 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[11] }} onClick={() => handleKeyboardType("L")}><button>L</button></li>
                            </ul>
                        </div>

                        <div className='w-full flex justify-center'>
                            <ul className='flex w-fit'>
                                <li className='border-[1px] w-20 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl'><button onClick={handleSubmit}>submit</button></li>
                                <li className="alphabet20 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[25] }} onClick={() => handleKeyboardType("Z")}><button>Z</button></li>
                                <li className="alphabet21 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[23] }} onClick={() => handleKeyboardType("X")}><button>X</button></li>
                                <li className="alphabet22 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[2] }} onClick={() => handleKeyboardType("C")}><button>C</button></li>
                                <li className="alphabet23 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[21] }} onClick={() => handleKeyboardType("V")}><button>V</button></li>
                                <li className="alphabet24 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[1] }} onClick={() => handleKeyboardType("B")}><button>B</button></li>
                                <li className="alphabet25 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[13] }} onClick={() => handleKeyboardType("N")}><button>N</button></li>
                                <li className="alphabet26 border-[1px] w-10 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl cursor-pointer" style={{ backgroundColor: bgColorskeys[12] }} onClick={() => handleKeyboardType("M")}><button>M</button></li>
                                <li className='border-[1px] w-14 h-12 font-bold bg-gray-400 text-center mx-[1px] my-[1px] rounded text-xl'><button onClick={handleBackspace}>back</button></li>
                            </ul>
                        </div>



                    </div>
                </div>

            </div>


            <div className={`minipopup absolute w-20 h-8 bg-white text-center rounded top-[15vh] ${hideInput}`}>
                {referenceWord.toUpperCase()}
            </div>
            <div className={`${hidePopup} bg-gray-800 popups rounded-md absolute md:mt-[-10vh] w-[95vw] md:w-[40vw] h-[100vh] border-2 border-gray-400 flex flex-col items-center justify-start`}>
                <div className="success text-white text-center text-2xl my-4 bg-gray-800">
                    {greeting}
                </div>
                <div className="result border-2 bg-gray-600 w-[60vw] md:w-[30vw] h-[20vh] my-2 text-white p-4">
                    <div className='bg-gray-600'>Score  = {6 - k}</div>
                    <div className='bg-gray-600'>Time      = {timeMinute}minutes  {time}seconds</div>
                    <div className='bg-gray-600'>Points = {score}</div>
                </div>
                <button onClick={handleReload} className={`my-4 text-white rounded-full border-2 border-gray-400 p-2 hover:bg-gray-400 hover:text-black`}>
                    Next Game
                </button>
            </div>
        </div>
    );
}

export default App;
