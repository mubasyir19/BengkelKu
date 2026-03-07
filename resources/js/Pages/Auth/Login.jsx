import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <Head title="Login" />
            <div className="grid h-screen grid-cols-1 items-stretch md:grid-cols-2">
                <div className="hidden bg-[url('/images/header.jpg')] bg-cover bg-center md:block">
                    <div className="py-10 bg-primary/30 flex h-full w-full items-end justify-center bg-linear-to-t from-black/70 to-transparent">
                        <div className="mx-auto w-3/4">
                            {/* <h2 className="text-2xl font-extrabold text-white">
                            BengkelKu
                        </h2> */}
                            <h1 className="mt-5 text-5xl leading-14 font-extrabold text-white">
                                Kelola Properti Anda Dengan Cerdas.
                            </h1>
                            <p className="mt-6 text-white">
                                Streamline your boarding house operations, from
                                tenant management to automated financial
                                reporting.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center px-5 md:mx-auto md:w-3/4 md:px-0">
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2">
                        <img
                            src="/images/logo.png"
                            alt="logo"
                            className="size-8"
                        />
                        <p className="text-lg font-semibold text-background-dark">
                            BengkelKu
                        </p>
                    </div>
                    <div className="w-full">
                        <div className="text-center md:text-start">
                            <h1 className="text-foreground text-3xl font-bold">
                                Selamat Datang
                            </h1>
                            <p className="mt-2 text-base text-gray-400">
                                Silakan isi form berikut untuk masuk ke akun
                                Anda.
                            </p>
                        </div>
                        {status && (
                            <div className="my-4 text-sm font-medium text-green-600">
                                {status}
                            </div>
                        )}
                        <form onSubmit={submit} className="mt-10 space-y-5">
                            <div>
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="password"
                                    value="Password"
                                />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked,
                                            )
                                        }
                                    />
                                    <span className="ms-2 text-sm text-gray-600">
                                        Remember me
                                    </span>
                                </label>
                                {canResetPassword && (
                                    <Link
                                        href={route("password.request")}
                                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    >
                                        Forgot your password?
                                    </Link>
                                )}
                            </div>
                            <div className="mt-4 space-y-3">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-primary text-white text-sm font-semibold w-full rounded-md py-2 text-center"
                                >
                                    Log In
                                </button>
                            </div>
                        </form>
                    </div>
                    <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-xs font-bold text-gray-400 md:hidden">
                        &copy; 2026 BENGKELKU OTOMOTIVE MANAGEMENT
                    </p>
                </div>
            </div>
        </>
    );
}
