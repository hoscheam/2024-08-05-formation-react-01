import PropTypes from 'prop-types';
import style from './Button.module.css';

interface IButtonProps {
  bgColor?: string;
  color?: 'black' | 'white';
  style?: {
    fontWeight: 100| 500 | 900,
    textDecoration: 'underline' | 'none'
  };
  children: React.ReactElement | string|Array<React.ReactElement | string>;
}

const Button: React.FC<IButtonProps> = (props) => {
  console.log(props);
    return (
    <div style={{...props.style, backgroundColor: props.bgColor, color: props.color}} className={style.Button} data-testid="Button">{props.children}</div>
  );
};

Button.propTypes = {
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['black', 'white']),
    // style : PropTypes.shape(
    // {
    //     fontWeight: PropTypes.oneOf([100, 500,900]),
    //     textDecoration: PropTypes.oneOf(['underline', 'none']),
    // })
};

Button.defaultProps = {
    bgColor: 'yellow',
    // color: 'black',
    // style: {fontWeight: 100, textDecoration: 'none'}
};

export default Button;