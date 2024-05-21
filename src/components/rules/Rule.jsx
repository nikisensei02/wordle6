import rulesImage from './rule.png'
const Rule = () => {
    return (
        <div className="w-[95vw] md:w-[35vw] h-[80vh] flex justify-center bg-gray-800">
            <div className="rules p-2 font-serif bg-gray-800">
                
                <h2 className=' font-semibold text-xl my-1 bg-gray-800'>How to Play</h2>
                <h3 className='my-1 bg-gray-800'>Guess the Wordle in 5 tries.</h3>
                <div className='ml-4 my-1 bg-gray-800'>
                    <p className='bg-gray-800'>*Each guess must be a valid 6-letter word.</p>
                    <p className='bg-gray-800'>*The color of the tiles will change to show how close your guess was to the word.</p>
                </div>

                <div className="example my-1 bg-gray-800">
                    <h3 className='font-bold bg-gray-800'>Example:-</h3>
                    <div className='w-full flex justify-center my-1 bg-gray-800'><img src={rulesImage} alt="" width="250px" /></div>
                </div>
            </div>
        </div>
    )
}

export default Rule
