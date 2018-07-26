/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import type { Node } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { ThemeContextProvider } from '@context/ThemeContext';
import type LocaleContext from '@context/LocaleContext';
import { LocaleContextProvider } from '@context/LocaleContext';

import GridLayout, { GridRow, GridColumn } from '@components/GridLayout';

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
      top: 0
    };
  }

  componentWillMount() {
    console.dir(this.props);
    const { params } = this.props.match;
    this.props.ChangeLanguage(params.lng);
  }

  componentDidMount() {
    const { lng, direction } = this.props.locale.localeContext;
    setDocumentLanguage(lng, direction);
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    this.setTop(top);
    window.onscroll = () => {
      top = document.documentElement.scrollTop || document.body.scrollTop;
      this.setTop(top);
    };
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

  setTop(top: number) {
    this.setState({ top });
  }

  render(): Node {
    const { children, loading, ...props } = this.props;
    const { top } = this.state;

    return (
      <LocaleContextProvider value={this.props.locale.localeContext}>
        <ThemeContextProvider value={{ themeName: 'default', mode: 'ligth' }}>
          <GridLayout className="app_layout">
            <GridRow>
              <GridColumn span="grow" style={{ height: '160px' }}>
                <AppToolbar stage={
                    (top > 0) ? 'scroll' : 'top'} />
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn span={2}>
                <SideNav />
              </GridColumn>
              <GridColumn span="grow">
                {
                  loading.isLoading ? (
                    <div>
                      Loading ...
                    </div>
                  ) : children
                }
              </GridColumn>
            </GridRow>
          </GridLayout>
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
