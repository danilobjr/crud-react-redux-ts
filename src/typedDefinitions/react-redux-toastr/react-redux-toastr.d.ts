declare module 'react-redux-toastr' {
    import React = require("react");
    import Redux = require("redux");    
    
    interface IConfirmOptionsProp {
        okText?: string;
        cancelText?: string;
    }

    // <ReduxToastr />
    // ----------------------------------------
    interface ReduxToastrProps {
        // Optional
        timeOut?: number;
        newestOnTop?: boolean;
        position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
        confirmOptions?: IConfirmOptionsProp;
    }
    type ReduxToastr = React.ClassicComponent<ReduxToastrProps, {}>;
    var ReduxToastr: React.ClassicComponentClass<ReduxToastrProps>;    
    
    interface IToastrMessageOptions {
        timeOut?: number;
        onShowComplete?: () => void;
        onHideComplete?: () => void;
        component?: React.ClassicComponent<any, any>;
    }
    
    interface IToasterOptions extends IToastrMessageOptions {
        icon?: string;
    }
    
    interface IToastrConfirmOptions {
        onOk?: () => void;
        onCancel?: () => void;
    }    
    
    interface ToastrMethod extends Function {
        (message: string, title?: string, options?: IToasterOptions): void;
    }
    
    interface MessageMethod extends Function {
        (message: string, title?: string, options?: IToastrMessageOptions): void;
    }
    
    interface ConfirmMethod extends Function {
        (message: string, options?: IToastrConfirmOptions): void;
    }
    
    interface Toastr {
        success: ToastrMethod;
        info: ToastrMethod;
        warning: ToastrMethod;
        error: ToastrMethod;
        message: MessageMethod;
        clean: () => void;
        confirm: ConfirmMethod;
    }
    
    const reducer: Redux.Reducer;
    const toastr: Toastr;
    
    export default ReduxToastr;
    
    export {
        toastr,
        reducer,
        IConfirmOptionsProp,
        IToastrMessageOptions,
        IToasterOptions,
        IToastrConfirmOptions        
    }        
}