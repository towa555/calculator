import  "./input.css";

const input =({text,results}) =>{
    return (
        <div className="input-wrapper">
   <div className="results">
    {results}

   </div>
   <div className="text">

    {text}
   </div>
        </div>
    )
}

export default input