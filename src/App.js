import { useRef } from 'react';
import './App.css';
import Modal from './Components/Modal';

function App() {
    const modalRef = useRef();

    const appOpenModal = () => {
        modalRef.current.openModal();
    };

    return (
        <div className='App'>
            <p>App Component</p>
            <Modal ref={modalRef} />
            <button onClick={appOpenModal}>Open Modal</button>
        </div>
    );
}

export default App;
