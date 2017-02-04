import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux'
import MenuItem from 'material-ui/MenuItem';
import { TopNavMenuBar, TopNavMenu } from '../components/TopNavMenuBar';
import FileChooserDialog from './FileChooserDialog';
import FileChooserAction from '../actions/FileChooserAction';
import { ActionType, State } from '../reducer';

const mapDispatchToProps = (dispatch: Dispatch<State>) => (bindActionCreators({
    handleOpenFileChooser: FileChooserAction.handleOpen
}, dispatch));

@connect(null, mapDispatchToProps)
export default class ReduxTopNavMenuBar extends React.Component<any, any> {

    render(): JSX.Element {
        var { handleOpenFileChooser } = this.props;
        return (
            <TopNavMenuBar>
                <TopNavMenu label="FILE">
                    <MenuItem primaryText="Open..." onTouchTap={handleOpenFileChooser} />
                </TopNavMenu>
            </TopNavMenuBar>
        );
    }

}