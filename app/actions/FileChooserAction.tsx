import { Action, ActionCreator } from 'redux';
import { ActionType } from '../reducer';

export default {

    handleOpen: () => ({ type: ActionType.OPEN_FILE_CHOOSER_DIALOG }),

    handleClose: () => ({ type: ActionType.CLOSE_FILE_CHOOSER_DIALOG })

};