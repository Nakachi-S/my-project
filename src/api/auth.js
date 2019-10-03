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
    // ユーザー情報の取得（ゲスト・ホスト共通）
    my_info_get() {
      return cli.get('auth/my_info_get/')
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
      return cli.post('auth/guest_info_post/', data)
    },
    // 宿泊施設情報ポスト
    host_info_post(user, hotel_name, phone, address) {
      const data = {
        user,
        hotel_name,
        phone,
        address
      }
      console.log(data)
      return cli.post('auth/host_info_post/', data)
    },
    host_info_get(id) {
      return cli.get('auth/host_info_get/' + id)
    }
  }
}