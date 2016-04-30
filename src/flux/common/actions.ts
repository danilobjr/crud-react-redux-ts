export const TALKING_TO_THE_SERVER = 'TALKING_TO_THE_SERVER';
export const FINISH_TALKING_TO_SERVER = 'FINISH_TALKING_TO_SERVER';

export function talkingToTheServer() {
    return {
        type: TALKING_TO_THE_SERVER        
    }
}

export function finishTalkingToTheServer() {
    return {
        type: FINISH_TALKING_TO_SERVER
    };
}
