import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, My,Log } from './index';


const Router = () => (
    <Switch>
        <Route exact path="/YUM_HCI_Project/login" component={Log} />
        <Route exact path="/YUM_HCI_Project" component={Main} />
        <Route path="/YUM_HCI_Project/mypage" component={My}/>
    </Switch>
);

export default Router;