// Modal.jsx
// import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, cardDetails }) => {
  if (!isOpen) return null;

//   const handleClickBackdrop = (e) => {
//     onClose(); // Close modal when backdrop is clicked
//   };

//   const handleModalClick = (e) => {
//     e.stopPropagation(); // Prevent click inside modal from closing it
//   };

  return (
    <div className="overlay">
      <div className="modalContainer">
        <p onClick={onClose} className='closeBtn'>X</p>
        <div className="content">
            <p>Meat Meat Fruit</p>
            <p>{cardDetails.cardName}</p>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  cardDetails: PropTypes.object.isRequired,
};

export default Modal;

// const [isModalOpen, setIsModalOpen] = useState(false);

// // Function to update the progress width
// const handleCardClick = (e) => {
//   e.stopPropagation(); // Prevent event bubbling
//   setIsModalOpen(true);
// };
//   // setProgressWidth(progressWidth + 10);

// const closeModal = () => {
//   setIsModalOpen(false);
// };