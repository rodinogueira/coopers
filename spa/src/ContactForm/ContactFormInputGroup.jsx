export const ContactFormInputGroup = ({ label, type, placeholder, required }) => (
  <div className='contact-form__input-group'>
    <label htmlFor={label} className='contact-form__label'>{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      className='contact-form__input'
    />
  </div>
);
