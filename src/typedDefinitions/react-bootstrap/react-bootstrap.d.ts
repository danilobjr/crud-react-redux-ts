///<reference path="../../../typings/react/react.d.ts"/>

declare module "react-bootstrap" {
    // Import React
    import React = require("react");
    
    // <Form />
    // ----------------------------------------
    interface FormProps extends React.HTMLAttributes {
        bsClass?: string;
        componentClass?: string;
        horizontal?: boolean;
        inline?: boolean;
    }
    type Form = React.ClassicComponent<FormProps, {}>;
    var Form: React.ClassicComponentClass<FormProps>;

    // <FormGroup />
    // ----------------------------------------
    interface FormGroupProps extends React.HTMLAttributes {
        bsClass?: string;
        bsSize?: 'sm' | 'small' | 'lg' | 'large';
        controlId?: string;
        validationState?: 'success' | 'warning' | 'error';
    }
    type FormGroup = React.ClassicComponent<FormGroupProps, {}>;
    var FormGroup: React.ClassicComponentClass<FormGroupProps>;
    
    // <ControlLabel />
    // ----------------------------------------
    interface ControlLabelProps extends React.HTMLAttributes {
        bsClass?: string;
        htmlFor?: string;
        srOnly?: boolean;
    }
    type ControlLabel = React.ClassicComponent<ControlLabelProps, {}>;
    var ControlLabel: React.ClassicComponentClass<ControlLabelProps>;
    
    // <FormControl.Feedback />
    // ----------------------------------------
    interface FormControlFeedbackProps extends React.HTMLAttributes {
    }
    class FormControlFeedback extends React.Component<FormControlFeedbackProps, {}> {
    }
    
    // <FormControl />
    // ----------------------------------------
    interface FormControlProps extends React.HTMLAttributes {
        bsClass?: string;
        componentClass?: string;
        id?: string;
        type?: string;
    }
    interface FormControlClass extends React.ClassicComponentClass<FormControlProps> {
        Feedback: typeof FormControlFeedback;
    }
    type FormControl = React.ClassicComponent<FormControlProps, {}>;
    var FormControl: FormControlClass;
    
    // <HelpBlock />
    // ----------------------------------------
    interface HelpBlockProps extends React.HTMLAttributes {
        bsClass?: string;
    }
    type HelpBlock = React.ClassicComponent<HelpBlockProps, {}>;
    var HelpBlock: React.ClassicComponentClass<HelpBlockProps>;
    
    // <Checkbox />
    // ----------------------------------------
    interface CheckboxProps extends React.HTMLAttributes {
        bsClass?: string;
        disabled?: boolean;
        inline?: boolean;
        validationState?: 'success' | 'warning' | 'error';
    }
    type Checkbox = React.ClassicComponent<CheckboxProps, {}>;
    var Checkbox: React.ClassicComponentClass<CheckboxProps>;
    
    // <Radio />
    // ----------------------------------------
    interface RadioProps extends React.HTMLAttributes {
        bsClass?: string;
        disabled?: boolean;
        inline?: boolean;
        validationState?: 'success' | 'warning' | 'error';
    }
    type Radio = React.ClassicComponent<RadioProps, {}>;
    var Radio: React.ClassicComponentClass<RadioProps>;
}