import { useState } from "react";
import ChooseCountDown from "./ChooseCountDown";
import Difficulty from "./Difficulty";
import Category from "./Category";

const Options = (props) => {
    const {
        userName,
        selectedAvatar,
        setAppStep,
        selectedCategory,
        setSelectedCategory,
        selectedDifficulty,
        setSelectedDifficulty,
        countDown,
        setCountDown
    } = props

    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const handleClick = () => {
        if (!selectedDifficulty || !selectedCategory) {
            setNextBtnDisabled(true)
        }
        setNextBtnDisabled(false)
        setAppStep(2)
    }

    return (
        <>
            <div className="current-player">
                <p className="current-player-name">{userName}</p>
                <img className="current-player-avatar" src={selectedAvatar.src} alt={selectedAvatar.alt} />
            </div>
            <ChooseCountDown
                countDown={countDown}
                setCountDown={setCountDown}
            />
            <Difficulty
                selectedDifficulty={selectedDifficulty}
                setSelectedDifficulty={setSelectedDifficulty}
            />
            <Category
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setNextBtnDisabled={setNextBtnDisabled}
            />
            <div> {/* to have the button under the categories */}
                <button
                    onClick={handleClick}
                    disabled={nextBtnDisabled}
                    className={nextBtnDisabled ? 'disabled-btn' : 'action-btn'}
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default Options;
