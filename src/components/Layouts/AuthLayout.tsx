interface Props {
    children: React.ReactNode,
    title: string
}

const AuthLayout = (props: Props) => {
    return (
        <div className="flex justify-center min-h-screen items-center">
            <div className="w-full max-w-xs">
                <h1 className="text-blue-600 text-3xl font-bold mb-2">{props.title}</h1>
                <p className="font-medium text-slate-500 mb-8">
                    Welcome, please enter your details...
                </p>
                {props.children}
            </div>
        </div>
    )
}

export default AuthLayout