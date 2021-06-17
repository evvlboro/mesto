export default class UserInfo {
  constructor(userNameSelector, userInfoSelector) {
    this._userName = userNameSelector;
    this._userInfo = userInfoSelector;
  }

  getUserInfo() {
    return {
      inputName: this._userName.textContent,
      inputAbout: this._userInfo.textContent
    };
  }

  setUserInfo(data) {
    this._userName.textContent = data.inputName;
    this._userInfo.textContent = data.inputAbout;
  }

}
