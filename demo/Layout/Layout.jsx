/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import type { Node } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ThemeContextProvider } from '@context/ThemeContext';
import type LocaleContext from '@context/LocaleContext';
import { LocaleContextProvider } from '@context/LocaleContext';

import GridLayout, { GridRow, GridColumn } from '@components/GridLayout';
import Scrollbar from '@components/Scrollbar';
import AppToolbar from './AppToolbar';
import SideNav from './SideNav';
import type LocaleState, { LocaleAction } from '../store/LocaleReducer/actions';
import { ChangeLanguage, PageTranslation } from '../store/LocaleReducer/actions';

import i18n from '../i18n';

function setDocumentLanguage(lng: string, dir: 'ltr' | 'rtl') {
  i18n.changeLanguage(lng);
  document.documentElement.lang = lng;
  document.dir = dir;
}

class Layout extends Component<{ [string]: mixed }> {
  constructor(props: { [string]: mixed }) {
    super(props);
    this.state = {
      expanded: true
    };
  }

  componentWillMount() {
    const { params } = this.props.match;
    this.props.ChangeLanguage(params.lng);
  }

  componentDidMount() {
    const { lng, direction } = this.props.locale.localeContext;
    setDocumentLanguage(lng, direction);
  }

  componentDidUpdate(prevProps: { [string]: mixed }) {
    const { lng, direction } = this.props.locale.localeContext;
    if (lng !== prevProps.locale.localeContext.lng) {
      setDocumentLanguage(lng, direction);
    } else {
      const { params } = this.props.match;
      if (params.lng !== lng) {
        this.props.ChangeLanguage(params.lng);
      }
    }
  }


  render(): Node {
    const { children, loading, ...props } = this.props;
    const { expanded } = this.state;

    return (
      <LocaleContextProvider value={this.props.locale.localeContext}>
        <ThemeContextProvider value={{ themeName: 'default', mode: 'ligth' }}>
          <div className={classnames('app_layout', { expanded })}>
              <AppToolbar
                expanded={expanded}
                onMenuToggle={(e: boolean) => { this.setState({ expanded: e }); }}
              />
            <SideNav expanded={expanded} />
            <div className="app_page">
              {
                loading.isLoading ? (
                  <div>
                    Loading ...
                  </div>
                ) : (
                  <Scrollbar>
                    {children}
                  </Scrollbar>
                )
              }
            </div>
          </div>
        </ThemeContextProvider>
      </LocaleContextProvider>
    );
  }
}

const mapStateToProps = (state: { [key: string]: mixed }): mixed => (state);
const mapDispatchToProps = (dispatch: mixed): mixed => ({
  ChangeLanguage: (lng: string) => { dispatch(ChangeLanguage(lng)); },
  PageTranslation: (page: string) => { dispatch(PageTranslation(page)); }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(withRouter(Layout));
