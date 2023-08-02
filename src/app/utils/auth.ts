export const isAuthenticated = () => {
  const authenticated = sessionStorage.getItem('authenticated')
  return authenticated === 'true'
}
