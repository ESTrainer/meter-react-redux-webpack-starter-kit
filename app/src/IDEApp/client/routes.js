import React from 'react';
import { Route } from 'react-router';
import { injectReducer } from 'MainApp/common/configureReducer';


let checkAuth = (fn, to) => {
    return (nextState, transition) => {
        if (!fn(Meteor.user(), Meteor.userId())) {
            transition({
                pathname: to,
                state: {nextPathname: nextState.location.pathname}
            });
        }
    }
};
const authenticated = (user, id) => user;
const unauthenticated = (user, id) => !user;

export const getRoutes = (store) => {

    const getApp = (nextState, cb) => {
        if (Meteor.isServer) {
            cb(null, require('IDEApp/client/app'));
        } else {
            // TODO: Need to find out whether we should using System.imports as shown in
            // https://github.com/mxstbr/react-boilerplate/blob/master/app/routes.js
            require.ensure([], function (require) {
                let ui = require('MainApp/common/ui/ui-reducer');
                let reducers = require('IDEApp/imports/app/reducers');
                injectReducer(store(), {
                    ui,
                    ...reducers
                });
                cb(null, require('IDEApp/client/app'));
            })
        }
    };

    const getChildRoutes = [
        require('IDEApp/imports/app/modules/application/routes'),
        require('IDEApp/imports/app/modules/ide/routes'),
        require('IDEApp/imports/app/modules/servers/routes')
    ];

    const getBindTracker = (nextState, cb) => {
        if (Meteor.isServer) {
            cb(null, required('../imports/app/modules/application/containers/bind-tracker'))
        } else {
            require.ensure([], function (required) {
                cb(null, require('../imports/app/modules/application/containers/bind-tracker'));
            })
        }
    };

    return (
        <Route getComponents={ getBindTracker }>
            <Route path="/app" onEnter={checkAuth(authenticated, '/signin')} getComponents={ getApp }
                   childRoutes={getChildRoutes}/>
        </Route>
    )

};