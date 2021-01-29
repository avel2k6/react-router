import React from 'react';
import PropTypes from 'prop-types';

export default class StatefullComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    handleClick = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (<div>
            <div>
                <button className={'btn'}onClick={this.handleClick}>PushMe</button>
                <span className={'badge badge-secondary'}>{this.state.counter}</span>
            </div>
            {this.props.children}</div>);
    }
}

StatefullComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};
