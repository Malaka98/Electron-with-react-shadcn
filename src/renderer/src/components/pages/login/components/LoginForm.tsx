import {Button} from "../../../ui/button";
import {cn} from "../../../../lib/utils";
import {Input} from "../../../ui/input";
import {Label} from "../../../ui/label";
import React from "react";
import {useNavigate} from "react-router-dom";


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
}

const LoginForm = ({className, ...props}: UserAuthFormProps) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="lg:p-8">
                <div
                    className="mx-auto flex h-screen md:h-full flex-col justify-center space-y-6 w-72 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">
                            Welcome back, let's go in!
                        </h1>
                        {/*<p className="text-sm text-muted-foreground">*/}
                        {/*    Enter your email below to create your account*/}
                        {/*</p>*/}
                    </div>
                    <div className={cn("grid gap-6", className)} {...props}>
                        <form className="grid gap-3">
                            <div className="grid gap-3">
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="email">Email</Label>
                                    <Input type="email" id="email" placeholder="Email"/>
                                </div>
                                <div className="relative">
                                    <div className="grid w-full max-w-sm items-center gap-1.5">
                                        <Label htmlFor="email">Email</Label>
                                        <Input type="email" id="email" placeholder="Email"/>
                                    </div>
                                </div>
                            </div>

                            <Button type="button" onClick={() => navigate('/home')} className="bg-cyan-900 hover:bg-cyan-700">
                                {/*{isLoading && (*/}
                                {/*    <Loader2 className="mr-2 h-4 w-4 animate-spin"/>*/}
                                {/*)}*/}
                                Sign In
                            </Button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm