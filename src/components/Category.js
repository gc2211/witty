import { TriviaAPI } from "../utils/TriviaAPI";

const colorConvert = require('color-convert');
 
 const Category = (props) => {
    const {selectedCategory, setSelectedCategory, setNextBtnDisabled} = props

    const handleCategory = (element) => {
        setSelectedCategory(element.catNb);
        setNextBtnDisabled(false)
    }
    
     return (
            <>
                <h2>Select your category</h2>
                <div className="usernamebox">
                    {TriviaAPI.map((element , index) => {

                        const primaryH = colorConvert.keyword.hsl(element.color)[0]

                        return(
                            <button className="category-btn"
                                    key={index}
                                    onClick={() => handleCategory(element)} 
                                    style={{backgroundColor: selectedCategory !== element.catNb 
                                        ? `hsl(${primaryH}, 70%, 60%)` 
                                        : `hsl(${primaryH}, 80%, 35%)` 
                                        }}
                            >{element.catName}</button>
                        )
                    })}         
                </div>
           </>
        )
    }

    export default Category;

