# test-svk-keycloak

This is a SvelteKit demo project fot [svk-keyclok](https://www.npmjs.com/package/svk-keycloak) npm package.

## Install

```bash
git clone https://github.com/kitinon/test-svk-keycloak.git
cd test-svk-keycloak
npm install

#run a demo Keycloak server with docker
npm run keycloak

npm run dev -- --open
## Login username: scott, password: tiger.
```
If a broswer fails to open, goto [http://localhost:5173](http://localhost:5173).

## Keycloak server
The Keycloak server in docker is accessible at http://localhost:8080.
(username: admin, password: tiger)