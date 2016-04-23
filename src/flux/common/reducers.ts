import * as _ from 'lodash';
import { SHOW_SUCCESS_TOASTER_MESSAGE, HIDE_TOASTER_MESSAGE } from './actions';

export function toasterMessage(state = null, action) {
    switch (action.type) {
        case SHOW_SUCCESS_TOASTER_MESSAGE:
            return _.assign({}, action.toasterMessage);
        case HIDE_TOASTER_MESSAGE:
            return null;
        default:
            return state;
    }
}