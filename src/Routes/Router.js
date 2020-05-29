import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Main, My,Log } from './index';


const Router = () => (
    <Switch>
        <Route exact path="http://bgy1060.github.io/login" component={Log} />
        <Route exact path="http://bgy1060.github.io/" component={Main} />
        <Route path="http://bgy1060.github.io/mypage" component={My}/>
    </Switch>
);

export default Router;