import { useState } from 'react';
import Modal from './portal';

const Header = (props) => {
    const [showModal, toggleModal] = useState(false)
    const handOnClick = () => {
        toggleModal(!showModal);
    }
    return (
      <header className="app-header">
        <div className="header-item header-search-item"><input type="text" id="fname" placeholder="Search..."></input></div>
        <div className="header-item" onClick={handOnClick}> Profile </div>
        <div className="header-item"> Sign out </div>
        {showModal ? <Modal playlist={props.playlist} handOnClick={handOnClick}/> : null}
      </header>
    )
}

export default Header;