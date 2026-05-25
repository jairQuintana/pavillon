import { useLogin } from '../../lib/react-query/authQueries'

const Login = () => {
  const { mutateAsync } = useLogin()
  return (
    <main>
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          await mutateAsync({
            email: (e.target as HTMLFormElement).email.value,
            password: (e.target as HTMLFormElement).password.value,
          })
        }}
      >
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
      </form>
    </main>
  )
}

export default Login
