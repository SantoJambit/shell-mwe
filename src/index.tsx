import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import {
    createInstance,
    extendSharedDependencies,
    Piral,
} from 'piral-core';
import { createBrowserHistory } from 'history';

import { extendApi } from './extendApi';

const getDependencies = extendSharedDependencies({
    'shell-mwe': require('./exports'),
});

function createApp() {
    try {
        const Dummy = () => <div/>;
        const history = createBrowserHistory();

        const instance = createInstance({
            getDependencies,
            requestPilets: () => Promise.resolve([]),
            extendApi: extendApi(),
            state: {
                components: {
                    LoadingIndicator: Dummy,
                    ErrorInfo: Dummy,
                    Router: (props) => <Router history={history}>{props.children}</Router>,
                    Layout: Dummy,
                },
            },
        });

        return <Piral instance={instance} />;
    } catch (error) {
        return <div />;
    }
}

ReactDOM.render(createApp(), document.querySelector('#app'));
