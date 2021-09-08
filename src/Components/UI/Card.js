
import React from 'react';

import styled from 'styled-components'
const CardUI = styled.div`
{
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}
`;
const Card = (props) => {
  const classes = 'card ' + props.className;

  return <CardUI className={classes}>{props.children}</CardUI>;
};

export default Card;