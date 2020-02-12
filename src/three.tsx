import React from 'react';

// When specifying a type, MyComponent becomes `any`. If I leave it out, it gets an interface-function signature
export const MyComponent: React.FunctionComponent<{}> = () => <div />;
