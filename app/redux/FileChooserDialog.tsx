import 'whatwg-fetch';
import * as React from 'react';
import { connect, Dispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { State } from '../reducer';
import FileChooserDialog from '../components/FileChooserDialog';
import FileChooserAction from '../actions/FileChooserAction';


const mapStateToProps = (state: State) => ({
    open: state.openFileChooser
});

const mapDispatchToProps = (dispatch: Dispatch<State>) => (bindActionCreators(FileChooserAction, dispatch));

@connect(mapStateToProps, mapDispatchToProps)
export default class ReduxFileChooserDialog extends React.Component<any, any> {

    render(): JSX.Element {
        const { open, handleClose } = this.props;
        return (
            <FileChooserDialog open={open || false} onTouchCancel={handleClose}></FileChooserDialog>
        );
    }

}