import { createAction } from 'deox/dist/create-action';

export const ACTION = 'ACTION';

// original issue with deox:
// Result: export const action1: Deox.__type;
export const action1 = createAction(ACTION);

// Taken from deox itself: 
export declare type Action<TType extends string /** extends string gets dropped */, TPayload = undefined, TMeta = undefined>
    // Ternary brackets get dropped (unsure if this makes a difference)
    = TPayload extends undefined ? (TMeta extends undefined ? {
        type: TType;
    } : {
        type: TType;
        meta: TMeta;
    }) : (TPayload extends Error ? (TMeta extends undefined ? {
        type: TType;
        payload: TPayload; // TPayload gets dropped in output
        error: true;
    } : {
        type: TType;
        payload: TPayload; // TPayload gets dropped in output
        meta: TMeta;
        error: true;
    }) : (TMeta extends undefined ? {
        type: TType;
        payload: TPayload; // TPayload does not get dropped in output
    } : {
        type: TType;
        payload: TPayload; // TPayload does not get dropped in output
        meta: TMeta;
    }));

// Somehow "TCallable extends generic function with return type Action<TType>" becomes "TCallable extends keyof Action"
export function createAction2<TType extends string, TCallable extends <_T>(...args: any[]) => Action<TType>>(type: TType, executor?: (resolve: <Payload = undefined, Meta = undefined>(payload?: Payload, meta?: Meta) => Action<TType, Payload, Meta>) => TCallable)
    : TCallable /* TCallable gets expanded. Not good. */ & {
        type: TType; // TType gets expanded.. okay in my case, but should probably stay TType.
        toString(): TType; // same here.
    } {
    return {} as any;
};

export const action2 = createAction2(ACTION);
