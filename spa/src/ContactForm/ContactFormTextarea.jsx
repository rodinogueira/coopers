export const ContactFormTextarea = ({ placeholder, required }) => (
  <div className='contact-form__input-group'>
    <label className='contact-form__label'>Message*</label>
    <textarea
      placeholder={placeholder}
      required={required}
      className='contact-form__textarea'
    ></textarea>
  </div>
);
