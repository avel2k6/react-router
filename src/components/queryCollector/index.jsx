import React from 'react';
import PropTypes from 'prop-types';

export default class QueryCollector extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ispushed: false,
        };
    }

    render() {
        const { props } = this;
        const queryData = new URLSearchParams(props.params.search);
        return <div>I see query string with test ({queryData.get('test')})</div>;
    }
}

QueryCollector.propTypes = {
    params: PropTypes.object,
};
