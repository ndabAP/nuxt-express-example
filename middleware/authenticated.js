const authenticated = ({ store, redirect }) => {
  if (!store.state.user.isUserAuthenticated) return redirect('/sign-in')
}

export default authenticated
