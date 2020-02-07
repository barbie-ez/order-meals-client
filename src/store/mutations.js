export const REQUEST_TASK_CREATION = "REQUEST_TASK_CREATION";
export const CREATE_TASK = "CREATE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const REQUEST_AUTHENTICATE_USER = "REQUEST_AUTHENTICATE_USER";
export const PROCESSING_AUTHENTICATE_USER = "PROCESSING_AUTHENTICATE_USER";
export const AUTHENTICATING = "AUTHENTICATING";
export const AUTHENTICATED = "AUTHENTICATED";
export const NOT_AUTHENTICATED = "NOT_AUTHENTICATED";
export const SET_STATE = "SET_STATE";


export const requestAutenticateUser = (username, password) => ({
    type: REQUEST_AUTHENTICATE_USER,
    username,
    password
});

export const processingAutenticateUser = (status = AUTHENTICATING, session = null) => ({
    type: PROCESSING_AUTHENTICATE_USER,
    session,
    authenticated: status
});



export const requestTaskCreation = (groupID, name) => ({
    type: REQUEST_TASK_CREATION,
    groupID,
    name
});

export const createTask = (taskiD, name, comments, groupID, ownerID) => ({
    type: CREATE_TASK,
    groupID,
    taskiD,
    ownerID,
    name,
    comments
});

export const updateTask = (id, name, groupID, isComplete) => ({
    type: UPDATE_TASK,
    taskiD: id,
    isComplete,
    name,
    groupID
});


export const setState = (state = {}) => ({
    type: SET_STATE,
    state
});

