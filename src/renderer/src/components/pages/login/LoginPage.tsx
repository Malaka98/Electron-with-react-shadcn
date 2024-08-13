import Login from '../../../assets/login.png'
import LoginForm from "./components/LoginForm";
// import Logo from "@/components/common/Logo.tsx";

const LoginPage = () => {

    return (
        <>
            <div
                className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
                <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
                    <div className="absolute inset-0">
                        <img src={Login}
                             className="object-cover w-full h-full" alt=""/>
                    </div>
                    <div className="flex z-20 items-center gap-3">
                        <div className="relative z-20 flex items-center text-lg font-medium text-black">
                            {/*<Logo labelClassName="text-black"/>*/}
                        </div>

                    </div>
                    <div className="relative z-20 mt-auto">
                        <blockquote className="space-y-2">
                            <p className="text-lg text-black">
                                &ldquo;Your Ultimate Partner for Streamlined and Powerful Business Growth
                                Solutions.&rdquo;
                            </p>
                            <footer className="text-sm text-black">Powered by <a className="drop-shadow-sm font-medium"
                                                                      href="https://dlad.io">DLAD Software Solutions</a>
                            </footer>
                        </blockquote>
                    </div>
                </div>
                <LoginForm/>
            </div>
        </>
    )
}

export default LoginPage