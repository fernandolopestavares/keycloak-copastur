import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
 url: "https://keycloak-stag.copastur.com.br/auth",
 realm: "Test",
 clientId: "react-test",
});

export default keycloak;