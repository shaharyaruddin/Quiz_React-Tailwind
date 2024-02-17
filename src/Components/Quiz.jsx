import React, { useState } from 'react'
import { QuizData } from './QuizData'
import QuizResult from './QuizResult'
function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [clicked, setClicked] = useState(0)

  const tryAgain = () => {
    setShowResult(false)
    setScore(0)
    setCurrentQuestion(0)
    setClicked(0)
  }





  const handleNext = () => {

    if (clicked === 0) {
      alert("please select any option ")
    } else if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {

      setShowResult(true)

    }
    if (clicked === QuizData[currentQuestion].answer) {

      setScore(score + 5)

    }
    setClicked(0)


  }
  return (
    <>

      {
        showResult ? (<QuizResult score={score} totalScore={QuizData.length * 5} tryAgain={tryAgain} />) : (


          <div className=" w-full h-screen flex justify-center items-center ">

            <div className='border-4 shadow-lg   md:w-[40%] w-full    '>
              <h3 className='md:text-3xl text-normal font-bold md:font-normal my-3'>{currentQuestion + 1}.{QuizData[currentQuestion].question}</h3>

              <div className=' grid grid-cols-2 py-2 '>

                {QuizData[currentQuestion].option.map((option, index) => {

                  return (
                    <>

                      <button className='text-normal font-bold  md:text-xl md:font-semibold   py-2 hover:bg-blue-300 cursor-pointer border focus:bg-green-700'
                        onClick={() => setClicked(index + 1)}
                        key={index}

                      >{option}



                      </button>


                    </>

                  )

                })}
              </div>
              <div className='flex justify-center items-center py-3 font-bold md:font-semibold text-normal md:text-xl  '>
                <button className='h-[30px] px-3 bg-green-500 rounded-md' onClick={handleNext}> Next</button>


              </div>
            </div>


          </div>
        )
      }
    </>
  )
}

export default Quiz