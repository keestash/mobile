import store from '../store/index'


export class Router {

    get(route: string) {
        const userData = store.getters["login/getUserData"];

        return fetch(
            route
            , {
                method: 'GET'
                , headers: {
                    'x-keestash-token': userData.token || ''
                    , 'x-keestash-user': userData.userHash || ''
                }
            }
        )

    }

}