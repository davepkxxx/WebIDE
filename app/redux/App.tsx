import * as React from 'react';
import FileChooserDialog from './FileChooserDialog';
import TopNavMenuBar from './TopNavMenuBar';

export default class App extends React.Component<any, any> {

    render(): JSX.Element {
        return (
            <div>
                <FileChooserDialog />
                <TopNavMenuBar />
            </div>
        );
    }

}