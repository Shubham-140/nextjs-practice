
export default function Login() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black px-6 py-12">

            <div className="w-full max-w-md">

                <a href="/" className="mb-12 block text-center text-2xl font-bold tracking-tight text-white">
                    Shubham<span className="text-white/40">.</span>
                </a>

                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-semibold tracking-tight text-white">
                        Welcome back
                    </h1>
                    <p className="mt-3 text-sm text-white/40">
                        Enter your details to access your account.
                    </p>
                </div>

                <form className="space-y-6">

                    <div>
                        <label className="mb-2 block text-sm font-medium text-white/80">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/50"
                        />
                    </div>

                    <div>
                        <div className="mb-2 flex items-center justify-between">
                            <label className="text-sm font-medium text-white/80">
                                Password
                            </label>
                            <a href="/forgot-password" className="text-xs text-white/40 transition hover:text-white">
                                Forgot password?
                            </a>
                        </div>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/50"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="remember"
                            className="h-4 w-4 accent-white"
                        />
                        <label htmlFor="remember" className="text-xs text-white/50">
                            Remember me
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded-xl bg-white py-3.5 text-sm font-semibold text-black transition hover:bg-white/80"
                    >
                        Sign in <span className="ml-1">→</span>
                    </button>

                </form>

                <p className="mt-8 text-center text-sm text-white/40">
                    Don't have an account?{" "}
                    <a href="/register" className="font-medium text-white transition hover:text-white/60">
                        Create account
                    </a>
                </p>

                <p className="mt-12 text-center text-[10px] uppercase tracking-[0.25em] text-white/20">
                    Secure authentication
                </p>

            </div>
        </div>
    )
}
