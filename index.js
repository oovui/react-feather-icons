import React,{Component} from 'react';
import PropTypes from 'prop-types';
import feather from  'feather-icons';


function createSvg(html) {
  return {__html: html};
}

const styles = {
    display: "inline-block",
    fontStyle: "normal",
    fontVariant: "normal",
    lineHeight: 0,
    speak: "none",
    textAlign: "center",
    textDecoration: "inherit",
    textRendering: "auto",
    textTransform: "none",
    verticalAlign: "baseline"
}


class Icon extends Component{

  render(){
    const { type,color, size, ...otherProps } = this.props;
    const width = size,height=size;
    //TODO：type must be one of feather support icons
    if(!type) {return("");}
    return (
      <i className="oov-icon" style={styles} dangerouslySetInnerHTML = {createSvg(feather.icons[type].toSvg(
        { color, width, height }
      ))}  {...otherProps} />
    )
  }
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Icon.defaultProps = {
  color: '#000000',
  size: '18',
};

export default Icon;

