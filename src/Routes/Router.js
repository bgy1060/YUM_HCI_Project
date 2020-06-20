import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, My,Log,Regi, Page2, Page3,Blue,Blue2,Blue3,Nordic,Nordic2,Nordic3,Simple,
    Simple2,Simple3,Vintage,Vintage2,Vintage3,White,White2,White3,Wood,Wood2,Wood3,Main_sort,Page2_sort,Page3_sort} from './index';




const Router = () => (
    <Switch>
        <Route exact path="/YUM_HCI_Project/login" component={Log} />
        <Route exact path="/YUM_HCI_Project/register" component={Regi} />
        <Route exact path="/YUM_HCI_Project" component={Main} />
        <Route path="/YUM_HCI_Project/mypage" component={My} />
        <Route exact path="/YUM_HCI_Project/pages/1/" component={Main} />
        <Route exact path="/YUM_HCI_Project/pages/2/" component={Page2} />
        <Route exact path="/YUM_HCI_Project/pages/2/popular/" component={Page2_sort} />
        <Route exact path="/YUM_HCI_Project/pages/3/" component={Page3} />
        <Route exact path="/YUM_HCI_Project/pages/3/popular/" component={Page3_sort} />
        <Route exact path="/YUM_HCI_Project/blue/" component={Blue} />
        <Route exact path="/YUM_HCI_Project/blue/1" component={Blue} />
        <Route exact path="/YUM_HCI_Project/blue/2" component={Blue2} />
        <Route exact path="/YUM_HCI_Project/blue/3" component={Blue3} />
        <Route exact path="/YUM_HCI_Project/nordic/" component={Nordic} />
        <Route exact path="/YUM_HCI_Project/nordic/1" component={Nordic} />
        <Route exact path="/YUM_HCI_Project/nordic/2" component={Nordic2} />
        <Route exact path="/YUM_HCI_Project/nordic/3" component={Nordic3} />
        <Route exact path="/YUM_HCI_Project/simple/" component={Simple} />
        <Route exact path="/YUM_HCI_Project/simple/1" component={Simple} />
        <Route exact path="/YUM_HCI_Project/simple/2" component={Simple2} />
        <Route exact path="/YUM_HCI_Project/simple/3" component={Simple3} />
        <Route exact path="/YUM_HCI_Project/vintage/" component={Vintage} />
        <Route exact path="/YUM_HCI_Project/vintage/1" component={Vintage} />
        <Route exact path="/YUM_HCI_Project/vintage/2" component={Vintage2} />
        <Route exact path="/YUM_HCI_Project/vintage/3" component={Vintage3} />
        <Route exact path="/YUM_HCI_Project/white/" component={White} />
        <Route exact path="/YUM_HCI_Project/white/1" component={White} />
        <Route exact path="/YUM_HCI_Project/white/2" component={White2} />
        <Route exact path="/YUM_HCI_Project/white/3" component={White3} />
        <Route exact path="/YUM_HCI_Project/wood/" component={Wood} />
        <Route exact path="/YUM_HCI_Project/wood/1" component={Wood} />
        <Route exact path="/YUM_HCI_Project/wood/2" component={Wood2} />
        <Route exact path="/YUM_HCI_Project/wood/3" component={Wood3} />
    </Switch>
);

export default Router;