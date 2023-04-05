export interface SwitchInterface {
    checked: boolean;
    label: string;
    text: string;
    onChange?: VoidFunction;
    disabled?: boolean;
    className?: string;
}
