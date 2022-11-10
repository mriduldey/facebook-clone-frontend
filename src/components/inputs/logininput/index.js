import { ErrorMessage, useField } from 'formik';
import { useMediaQuery } from 'react-responsive';

import './styles.css';

export default function LoginInput({ placeholder, bottom, ...props }) {
  const [field, meta] = useField(props);

  const desktopView = useMediaQuery({
    query: '(min-width: 850px)',
  });
  return (
    <div className="input_wrap">
      {meta.touched && meta.error && !bottom && (
        <div
          className={`input_error${desktopView ? ' input_error_desktop' : ''}`}
        >
          <ErrorMessage name={field.name} />
          <div
            className={desktopView ? 'error_arrow_left' : 'error_arrow_top'}
          ></div>
        </div>
      )}
      <input
        className={meta.touched && meta.error ? 'input_error_border' : ''}
        type
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && bottom && (
        <div
          className={`input_error${desktopView ? ' input_error_desktop' : ''}`}
        >
          <ErrorMessage name={field.name} />
          <div
            className={desktopView ? 'error_arrow_left' : 'error_arrow_bottom'}
          ></div>
        </div>
      )}
      {meta.touched && meta.error && (
        <i
          className="error_icon"
          style={{ top: `${desktopView ? '15px' : bottom ? '15px' : '77px'}` }}
        ></i>
      )}
    </div>
  );
}
