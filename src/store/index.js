import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from '../server/defaultState';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as sagas from './sagas';
import { taskCreationSaga } from './sagas';
import * as mutations from './mutations';
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers(
        {
            session(usersession = defaultState.session || {}, action) {
                let { type, authenticated, session } = action;
                switch (type) {
                    case mutations.SET_STATE:
                        return { ...usersession, id: action.state.session.id };
                    case mutations.REQUEST_AUTHENTICATE_USER:
                        return { ...usersession, authenticated: mutations.AUTHENTICATING };

                    case mutations.PROCESSING_AUTHENTICATE_USER:
                        return { ...usersession, authenticated };
                    default:
                        return usersession
                }

            },
            tasks(tasks = [], action) {//basic reducer pattern but more customised
                switch (action.type) {
                    case mutations.SET_STATE:
                        return action.state.tasks;
                    case mutations.CREATE_TASK:
                        console.log(action)
                        return [...tasks, {
                            id: action.taskiD,
                            name: action.name,
                            group: action.groupID,
                            owner: action.ownerID,
                            isComplete: false
                        }]
                    case mutations.UPDATE_TASK:
                        console.log(action);
                        return tasks.map(task => {
                            return (task.id === action.taskiD ?
                                {
                                    ...task,
                                    isComplete: action.isComplete,
                                    name: action.name,
                                    group: action.groupID
                                }
                                : task)
                        })


                }
                return tasks;
            },
            comments(comments = []) {
                return comments;
            },
            groups(groups = [], action) {
                switch (action.type) {
                    case mutations.SET_STATE:
                        return action.state.groups
                }
                return groups;
            },
            users(users = []) {
                return users;
            },

        }),
    applyMiddleware(createLogger(), sagaMiddleware)
);
for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}