import { TALKING_TO_THE_SERVER, FINISH_TALKING_TO_SERVER } from './actions';

export function talkingToTheServer(state: boolean = false, action): boolean {
    switch (action.type) {
        case TALKING_TO_THE_SERVER:
            return true;
        case FINISH_TALKING_TO_SERVER:
            return false;
        default:
            return state;
    }
}