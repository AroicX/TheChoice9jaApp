export const toAbsoluteUrl = (pathname) =>
  process.env.PUBLIC_URL + '/svg/' + pathname;

export const ErrorHandler = (error) => {
  if (error.response) {
    if (error.response.data) {
      if (error.response.data.errors) {
        return error?.response?.data
          ? Object.entries(error?.response?.data?.errors)[0][1]?.toString()
          : null;
      } else if (error.response.data.Message) {
        return error.response.data.Message;
      } else {
        return 'Server Error';
      }
    }
  }
};

export const exceptionToErrors = (error) => {
  let response = {};

  if (Array.isArray(error.errors)) {
    const { errors } = error;

    response = errors.reduce((result, next) => {
      if (next.field in result) {
        result[next.field].push(next.message);
      } else {
        result[next.field] = [next.message]; // eslint-disable-line no-param-reassign
      }

      return result;
    }, {});
  } else if (
    error.response &&
    error.response.data &&
    error.response.data.errors
  ) {
    // Internal API
    const { errors } = error.response.data;

    response = Object.keys(errors).reduce((result, field) => {
      result[field] = Object.values(errors[field]); // eslint-disable-line no-param-reassign

      return result;
    }, {});
  }

  return response;
};

export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const emailValidatorChecker = (email) => {
  let mailFormatter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailFormatter)) {
    return true;
  } else {
    return false;
  }
};

export const emailValidatorError = (email, setForm) => {
  let mailFormatter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email === '' || !email.match(mailFormatter)) {
    if (email === '') {
      setForm((prev) => {
        return { ...prev, emailError: 'Email is required' };
      });
    } else {
      setForm((prev) => {
        return { ...prev, emailError: 'Please Enter a valid Email Address' };
      });
    }
  }
};

export const nameSplit = (name, index) => {
  if (name) {
    let splittedName = name.split(' ');
    return splittedName[index];
  }
  return '';
};

export const inputValidatorChecker = (value) => {
  if (value === '') {
    return false;
  } else {
    return true;
  }
};

export const inputValidatorErrorState = (value, setState, field, errMsg) => {
  if (value === '') {
    setState((prev) => {
      return { ...prev, [field]: errMsg };
    });
    return;
  }
};

export const numberFormatter = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num;
};

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

export const randomColor = () => {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
};

export const contrastColor = (c) =>
  ['black', 'white'][
    ~~(
      [1, 3, 5]
        .map((p) => parseInt(c.substr(p, 2), 16))
        .reduce((r, v, i) => [0.299, 0.587, 0.114][i] * v + r, 0) < 128
    )
  ];
