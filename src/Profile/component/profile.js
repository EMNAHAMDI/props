import react from "react";
function Prof( props){
    return(
        <div>
            <h1> fullName :{ props.fullname} </h1>
            <h1>bio:{ props.bio} </h1>
            <h1> profession:{ props.profession} </h1>
            {props.children}
            <button onClick={()=>props.handleClick(props.fullname)}  ></button>

            
        </div>
    )
}
export default Prof ;
