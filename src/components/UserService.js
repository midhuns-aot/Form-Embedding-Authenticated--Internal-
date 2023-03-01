import Keycloak from "keycloak-js";
let KeycloakData;

const initKeycloak = (kcJson, callBack) => {
  KeycloakData = new Keycloak(kcJson);
  KeycloakData.init({
    onLoad: "check-sso",
    promiseType: "native",
    silentCheckSsoRedirectUri:
      window.location.origin + "/silent-check-sso.html",
    pkceMethod: "S256",
    checkLoginIframe: false,
  })
    .then((response) => {
      if (response) {
        console.log(response);
        callBack(true);
      } else {
        console.log(KeycloakData, "hai");
        console.log(response);
        KeycloakData.login();
      }
    })
    .catch((error) => {
      console.log("error", error);
    });
};

const userLogout = () => {
  KeycloakData?.logout();
};

const UserService = {
  initKeycloak,
  userLogout,
};

export default UserService;
