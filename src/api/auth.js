/* eslint-disable */
// エンドポイント
export default function (cli) {
  return {
    // ログイン
    login(email, password) {
      const data = {
        email,
        password,
      }
      return cli.post('auth/login/', data)
    },
    // サインアップ（ゲスト用）
    signup_guest(email, password) {
      const data = {
        email,
        password,
      }
      return cli.post('auth/register_guest/', data)
    },
    // サインアップ（ホスト用）
    signup_host(email, password) {
      const data = {
        email,
        password,
      }
      return cli.post('auth/register_host/', data)
    },
    // 宿泊台帳ポスト
    guest_info_post(user, country, birthday, address, gender) {
      const data = {
        user,
        country,
        birthday,
        address,
        gender
      }
      return cli.post('auth/guest_info_post', data)
    }
  }
}