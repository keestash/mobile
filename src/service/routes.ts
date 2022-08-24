export interface HashInterface {
    [details: string]: CallableFunction;
}

const routes: HashInterface = {};

routes['login'] = () => {
    return 'http://keestash.local/api.php/login/submit/'
};

routes['node/get'] = (nodeId: string) => {
    return 'http://keestash.local/api.php/password_manager/node/get/{id}/'.replace('{id}', nodeId);
};

routes['node/get/password'] = (nodeId: string) => {
    return 'http://keestash.local/api.php/password_manager/credential/get/{id}/'.replace('{id}', nodeId);
};

export default routes;