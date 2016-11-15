import {ACTION_EDITOR_TOGGLE_TERM, ACTION_FS_REQUEST_UPDATE} from '../action-types';
import {XTERM_INIT,XTERM_DESTROY} from '../xterm-requests'
import {act} from 'MainApp/common/utils/reducer-actions-utils'
import {init} from '../../../../api/requests/xterm/xterm-api';

/**
 * Terminal toggle status is updated
 * @param workspace
 * @param status
 */
export const toggleTerminal = (workspace, status) => ({
    type: ACTION_EDITOR_TOGGLE_TERM,
    workspace,
    status
});

export const term = {
    init: act(init, XTERM_INIT)
}