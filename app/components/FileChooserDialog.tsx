import 'whatwg-fetch';
import * as React from 'react';
import { Component, Props } from 'react';
import Dialog from 'material-ui/Dialog';
import { List, ListItem } from 'material-ui/List';
import FlatButton from 'material-ui/FlatButton';
import FolderIcon from 'material-ui/svg-icons/file/folder';
import FileIcon from 'material-ui/svg-icons/editor/insert-drive-file';

interface FileChooserDialogProps extends Props<FileChooserDialog> {
    open: boolean
    onTouchOpen?()
    onTouchCancel?()
    onRequestClose?()
}

class FileChooserDialog extends Component<FileChooserDialogProps, any> {

    constructor(props) {
        super(props);
    }

    render(): JSX.Element {
        const { open, onTouchOpen, onTouchCancel, onRequestClose, children } = this.props;
        const actions = [
            <FlatButton label="Open" onTouchTap={onTouchOpen} />,
            <FlatButton label="Cancel" onTouchTap={onTouchCancel} />
        ];
        return (
            <Dialog modal={true}
                open={open}
                repositionOnUpdate={false}
                autoScrollBodyContent={true}
                style={{ paddingTop: 0 }}
                actions={actions}
                onRequestClose={onRequestClose}>
                <FileChooserList />
            </Dialog>
        );
    }

}

interface FileChooserListState {
    files: File[]
}

interface File {
    name: string
    type: FileType
}

const enum FileType {
    FILE,
    FOLDER
}

class FileChooserList extends Component<any, FileChooserListState> {

    state: FileChooserListState = { files: [] }

    componentDidMount() {
        fetch('file/ls').then(res => {
            return res.json<any[]>();
        }).then(arr => {
            let files: File[] = arr.map(obj => {
                return {
                    name: obj.name,
                    type: obj.type === 'folder' ? FileType.FOLDER : FileType.FILE
                };
            });
            this.setState({ files: files });
        });
    }

    render() {
        let { files } = this.state;
        return (
            <List>
                {
                    files.map((file, i) => {
                        let icon = file.type === FileType.FOLDER ? <FolderIcon /> : <FileIcon />;
                        return (
                            <ListItem primaryText={file.name} leftIcon={icon} key={i} />
                        );
                    })
                }
            </List>
        );
    }

}

export default FileChooserDialog;