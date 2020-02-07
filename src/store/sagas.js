import { take, put, select } from 'redux-saga/effects'
import uuid from 'uuid';
import axios from 'axios';
import { history } from './history';
import * as mutation from './mutations';

const url = "https://localhost:5001/api/";

export function* taskCreationSaga() {
    while (true) {
        const { groupID, name } = yield take(mutation.REQUEST_TASK_CREATION);
        const ownerID = "U1";
        const taskID = uuid();

        const { data } = yield axios.post(url + 'Task', {
            name,
            comments: "",
            isComplete: false
        });
        //console.info("Got response", data);
        yield put(mutation.createTask(data.id, data.name, data.comments, groupID, data.ownerId));  // updates the redux store in our application

    }
}

export function* taskUpdateSaga() {
    while (true) {
        const task = yield take(mutation.UPDATE_TASK);
        axios.put(url + 'Task', {
            id: task.taskiD,
            name: task.name,
            //groupId: task.groupID,
            comments: "",
            isComplete: task.isComplete
        })
    }
}


export function* userAuthenticationSaga() {
    while (true) {
        const { username, password } = yield take(mutation.REQUEST_AUTHENTICATE_USER);
        try {
            const { data } = yield axios.post(url + 'Users/login', { username, password });
            if (!data) {
                throw new Error();
            }

            if (data.userId == null) {
                yield put(mutation.processingAutenticateUser(mutation.NOT_AUTHENTICATED));
            } else {
                console.log('Authenticated', data);
                console.log('state', data.state);
                yield put(mutation.setState(data.state));
                yield put(mutation.processingAutenticateUser(mutation.AUTHENTICATED))
                history.push('/dashboard');
            }

        } catch (e) {
            console.log('cant authenticate', e);
            yield put(mutation.processingAutenticateUser(mutation.NOT_AUTHENTICATED))
        }
    }


}
