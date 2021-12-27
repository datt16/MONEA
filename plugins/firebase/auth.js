const signInGoogle = (context) => {
  const provider = new context.app.$fireModule.auth.GoogleAuthProvider()

  context.app.$fire.auth
    .signInWithPopup(provider)
    .then((result) => {
    })
    .catch((error) => {
      alert.error("ログイン処理でエラーが発生しました。",error)
    })
}

const signOut = (context) => {
  context.app.$fire.auth.signOut() // ... 1
}

export default (context, inject) => {
  inject('signInWithGoogle', () => signInGoogle(context))
  inject('signOut', () => signOut(context))
}
