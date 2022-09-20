function Button({name,classAttrib,}){

    const afterClick =() => {
        alert('you clicked this button')
    }
    const hover =() => {
        alert('you hovered over this button')
    }
    return(
        <button  onMouseEnter={hover} onClick={afterClick} className={classAttrib}>
            {name}
        </button>
    )
}
export default Button;