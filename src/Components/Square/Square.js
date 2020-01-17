import React from 'react';
import './Square.css';

class Square extends React.Component
{

  render()
  {
    const squareClick = () =>
    {
      this.props.onClick()
    }

    return (
      <button className="square" onClick={squareClick}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;