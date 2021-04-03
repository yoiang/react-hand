export interface FingerState {
    regular: number;
    alternative: number;
}
export interface FingersState {
    0: FingerState;
    1: FingerState;
    2: FingerState;
    3: FingerState;
    4: FingerState;
    [char: string]: FingerState;
}
export declare const compareFingers: (left: FingersState, right: FingersState) => boolean;
export interface Sign {
    name: string;
    description?: string;
    fingers: FingersState;
}
export declare const signs: Array<Sign>;
export declare class Signs {
    private signsByName;
    constructor();
    getSignNames(): Array<string>;
    getSignWithName(name: string): Sign | null;
    getSignWithFingers(fingers: FingersState): Sign | null;
}
declare const _default: Signs;
export default _default;
