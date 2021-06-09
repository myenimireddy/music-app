import Tiles from './tiles';
import {createPortal} from 'react-dom';

const Overlay = (props) => {
    return (
    <div className="modal-overlay">
        <div className="modal-content">
            <div className="close-icon" onClick={() => props.handOnClick()}><p>X</p></div>
            <p>Personal Information</p>
            <ul className="list-styles">
                <li> Language: English</li>
                <li> Email: abc@123.com </li>
                <li> Mobile: 999999999  </li>
                
            </ul>
            <p>Credit Card Information</p>
            <ul className="list-styles">
                <li> Payment Card: Amex </li>
                <li> Card Ending: '3456' </li>
            </ul>
            <p>Playlists</p>
            <div className="app-playlist">
                <Tiles hideButton="true" data={props.playlist} />
            </div>
        </div>
    </div>)
}


const Modal = (props)=> {
    const modalRoot = document.getElementById('portal');
   
    return createPortal(
        <Overlay handOnClick={props.handOnClick} playlist={props.playlist} />,
        modalRoot,
    );
}

export default Modal;