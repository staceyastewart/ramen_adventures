class Auth {

  static authenticateUser(token) {
    localStorage.setItem('token', token);
  }

  static idUser(id) {
    localStorage.setItem('id', id);
  }

  static isUserAuthenticated() {
    return localStorage.getItem('token') !== null;
  }
  
  static isTokenDefined() {
    return localStorage.getItem('token') !== "undefined";
  }

  static deauthenticateUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }

  static getToken() {
    return localStorage.getItem('token');
  }

}

export default Auth;