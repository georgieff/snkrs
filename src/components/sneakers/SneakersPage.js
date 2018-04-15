import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sneakerActions from '../../actions/sneakerActions';

class SneakersPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            sneaker: { title: '' }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onTitleChange(event) {
        const sneaker = this.state.sneaker;
        sneaker.title = event.target.value;
        this.setState({sneaker: sneaker});
    }

    onSave(event) {
        event.preventDefault();
        this.props.actions.createSneaker(this.state.sneaker);
        this.setState({sneaker: { title: ''}});
    }

    sneakerRow(sneaker, index) {
        return <div key={index}>{sneaker.title}</div>;
    }

    render() {
        return (
            <div>
                <h2>add sneaker</h2>
                {this.props.sneakers.map(this.sneakerRow)}
                <form onSubmit={this.onSave}>
                    <input type="text"
                        onChange={this.onTitleChange}
                        value={this.state.sneaker.title} />
                    <button type="submit">Save</button>
                </form>
            </div>
        );
    }
}

SneakersPage.propTypes = {
    sneakers: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        sneakers: state.sneakers
    };
}

// function mapDispatchToProps (dispatch) {
//     return {
//         createSneaker: (sneaker) => dispatch(sneakerActions.createSneaker(sneaker))
//     };
// }

function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators(sneakerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SneakersPage);
