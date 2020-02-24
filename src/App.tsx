import React from 'react';
import { Switch, Route } from 'react-router';
import { connect } from 'react-redux';
import { Header } from './components/Header';
import {
    addTaskToOrganizer, removeTask,
    doneTask
} from './store/actions';
import { InterfaceInitialState } from './store/rootReducer';
import { Main } from './components/Main';
import { Time } from './components/Time';
import { CompletedList } from './components/CompletedList';


const App = ({ list, addTaskToOrganizer, removeTask, doneTask }: Props) => (
  <div>
    <Header />
    <Time/>
    <Switch>
      <Route path="/main" exact>
        <Main
          addTaskToOrganizer={addTaskToOrganizer}
          list={list}
          removeTask={removeTask}
          doneTask={doneTask}
        />
      </Route>
      <Route path="/tasks" exact>
        <CompletedList list={list}/>
      </Route>
    </Switch>
  </div>
);

const mapStateToProps = (state: InterfaceInitialState): IMapState => {
  return { list: state.list };
};

const mapDispatchToProps: IMapDispatch = {
  addTaskToOrganizer,
  removeTask,
  doneTask,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

type Props = IMapState & IMapDispatch

interface IMapState {
    list: InterfaceInitialState | any;
}

interface IMapDispatch {
    addTaskToOrganizer: (t: string) => void
    removeTask: (t: number) => void
    doneTask: (t: number) => void
}