import PropTypes from 'prop-types';
import React from 'react';
import style from './Button.module.css';

const Button = (props) => {
  console.log(props);
    return (
    <div style={{backgroundColor:props.bgColor, color: props.color}} className={style.Button} data-testid="Button">{props.children}</div>
  );
};

Button.propTypes = {
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['black', 'white']).isRequired
};

export default Button;