import classes from './Modal.module.css'
import { Fragment } from "react"
import  ReactDOM  from 'react-dom'

const Modal=props=>{

    const Backdrop=props=>{
        return <div className={classes.backdrop} onClick={props.onclose}></div>
    }
    const ModalOverlay=props=>{
        return <div className={classes.modal}>
            <div className={classes.conetent}>{props.children}</div>
        </div>
    }
    const PortalElement=document.getElementById('overlays')
    return <Fragment>
       {ReactDOM.createPortal (<Backdrop onclose={props.onclose}/>,PortalElement)} 
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,PortalElement)}
    </Fragment>
}
export default Modal;