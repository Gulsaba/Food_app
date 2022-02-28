import './Model.css'
import ReactDOM from 'react-dom';
//we can create multiple component in single react component but we did not export like Backdrop and modeloverlay
//for backdrop purposes
const Backdrop=(props)=>{
return(
    <div className='backdrop'></div>
)
};

//For styling purpose
const Modeloverlay=(props)=>{
return(
    <div className='modal'>
        <div>{props.children}</div>
    </div>
)
};

//for rendering rendering jxs code
const Model=(props)=>{
const val= document.getElementById('model-overlays')
return(
<div>
{ReactDOM.createPortal(<Backdrop/>, val) }
{ReactDOM.createPortal(<Modeloverlay>{props.children}</Modeloverlay>, val)}
</div>
)}
export default Model;