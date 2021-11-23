const signInGoogle = (context) => {
  const provider = new context.app.$fireModule.auth.GoogleAuthProvider()

  context.app.$fire.auth
    .signInWithPopup(provider)
    .then((result) => {
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error)
    })
}

const signOut = (context) => {
  context.app.$fire.auth.signOut() // ... 1
}

export default (context, inject) => {
  inject('signInWithGoogle', () => signInGoogle(context))
  inject('signOut', () => signOut(context))
}
