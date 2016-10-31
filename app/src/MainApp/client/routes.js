import { Route, IndexRoute } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Accounts, STATES } from 'meteor/std:accounts-ui';
import Main from 'Main/main';
import Index from 'Main/main-index';
import NotFound from 'Main/NotFound';
import SignIn from 'Main/SignIn';
import SignUp from 'Main/SignUp';
import SignOut from 'Main/SignOut';
import Docs from 'Main/Docs';
import { Store } from 'redux';

import { getRoutes } from 'IDEApp/client/routes';

export default class routes {

    /**
     * Only need to inject this on the CLIENT side for lazy loading
     */
    injectStore(store) {
        this.store = store;
    }

    lazyLoadStore = () => this.store;



    configure() {
        return (
        <Route>
            <Route path="/" component={ Main }>s
                <IndexRoute component={ Index }/>
                <Route path="/signin" component={ SignIn }/>
                <Route path="/signup" component={ SignUp }/>
                <Route path="/signout" component={ SignOut }/>
                <Route path="/docs" component={ Docs }/>
            </Route>
            { getRoutes(this.lazyLoadStore) }
            <Route path="*" component={ NotFound }/>
        </Route>
        );
    }


}
