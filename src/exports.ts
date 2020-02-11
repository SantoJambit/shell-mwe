// This file should contain all exports we want to give to the pilet.
import styled from 'styled-components';
import { createAction } from 'deox';

import './extendApi';

export type Fail1 = string;
export type Fail2 = 'hello' | 'world';

export * from './two';


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

// This produces a different issue my real shell.. not sure why not here
export const ACTION = 'ACTION';
export const updateUserMetaDataStart = createAction(ACTION);

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

export function* myGenerator() {
    yield "hello";
    return "world";
}

export function myFunc() {
    return "world";
}
