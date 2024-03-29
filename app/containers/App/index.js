/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Page from '../../components/Page';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NavigationContainer from '../../containers/NavigationContainer';

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <Page>
        <Header />
        <NavigationContainer />
        {React.Children.toArray(this.props.children)}
        <Footer />
      </Page>
    );
  }
}
