/* eslint-disable  */

import React, { Component } from 'react';

import Avatar from '../src/components/Avatar';
import Icon, { ToggleIcon } from '../src/components/Icon';
import Button from '../src/components/Button';
import Divider from '../src/components/Divider';
import Card, { CardTitle, CardSection, CardParagraph } from '../src/components/Card';
import Scrollbar from '../src/components/Scrollbar';
import Collapse from '../src/components/Collapse';
import Toolbar from '../src/components/Toolbar';
import GridList, { GridListTile } from '../src/components/GridList';
import Nav, { TabsNav } from '../src/components/Nav';
import Form, { TextField, TextArea, Select, Checkbox, CheckboxGroup, Radio } from '../src/components/Form';
import GridLayout, { GridRow, GridColumn } from '../src/components/GridLayout';
import Menu, { MenuItem } from '../src/components/Menu';
import Dropdown from '../src/components/Dropdown';

import { ThemeContextProvider } from '@context/ThemeContext';
import { LocaleContextProvider } from '@context/LocaleContext';

import Layout from './Layout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: true,
      isMainMenuOpen: false,
      ratingVal: 0,
      boolVal: true,
      boolval2: true,
      value: undefined,
      localeContext: {
        lang: 'en',
        direction: 'rtl',
        currency: 'USD',
        timeFormat: 'hh:mm',
        dateFormat: 'dd/mm/yyy'
      }

    };
    this.index = 0;

    this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
    this.handlePrimaryMenuToggle = this.handlePrimaryMenuToggle.bind(this);
    this.getNext = this.getNext.bind(this);
  }

  componentDidMount() {
    document.dir = this.state.localeContext.direction;
  }
  getClassList() {
    const classes = ['app_root'];
    if (this.state.isMainMenuOpen) classes.push('is-expanded');
    return classes;
  }

  handleMenuButtonClick() {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
  }
  handlePrimaryMenuToggle(event) {
    this.setState({ isMainMenuOpen: !this.state.isMainMenuOpen });
  }

  getNext() {
    this.index += 1;
    return this.index;
  }
  render() {
    return (
      <LocaleContextProvider value={this.state.localeContext}>
        <ThemeContextProvider value={{ themeName: 'default', mode: 'ligth' }}>
          <Layout>
            <GridLayout>
              <GridRow>
                <GridColumn span={4}>
                  <Card>
                    <CardTitle title="اللغه العربيه" subheader="اللغة العربية ذات أهمية قصوى لدى المسلمين، فهي لغة القرآن الكريم." />
                    <CardParagraph>
                      <p>
اللُّغَة العَرَبِيّة هي أكثر اللغات تحدثاً ونطقاً ضمن مجموعة اللغات السامية، وإحدى أكثر اللغات انتشاراً في العالم، يتحدثها أكثر من 467 مليون نسمة،[4](1) ويتوزع متحدثوها في الوطن العربي، بالإضافة إلى العديد من المناطق الأخرى المجاورة كالأحواز وتركيا وتشاد ومالي والسنغال وإرتيريا و إثيوبيا و جنوب السودان و إيران. اللغة العربية ذات أهمية قصوى لدى المسلمين، فهي عندهم لغة مقدسة إذ أنها لغة القرآن، وهي لغة الصلاة وأساسية في القيام بالعديد من العبادات والشعائر الإسلامية.[5][6]
العربية هي أيضاً لغة شعائرية رئيسية لدى عدد من الكنائس المسيحية في الوطن العربي، كما كتبت بها كثير من أهم الأعمال الدينية والفكرية اليهودية في العصور الوسطى. ارتفعت مكانة اللغة العربية أثّر انتشار الإسلام بين الدولا إذ أصبحت لغة السياسة والعلم والأدب لقرون طويلة في الأراضي التي حكمها المسلمون. وللغة العربية تأثيراً مباشراً وغير مباشر على كثير من اللغات الأخرى في العالم الإسلامي، كالتركية والفارسية والأمازيغية والكردية والأردوية والماليزية والإندونيسية والألبانية وبعض اللغات
الإفريقية الأخرى مثل الهاوسا والسواحيلية والتجرية والأمهرية و الصومالية، وبعض اللغات الأوروبية وخاصةً المتوسطية كالإسبانية والبرتغالية والمالطية والصقلية. كما أنها تُدرَّس بشكل رسمي أو غير رسمي في الدول الإسلامية والدول الإفريقية المحاذية للوطن العربي.
                      </p>
                    </CardParagraph>
                  </Card>
                </GridColumn>
                <GridColumn span={4}>
                  <Scrollbar style={{ width: '300px', height: "100px" }} >
                    <div style={{ width: "450px", padding: "10px" }}>
                      <p>Delightful remarkably mr on announcing themselves entreaties favourable. About to in so terms voice at. Equal an would is found seems of. The particular friendship one sufficient terminated frequently themselves. It more shed went up is roof if loud case. Delay music in lived noise an. Beyond genius really enough passed is up.</p>
                      <p>Style never met and those among great. At no or september sportsmen he perfectly happiness attending. Depending listening delivered off new she procuring satisfied sex existence. Person plenty answer to exeter it if. Law use assistance especially resolution cultivated did out sentiments unsatiable. Way necessary had intention happiness but september delighted his curiosity. Furniture furnished or on strangers neglected remainder engrossed.</p>
                      <p>If wandered relation no surprise of screened doubtful. Overcame no insisted ye of trifling husbands. Might am order hours on found. Or dissimilar companions friendship impossible at diminution. Did yourself carriage learning she man its replying. Sister piqued living her you enable mrs off spirit really. Parish oppose repair is me misery. Quick may saw style after money mrs.</p>
                    </div>
                  </Scrollbar>
                </GridColumn>
              </GridRow>
            </GridLayout>
          </Layout>
        </ThemeContextProvider>
      </LocaleContextProvider>
    );
  }
}
export default App;
