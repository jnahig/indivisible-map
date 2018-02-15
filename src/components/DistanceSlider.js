import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { Slider, InputNumber, Row, Col } from 'antd';

require('style-loader!css-loader!antd/es/grid/style/index.css');
require('style-loader!css-loader!antd/es/slider/style/index.css');

class DistanceFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: this.props.distance };
    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({
      inputValue: value,
    });

    const { changeHandler } = this.props;
    changeHandler(value);
  }

  render() {
    const classes = classNames({
      'distance-slider': true,
      hidden: this.props.hidden,
    });
    return (
      <Row className={classes}>
        <p>Filter by distance</p>
        <Col span={16}>
          <Slider min={5} max={500} onChange={this.onChange} value={this.state.inputValue} />
        </Col>
        <Col span={8}>
          <InputNumber
            min={5}
            max={500}
            step={1}
            value={this.state.inputValue}
            onChange={this.onChange}
            formatter={value => `${value} miles`}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
          />
        </Col>
      </Row>
    );
  }
}

DistanceFilter.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  distance: PropTypes.number.isRequired,
  hidden: PropTypes.bool.isRequired,
};

export default DistanceFilter;