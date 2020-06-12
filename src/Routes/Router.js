import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, My,Log, Page2, Page3} from './index';


const Router = () => (
    <Switch>
        <Route exact path="/YUM_HCI_Project/login" component={Log} />
        <Route exact path="/YUM_HCI_Project" component={Main} />
        <Route path="/YUM_HCI_Project/mypage" component={My}/>
        <Route exact path="/YUM_HCI_Project/pages/1" component={Main} />
        <Route exact path="/YUM_HCI_Project/pages/2" component={Page2} />
        <Route exact path="/YUM_HCI_Project/pages/3" component={Page3} />
    </Switch>
);

export default Router;