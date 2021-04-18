/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import Collapse from '@material-ui/core/Collapse';

export default class Component extends React.Component {

  state = {
    open: -1
  }

  _handleItemClick = (index) => () => {
    this.setState((prevState) => ({ open: prevState.open === index ? -1 : index }));
  }

  _renderItem = (item, index) => {
    const { open } = this.state;
    return (
      <div 
        style={{
          borderRadius: '16px',
          backgroundColor: 'white',
          marginBottom: '10px'
        }} 
        key={index}
      >
        <div style={{
            display: 'flex',
            minHeight: '50px',
            padding: '16px'
          }} 
          onClick={this._handleItemClick(index)}
        >
          <span
            style={{
              fontSize: '18px',
              fontWeight: '700',
              marginLeft: '26px',
            }}
          > 
            { item.title }
          </span>
        </div>
        <Collapse 
          style={{
            padding: '0px 27px 22px 77px'
          }} 
          component="div" 
          in={open === index} 
          timeout="auto" 
          unmountOnExit
        >
          {item.description}
        </Collapse>
      </div>
    );
  }
  
  render() {
    const { data } = this.props;
    return (
      <div style={{ maxWidth: '680px'}}>
        {
          data.map((item, index) => this._renderItem(item, index))
        }
      </div>
    );
  }
}

Component.defaultProps = {
  data: []
};

Component.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array
};
