import { useLogin } from '../../lib/react-query/authQueries'
import BrandLogo from '../../components/brand/BrandLogo'
import FormField from '../../components/ui/FormField'
import AlertMessage from '../../components/ui/AlertMessage'
import Button from '../../components/ui/Button'

const Login = () => {
  const { mutateAsync, isPending, isError, reset } = useLogin()

  return (
    <main className="bg-sand-400 flex min-h-screen items-center justify-center bg-[url('/login-bg.svg')] bg-cover bg-center px-4">
      <div className="bg-cream-500 border-sand-500 border-opacity-60 rounded-card w-full max-w-md border px-8 py-10">
        <BrandLogo />

        <br className="mb-7" />
        <hr className="border-sand-300 mb-7" />

        <h2 className="text-ink-500 text-md mb-6 text-center font-semibold tracking-[1px] uppercase">
          Sign in to your account
        </h2>

        {isError && <AlertMessage message="Invalid email or password" />}

        <form
          onChange={() => {
            if (isError) reset()
          }}
          onSubmit={async (e) => {
            e.preventDefault()
            const form = e.target as HTMLFormElement
            await mutateAsync({
              email: form.email.value,
              password: form.password.value,
            })
          }}
        >
          <FormField
            label="Email"
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            hasError={isError}
          />
          <FormField
            label="Password"
            type="password"
            name="password"
            placeholder="••••••••"
            required
            hasError={isError}
          />

          <Button type="submit" isLoading={isPending} loadingText="Signing in...">
            Sign in
          </Button>
        </form>

        <p className="text-sand-500 mt-6 text-center text-xs">
          Don't have an account?{' '}
          <a href="#" className="text-ink-500 border-sand-500 border-b">
            Request access
          </a>
        </p>
      </div>
    </main>
  )
}

export default Login
