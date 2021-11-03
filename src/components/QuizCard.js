import { useState } from 'react'
import waitingAnswer from '../images/waitingAnswer.gif'
import wrongAnswer from '../images/wrongAnswer3.gif'
import rightAnswer from '../images/rightAnswer5.gif'

const QuizCard = (props) => {
    const {
        quizQuestion, 
        questCount, 
        quizList, 
        score, 
        setScore,
        setQuestCount,
        setScorePc,
        setAppStep
    } = props

    const [nextBtnDisabled, setNextBtnDisabled] = useState([true, 'grey'])
    const [gifSource, setGifSource] = useState(waitingAnswer , rightAnswer,wrongAnswer)
     
    const checkAnswer = (response) => { // Receive the answer and check if correct. If so, increment the score. Increment the questCount and update the current question to the new index.
        /* console.log(nextBtnDisabled) */
        if (response === quizList[questCount].correct_answer) {
            setScore(score + 1)
            setGifSource(rightAnswer)
        } else setGifSource(wrongAnswer)
        
        /* console.log("response", response) */
        setNextBtnDisabled([false])
    }


    

    const handleNext = () => {
        // If we have reached the last question, we move to the next step: Score section
        if(quizList[questCount].questNum >= quizList.length){
            setScorePc(Math.round((score / (quizList.length + 1) * 100), 2))
            setAppStep(3)
        } else {
            setQuestCount(questCount + 1) // Otherwise, we move to the next question     
        }
    }

    /* Exit BUTTON*/


    const handleExit = () => {
        setAppStep(1)
    }

    
    return (
        <div className="quiz-card">
            <img src= {gifSource} resizeMode="cover" height="200px" tag="Loading..."/>
            <p>score: {score}</p>
            <p>question {quizQuestion.questNum}: {quizQuestion.question}</p>
            <div>
                {quizQuestion.possible_answers.map((element, index) => {
                    /* console.log(quizQuestion.correct_answer + "-" + element) */
                    return (
                        <button
                            key={index}
                            className={
                                (!nextBtnDisabled[0] && (quizQuestion.correct_answer === element))
                                ? "right-answer-btn" : "wrong-answer-btn"

                            }
                            onClick={() => checkAnswer(element)}
                        >
                            {element}
                        </button>
                    )
                })}
            </div>
      <div>
            <button 
                onClick={handleNext}
                disabled={nextBtnDisabled[0]}
                style={{backgroundColor: nextBtnDisabled[1]}}
            >
                Next question
            </button>

            <button className="button-exit" 
            onClick={handleExit}
            >
                Exit
            </button>
            </div>
      </div>
    )
}

export default QuizCard