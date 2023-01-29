const storagePrefix = 'bulletproof_react_'

const storage = {
  setToken: (token: string) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token))
  },
}

export default storage
