import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from '../server/defaultState';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as sagas from './sagas.mock';
import { taskCreationSaga } from './sagas.mock';
import * as mutations from './mutations';
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers(
        {
            tasks(tasks = defaultState.tasks, action) {//basic reducer pattern but more customised
                switch (action.type) {
                    case mutations.CREATE_TASK:
                        console.log(action)
                        return [...tasks, {
                            id: action.taskiD,
                            name: "New task",
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
            comments(comments = defaultState.comments) {
                return comments;
            },
            groups(groups = defaultState.groups) {
                return groups;
            },
            users(users = defaultState.users) {
                return users;
            },

        }),
    applyMiddleware(createLogger(), sagaMiddleware)
);
for (let saga in sagas) {
    sagaMiddleware.run(taskCreationSaga);
}