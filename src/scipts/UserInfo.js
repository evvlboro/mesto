export default class UserInfo {
  constructor(userNameSelector, userInfoSelector, userAvatarSelector) {
    this._userName = userNameSelector;
    this._userInfo = userInfoSelector;
    this._userAvatar = userAvatarSelector;
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userInfo.textContent,
      avatar: this._userAvatar
    };
  }

  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userInfo.textContent = data.about;
    this._userAvatar.src = data.avatar;
  }

}
