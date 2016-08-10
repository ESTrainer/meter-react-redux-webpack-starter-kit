import React, { PropTypes} from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Component from 'react-pure-render/component';
import {Grid, Row, Col} from 'react-bootstrap';
import start from '../../common/app/start';
import Header from './layouts/Header';
import Footer from './layouts/Footer';



// Styles
import '../stylesheets/main.less';



@connect((state)=> state, null)
export default class App extends Component {

    static propTypes = {
        children: PropTypes.object.isRequired,
        currentLocale: PropTypes.string.isRequired,
    };

    create(menu) {
        return createSidebarButtons(menu);
    }
    render() {
        const { appReducer, children, currentLocale, location } = this.props;
        console.log(this.props);

      //  const className = appReducer.ui.isSideMenuOpen ? 'margin-left-60' : 'margin-left-60';
        //<Sidebar ui={appReducer.ui} mainMenu={this.create(MainMenu)}/>
        //<Ide />
        return (<div className="container">
                <Header />
                {children}
                <Footer />

            </div>
        )
    }

}

App = start(App);

export default connect(state => ({
    currentLocale: state.intl.currentLocale,
}))(App);
