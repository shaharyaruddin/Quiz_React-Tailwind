import React from 'react'

function QuizResult(props) {


  return (
    
<>

<div className=" w-full h-screen flex justify-center items-center ">
<div className='border-4 shadow-lg   md:w-[30%] h-[35%] w-full    '>


<div className='text-3xl font-bold mt-16 text-center'>
<p>Your Score: <i>{props.score}</i> </p> 
<br />
<p>Out of: <i>{props.totalScore}</i> </p>

    
</div>

<div className='flex justify-center items-center text-2xl font-bold mt-10 border shadow-lg text-green-500 hover:text-green-800'>

<button 
onClick={props.tryAgain}
>
  Try Again</button>
</div>
</div>

</div>
</>


  )
}

export default QuizResult