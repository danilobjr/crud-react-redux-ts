import * as _ from 'lodash';
import { SHOW_SUCCESS_MESSAGE } from './actions';

export function toasterMessage(state = null, action) {
    switch (action.type) {
        case SHOW_SUCCESS_MESSAGE:
            return _.assign({}, action.toasterMessage);
        default:
            return state;
    }
}