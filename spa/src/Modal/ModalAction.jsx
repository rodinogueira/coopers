export const ModalAction = ({ onClick, children }) => (
  <button className='modal__action' onClick={onClick}>
    {children}
  </button>
);
