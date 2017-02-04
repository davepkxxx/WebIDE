import { Reducer, Store, Action } from 'redux';

export interface State {
    openFileChooser: boolean
}

const initialState: State = {
    openFileChooser: false
};

export const enum ActionType {
    OPEN_FILE_CHOOSER_DIALOG,
    CLOSE_FILE_CHOOSER_DIALOG
}

const reducer: Reducer<State> = (state: State = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.OPEN_FILE_CHOOSER_DIALOG:
            return Object.assign({}, state, {
                openFileChooser: true
            });
        case ActionType.CLOSE_FILE_CHOOSER_DIALOG:
            return Object.assign({}, state, {
                openFileChooser: false
            });
        default:
            return state;
    }
}

export default reducer;