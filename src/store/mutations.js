export const REQUEST_TASK_CREATION = "REQUEST_TASK_CREATION";
export const CREATE_TASK = "CREATE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export const requestTaskCreation = (groupID) => ({
    type: REQUEST_TASK_CREATION,
    groupID
});

export const createTask = (taskiD, groupID, ownerID) => ({
    type: CREATE_TASK,
    groupID,
    taskiD,
    ownerID
});

export const updateTask = (id, name, groupID, isComplete) => ({
    type: UPDATE_TASK,
    taskiD: id,
    isComplete,
    name,
    groupID
});

