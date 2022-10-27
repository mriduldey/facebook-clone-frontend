import { useField } from 'formik';

import './styles.css';
export default function LoginInput({ placeholder, ...props }) {
  const [field, meta] = useField(props);
  console.log('fields', field);
  return (
    <div className="input_wrap">
      <input type placeholder={placeholder} {...field} {...props} />
    </div>
  );
}
