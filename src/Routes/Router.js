import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, My } from './index';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/mypage" component={My}/>
    </Switch>
);

export default Router;