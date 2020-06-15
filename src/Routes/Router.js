import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, My,Log, Page2, Page3,Blue,Blue2,Blue3,Nordic,Nordic2,Nordic3,Simple,
    Simple2,Simple3,Vintage,Vintage2,Vintage3,White,White2,White3,Wood,Wood2,Wood3} from './index';




const Router = () => (
    <Switch>
        <Route exact path="/YUM_HCI_Project/login" component={Log} />
        <Route exact path="/YUM_HCI_Project" component={Main} />
        <Route path="/YUM_HCI_Project/mypage" component={My}/>
        <Route exact path="/YUM_HCI_Project/pages/1" component={Main} />
        <Route exact path="/YUM_HCI_Project/pages/2" component={Page2} />
        <Route exact path="/YUM_HCI_Project/pages/3" component={Page3} />
        <Route exact path="/YUM_HCI_Project/blue/" component={Blue} />
        <Route exact path="/YUM_HCI_Project/blue/1" component={Blue} />
        <Route exact path="/YUM_HCI_Project/blue/2" component={Blue2} />
        <Route exact path="/YUM_HCI_Project/blue/3" component={Blue3} />
        <Route exact path="/YUM_HCI_Project/Nordic/" component={Nordic} />
        <Route exact path="/YUM_HCI_Project/Nordic/1" component={Nordic} />
        <Route exact path="/YUM_HCI_Project/Nordic/2" component={Nordic2} />
        <Route exact path="/YUM_HCI_Project/Nordic/3" component={Nordic3} />
        <Route exact path="/YUM_HCI_Project/Simple/" component={Simple} />
        <Route exact path="/YUM_HCI_Project/Simple/1" component={Simple} />
        <Route exact path="/YUM_HCI_Project/Simple/2" component={Simple2} />
        <Route exact path="/YUM_HCI_Project/Simple/3" component={Simple3} />
        <Route exact path="/YUM_HCI_Project/Vintage/" component={Vintage} />
        <Route exact path="/YUM_HCI_Project/Vintage/1" component={Vintage} />
        <Route exact path="/YUM_HCI_Project/Vintage/2" component={Vintage2} />
        <Route exact path="/YUM_HCI_Project/Vintage/3" component={Vintage3} />
        <Route exact path="/YUM_HCI_Project/White/" component={White} />
        <Route exact path="/YUM_HCI_Project/White/1" component={White} />
        <Route exact path="/YUM_HCI_Project/White/2" component={White2} />
        <Route exact path="/YUM_HCI_Project/White/3" component={White3} />
        <Route exact path="/YUM_HCI_Project/Wood/" component={Wood} />
        <Route exact path="/YUM_HCI_Project/Wood/1" component={Wood} />
        <Route exact path="/YUM_HCI_Project/Wood/2" component={Wood2} />
        <Route exact path="/YUM_HCI_Project/Wood/3" component={Wood3} />
    </Switch>
);

export default Router;