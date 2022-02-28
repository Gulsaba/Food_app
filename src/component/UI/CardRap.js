import './CardRap.css';
function CardRap(props){
    return(
        <>
        <div className="rap">{props.children}</div>
        </>
    )
}export default CardRap;