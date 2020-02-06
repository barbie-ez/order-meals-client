import { take, put, select } from 'redux-saga/effects'
import uuid from 'uuid';
import axios from 'axios';

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

        console.info("Got response", data);

        yield put(mutation.createTask(data.id, data.name, data.comments, groupID, data.ownerId));


    }
}