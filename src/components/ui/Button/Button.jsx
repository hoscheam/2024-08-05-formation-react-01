import PropTypes from 'prop-types';
import React from 'react';
import style from './Button.module.css';

const Button = (props) => {
  console.log(props);
    return (
    <div style={{...props.style, backgroundColor: props.bgColor, color: props.color}} className={style.Button} data-testid="Button">{props.children}</div>
  );
};

Button.propTypes = {
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['black', 'white']).isRequired,
    style : PropTypes.exact(
    {
        fontWeight: PropTypes.oneOf([100, 500,900]),
        textDecoration: PropTypes.oneOf(['underline', 'none']),
    })
};

Button.defaultProps = {
    bgColor: 'yellow',
    // color: 'black',
    // style: {fontWeight: 100, textDecoration: 'none'}
};

export default Button;