import React, { useState } from 'react'
import { QuizData } from './QuizData'
function Quiz() {

const[currentQuestion,setCurrentQuestion]=useState(0)

const handleNext =()=>{

if(currentQuestion< QuizData.length-1){

setCurrentQuestion(currentQuestion+1)
}


}

  return (
    <>
    
    <div className="w-full h-screen flex justify-center items-center ">

<div className='border shadow-lg   w-[40%]  '>
<h3 className='text-3xl font-normal my-3'>{currentQuestion+1}.{QuizData[currentQuestion].question}</h3>

<div className=' grid grid-cols-2 py-2 '>

  {QuizData[currentQuestion].option.map((option,index)=>{

return(
<>

<div className='text-xl font-semibold   py-2 hover:bg-blue-300 cursor-pointer border active:bg-green-700 active:text-white'>{option}</div>


</>

)

  })}
</div>
<div className='flex justify-between py-3 font-semibold text-xl  '>
<button className='h-[30px] px-3 bg-orange-500 rounded-md'>Reset</button>
<button className='h-[30px] px-3 bg-green-500 rounded-md' onClick={handleNext}> Next</button>

<button className='h-[30px] px-3 bg-red-500 rounded-md'>Exit</button>

</div>
</div>


    </div>
    
    </>
  )
}

export default Quiz