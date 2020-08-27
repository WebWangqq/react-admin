import store from 'store'
const USER_KEY = 'user_key';
const COLLAPSED = 'collapsed';
export default {
  /*
  保存user
  */
  saveUser (user) { store.set(USER_KEY, user) },
  /*
  读取user
  */
  getUser () { return store.get(USER_KEY) || {} },
  /*
  删除user
  */
  removeUser () { store.remove(USER_KEY) },
  /**
   * 保存collapsed
   */
  saveCollapsed (collapsed) { store.set(COLLAPSED, collapsed) },
  getCollapsed () { return store.get(COLLAPSED) || false },
  removeCollapsed () { store.remove(COLLAPSED) },
}