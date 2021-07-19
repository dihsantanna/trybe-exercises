import React from 'react';
import PropTypes from 'prop-types'

function Item(props) {
  const { content, style, onClick } = props;
  return (
    <div
      className="Item"
      style={ style }
      onClick={ onClick }
    >
      {content}
    </div>
  );
}

export default Item;

Item.propTypes = {
  content: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
}
