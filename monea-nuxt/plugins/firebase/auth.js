const signInGoogle = (context) => {
  const provider = new context.app.$fireModule.auth.GoogleAuthProvider()

  context.app.$fire.auth
    .signInWithPopup(provider)
    .then((result) => {
      return context.redirect('/actions')
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(error)
    })
}

const signOut = (context) => {
  context.app.$fire.auth.signOut() // ... 1
  return context.redirect('/') // ... 2
}

export default (context, inject) => {
  inject('signInWithGoogle', () => signInGoogle(context))
  inject('signOut', () => signOut(context))
}
