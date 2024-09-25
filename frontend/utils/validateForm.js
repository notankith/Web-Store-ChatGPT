export const validateForm = (fields) => {
    const errors = {};
    if (!fields.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
      errors.email = 'Email is invalid';
    }
  
    if (!fields.password) {
      errors.password = 'Password is required';
    } else if (fields.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
  
    return errors;
  };
  