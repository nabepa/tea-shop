export default class AuthService {
  constructor(http, tokenStorage) {
    this.http = http;
    this.tokenStorage = tokenStorage;
  }

  async signUp(email, password, name, url) {
    const data = await this.http.fetch('/auth/signup', {
      method: 'POST',
      body: JSON.stringify({ email, password, name, url }),
    });
    this.tokenStorage.saveToken(data.token);
    return data;
  }

  async signIn(email, password) {
    const data = await this.http.fetch('/auth/signin', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    this.tokenStorage.saveToken(data.token);
    return data;
  }

  async me() {
    const token = this.tokenStorage.getToken();
    return this.http.fetch('/auth/me', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  async signOut() {
    this.tokenStorage.clearToken();
  }
}
