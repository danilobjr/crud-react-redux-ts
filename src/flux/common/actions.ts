import { IMessage } from './../../models/IMessage';
import { ToasterMessageType } from './../../models/ToasterMessageType';

export const SHOW_SUCCESS_MESSAGE = 'SHOW_SUCCESS_MESSAGE';

export function showSuccessMessage(text: string) {
    const toasterMessage: IMessage = {
        text,
        type: ToasterMessageType.Success
    };
    
    return {
        type: SHOW_SUCCESS_MESSAGE,
        toasterMessage
    };
}