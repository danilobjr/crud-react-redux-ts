import { ToasterMessageType } from './ToasterMessageType';

export interface IMessage {
    text: string;
    type: ToasterMessageType;
}