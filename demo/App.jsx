/* eslint-disable  */

import React, { Component } from 'react';

import Avatar from '../src/components/Avatar/Avatar';
import Scrollbar from '../src/components/Scrollbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSidebarOpen: true,
      isMainMenuOpen: false,
      ratingVal: 0
    };

    this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
    this.handlePrimaryMenuToggle = this.handlePrimaryMenuToggle.bind(this);
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
  render() {
    const classes = this.getClassList();
    return (
      <div id="DEMO_APP">
        <div className="container" style={{ width: "300px", height:"580px", display:'flex', flexDirection:'row' }}>
          <Scrollbar>
          <h2>Possession her thoroughly remarkably terminated man continuing</h2>

            <p>Comfort reached gay perhaps chamber his six detract besides add. Moonlight newspaper up he it enjoyment agreeable depending. Timed voice share led his widen noisy young. On weddings believed laughing although material do exercise of. Up attempt offered ye civilly so sitting to. She new course get living within elinor joy. She her rapturous suffering concealed.</p>

            <p>Ask especially collecting terminated may son expression. Extremely eagerness principle estimable own was man. Men received far his dashwood subjects new. My sufficient surrounded an companions dispatched in on. Connection too unaffected expression led son possession. New smiling friends and her another. Leaf she does none love high yet. Snug love will up bore as be. Pursuit man son musical general pointed. It surprise informed mr advanced do outweigh.</p>

            <p>Resources exquisite set arranging moonlight sex him household had. Months had too ham cousin remove far spirit. She procuring the why performed continual improving. Civil songs so large shade in cause. Lady an mr here must neat sold. Children greatest ye extended delicate of. No elderly passage earnest as in removed winding or.</p>

            <p>Boy favourable day can introduced sentiments entreaties. Noisier carried of in warrant because. So mr plate seems cause chief widen first. Two differed husbands met screened his. Bed was form wife out ask draw. Wholly coming at we no enable. Offending sir delivered questions now new met. Acceptance she interested new boisterous day discretion celebrated.</p>

            <p>Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished. Demesne new manners savings staying had. Under folly balls death own point now men. Match way these she avoid see death. She whose drift their fat off.</p>

            <p>In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put. Led all visitor musical calling nor her. Within coming figure sex things are. Pretended concluded did repulsive education smallness yet yet described. Had country man his pressed shewing. No gate dare rose he. Eyes year if miss he as upon.</p>

            <p>Over fact all son tell this any his. No insisted confined of weddings to returned to debating rendered. Keeps order fully so do party means young. Table nay him jokes quick. In felicity up to graceful mistaken horrible consider. Abode never think to at. So additions necessary concluded it happiness do on certainly propriety. On in green taken do offer witty of.</p>
            <p>Advice me cousin an spring of needed. Tell use paid law ever yet new. Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.</p>
            <p>Unwilling sportsmen he in questions september therefore described so
            . Attacks may set few believe moments was. Re
            asonably how possession shy way introduced
             age inquietude. Missed he engage no exete
             r of. Still tried means we aware order am
             ong on. Eldest father can design tastes d
             id joy settle. Roused future he ye an mar
             ked. Arose mr rapid in so vexed words.
             Gay welcome led add lasting chiefly say
             looking.</p>
          </Scrollbar>
          <Scrollbar>
          <h2>Possession her thoroughly remarkably terminated man continuing</h2>

            <p>Over fact all son tell this any his. No insisted confined of weddings to returned to debating rendered. Keeps order fully so do party means young. Table nay him jokes quick. In felicity up to graceful mistaken horrible consider. Abode never think to at. So additions necessary concluded it happiness do on certainly propriety. On in green taken do offer witty of.</p>
            <p>Advice me cousin an spring of needed. Tell use paid law ever yet new. Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.</p>
            <p>Unwilling sportsmen he in questions september therefore described so
            . Attacks may set few believe moments was. Re
            asonably how possession shy way introduced
             age inquietude. Missed he engage no exete
             r of. Still tried means we aware order am
             ong on. Eldest father can design tastes d
             id joy settle. Roused future he ye an mar
             ked. Arose mr rapid in so vexed words.
             Gay welcome led add lasting chiefly say
             looking.</p>
          </Scrollbar>
          <Scrollbar>
          <h2>Possession her thoroughly remarkably terminated man continuing</h2>
          </Scrollbar>

        </div>
      </div>
    );
  }
}
export default App;
