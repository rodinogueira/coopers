export const ContainerClearButton = ({ children, onClick, ...rest }) => (
  <button className='container__clear-button' onClick={onClick} {...rest}>
    {children}
  </button>
);
