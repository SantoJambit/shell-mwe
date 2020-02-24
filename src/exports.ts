// This file should contain all exports we want to give to the pilet.
import styled from 'styled-components';

import './extendApi';

export type Fail1 = string;
export type Fail2 = 'hello' | 'world';

export * from './two';
export * from './three';
export * from './deox';

// These two files have the exact same content.. only difference: one is .ts and one is .tsx.
// Both don't end up in the declaration. But five gives a warning 'Could not resolve type at position 0 of "/.../src/five.ts"'
export { default as four } from './four';
export { default as five } from './five';

const test1 = {
    foo: '',
    bar: ''
};

export type Test1 = typeof test1;

const test2 = {
    hello: '',
    world: ''
};

export type Test2 = typeof test2;

export interface Test extends Test1, Test2 {}

export const Styled = styled.p` 
    color: red;
`;


export type MenuType = 'user' | 'footer';

export interface MenuSettings {
    type: MenuType;
}

export const TEST_ARRAY = [
    { value: 'one', label: 'ONE' },
    { value: 'two', label: 'TWO' },
];

export const IS_TELEPHONE = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;

export interface CustomMerged {

}

export interface Merged extends CustomMerged {
    A: string;
    B: string;
}

export interface CustomMerged {
    C: string;
    D: string;
}

// The issue: `keyof Merged` becomes "A" | "B" | "C" | "D"
// Probably related to https://github.com/microsoft/TypeScript/issues/27171
export type MergedKeys = keyof Merged;

// Still happens on parameter types:
export const mergedParams = (key: MergedKeys) => false;

export function* myGenerator() {
    yield "hello";
    return "world";
}

export function myFunc() {
    return "world";
}

export type Ternary<T = undefined> = (T extends undefined ? {} : { ternary: T; });

// taken from '@types/hoist-non-react-statics'
interface REACT_STATICS {}
interface KNOWN_STATICS {}
interface MEMO_STATICS {}
interface FORWARD_REF_STATICS {}

export type NonReactStatics<
S extends React.ComponentType<any>,
C extends {
    [key: string]: true
} = {}
> = {
[key in Exclude<
    keyof S,
    S extends React.MemoExoticComponent<any>
        ? keyof MEMO_STATICS | keyof C
        : S extends React.ForwardRefExoticComponent<any>
        ? keyof FORWARD_REF_STATICS | keyof C
        : keyof REACT_STATICS | keyof KNOWN_STATICS | keyof C
>]: S[key]
};
