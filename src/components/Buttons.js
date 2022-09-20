import  "./Buttons.css";

const Buttona =({ symbol,color,handleClick,name}) => {
    return ( <div onClick={() => handleClick(symbol)}
    className="button-wrap"
     style={{backgroundColor:color}}>
     {symbol} {name} </div>



    );
}

export default Buttona