import * as React from 'react';
import { Component, Props } from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux'
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';

export class TopNavMenuBar extends Component<any, any> {

    render(): JSX.Element {
        var { children } = this.props;
        return (
            <Toolbar>
                <ToolbarGroup>
                    {children}
                </ToolbarGroup>
            </Toolbar>
        );
    }

}

interface TopNavMenuProps extends Props<TopNavMenu> {
    label: string
}

export class TopNavMenu extends React.Component<TopNavMenuProps, any> {

    render(): JSX.Element {
        const { label, children } = this.props;
        return (
            <IconMenu
                targetOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                iconButtonElement={<FlatButton label={label} />}>
                {children}
            </IconMenu>
        );
    }

}