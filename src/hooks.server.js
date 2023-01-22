import auth from 'svk-keycloak'

export const handle = auth({
  realm: 'my_realm',
  client_id : 'test-svk-keycloak',
  client_secret : 'UbptesAcF6sFqcT7PDQbxAVc8A9zci42',
  keycloak_server: 'http://localhost:8080',
  //use_cookie: false,
  //cookie_name: 'e17c17164bf9d72b565f62738bd5426f',
  login_path: '/login',
  unprotected_paths : [ '/' ],
  //scopes: ''
})