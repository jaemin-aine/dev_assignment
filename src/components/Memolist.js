import React from 'react';
import PropTypes from 'prop-types';
import {Memo} from 'components';

class MemoList extends React.Component {
    render() {
        const mapToComponents = data => {
            return data.map((memo, i) => {
                return (<Memo 
                            data={memo}
                            ownership={ (memo.writer === this.props.currentUser) }
                            key={memo._id}
                />);
            });
        };
        
        return (
            <div>
                {mapToComponents(this.props.data)}
            </div>
        );
    }
}

MemoList.propTypes = {
    data: PropTypes.array,
    currentUser: PropTypes.string
};

MemoList.defaultProps = {
    data: [],
    currentUser: ''
};

export default MemoList;