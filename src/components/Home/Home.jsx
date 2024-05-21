import { Link } from 'react-router-dom';
const Home = () => {
    const handleLogin = () =>{
        alert("sorry this version doesn't have login function! Kindly proceed to play")
    }
    return (
        <div className='bg-white'>
            <div>
                <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                    {/* Icon consisting of squares */}
                    <div className="flex mb-4">
                        {/* Green squares */}
                        <div className="w-5 h-5 bg-green-500 m-1"></div>
                        <div className="w-5 h-5 bg-green-500 m-1"></div>
                        <div className="w-5 h-5 bg-green-500 m-1"></div>
                        {/* Gray squares */}
                        <div className="w-5 h-5 bg-gray-400 m-1"></div>
                        <div className="w-5 h-5 bg-gray-400 m-1"></div>
                        <div className="w-5 h-5 bg-gray-400 m-1"></div>
                    </div>
                    {/* Title */}
                    <h1 className="bg-white text-4xl font-bold mb-2">Wordle</h1>
                    {/* Subtitle */}
                    <p className="mb-4 bg-white">Get 6 chances to guess a 6-letter word.</p>
                    {/* Buttons */}
                    <button className="border-2 border-black text-black py-2 px-4 rounded mb-2 hover:bg-gray-200" onClick={handleLogin}>Log in</button>
                    <Link to="/game">
                        <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-700">Play</button>
                    </Link>                    
                    {/* Footer */}

                </div>
            </div>
        </div>
    )
}

export default Home
