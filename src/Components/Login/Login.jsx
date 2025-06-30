import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Checkbox, Button } from "@material-tailwind/react";
import logo from '../UI/logo.png';

export default function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        setError("");
        const trimmedLogin = login.trim().toLowerCase();
        // Симулируем небольшую задержку для UX
        setTimeout(() => {
            if (trimmedLogin === "admin" && password === "Admin123") {
                localStorage.setItem("role", "Admin");
                localStorage.setItem("token", "qwdqwd");
                navigate("/");
            } else if (trimmedLogin === "superceo" && password === "SuperCeo123") {
                localStorage.setItem("role", "Super-Ceo");
                localStorage.setItem("token", "qwdqwd");
                navigate("/");
            } else {
                setError("Login yoki parol xato!");
            }
        }, 500);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="flex w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden">
                {/* Левая сторона */}
                <div className="hidden md:flex md:w-1/2 bg-blue-600 flex-col items-center justify-center p-8 text-white relative">
                    <div className="mb-4">
                        <img src={logo} alt="EDUCRM Logo" className="h-32 mx-auto" />
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white"></div>
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white"></div>
                    </div>
                </div>

                {/* Правая сторона */}
                <div className="w-full md:w-1/2 bg-white p-10">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Xush kelibsiz</h1>
                    <p className="text-gray-600 mb-8">
                        <span className="font-semibold">eduCRM</span> avtomatlashtirish tizimiga kirish uchun iltimos login va parolni kiriting!
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <Input
                            type="text"
                            label="Login"
                            size="lg"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            required
                            autoComplete="username"
                        />
                        <Input
                            type="password"
                            label="Password"
                            size="lg"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                        />

                        <div className="flex items-center justify-between">
                            <Checkbox
                                label="Remember me"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)}
                                color="blue"
                            />
                            <a href="#" className="text-sm text-blue-500 hover:underline">
                                Forgot Password?
                            </a>
                        </div>
                        {error && (
                            <div className="text-red-500 text-sm">{error}</div>
                        )}
                        <Button
                            onClick={handleSubmit}
                            fullWidth
                            color="blue"
                            className="mt-6"
                            disabled={loading}
                        >
                            {loading ? "Kirish..." : "Login"}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
