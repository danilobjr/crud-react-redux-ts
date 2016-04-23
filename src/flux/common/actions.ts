import { IMessage } from './../../models/IMessage';
import { ToasterMessageType } from './../../models/ToasterMessageType';

export const SHOW_SUCCESS_TOASTER_MESSAGE = 'SHOW_SUCCESS_MESSAGE';
export const HIDE_TOASTER_MESSAGE = 'HIDE_TOASTER_MESSAGE';

export function showSuccessMessage(text: string) {
    const toasterMessage: IMessage = {
        text,
        type: ToasterMessageType.Success
    };
    
    return {
        type: SHOW_SUCCESS_TOASTER_MESSAGE,
        toasterMessage        
    };
}

export function hideToasterMessage() {
    return {
        type: HIDE_TOASTER_MESSAGE
    };
}