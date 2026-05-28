import { useLogin } from '../../lib/react-query/authQueries'
import BrandLogo from '../../components/brand/BrandLogo'
import FormField from '../../components/ui/FormField'
import AlertMessage from '../../components/ui/AlertMessage'
import Button from '../../components/ui/Button'
import Heading from '../../components/ui/Heading'
import RacketsLogin from '../../assets/rackets-login.jpg'

const Login = () => {
  const { mutateAsync, isPending, isError, reset } = useLogin()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    await mutateAsync({
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      password: (form.elements.namedItem('password') as HTMLInputElement).value,
    })
  }

  return (
    <main className="bg-sand-400 flex min-h-screen items-center justify-center bg-[url('/login-bg.svg')] bg-cover bg-center px-4">
      <div className="rounded-card border-sand-500/60 grid w-full max-w-4xl grid-cols-1 overflow-hidden border shadow-sm md:grid-cols-[2fr_1.8fr]">
        <aside className="bg-ink-500 relative hidden min-h-[50dvh] flex-col justify-between md:flex">
          <img
            className="z-index-[-1] absolute top-40 left-0 h-full w-full object-cover object-center opacity-60"
            src={RacketsLogin}
            alt="Illustration of a tennis court"
          />
          <div
            className="bg-ink-500 relative flex h-full flex-col items-center justify-between gap-6 px-4 pt-10 text-center"
            style={{
              maskImage:
                'linear-gradient(to bottom, rgba(0,0,0,1) 40%, rgba(0,0,0,0.5) 80%, transparent 100%)',
            }}
          >
            <div>
              <BrandLogo />
              <div>
                <Heading
                  as="h1"
                  color="cream"
                  font="display"
                  className="bg-ink-500 mb-5 w-full px-2 py-3 text-center leading-snug font-light italic"
                >
                  The courts that match your standard.
                </Heading>
              </div>
            </div>
          </div>
          <div className="z-10 flex w-full flex-col items-center gap-4">
            <p className="text-sand-500 mb-8 inline-block w-full px-4 text-center text-xs leading-relaxed">
              Private sports venues across Europe accessible by invitation or validated{' '}
              <span className="bg-ink-400 p-1">membership only.</span>
            </p>
            <p className="text-cream-500 px-4 text-[10px] leading-relaxed">
              Member data is never shared with third parties.
            </p>
          </div>
        </aside>
        <section className="bg-cream-500 flex min-h-[50dvh] flex-1 flex-col justify-center px-8 py-10">
          <div className="mb-6 md:hidden">
            <BrandLogo />
          </div>

          <Heading as="h4">Sign in to your account</Heading>
          <p className="text-sand-600 mb-6 text-xs">For validated members only</p>

          {isError && <AlertMessage message="Incorrect email or password" />}

          <form onSubmit={handleSubmit} onChange={isError ? reset : undefined}>
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

          <p className="text-sand-500/70 mt-6 text-center text-xs">
            No access?{' '}
            <a href="#" className="text-ink-500 border-sand-400 border-b">
              Request membership
            </a>
          </p>
        </section>
      </div>
    </main>
  )
}

export default Login
