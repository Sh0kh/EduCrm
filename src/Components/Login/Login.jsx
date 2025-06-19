import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Input, Checkbox, Button } from "@material-tailwind/react";
import leftIcon from '../UI/login-icon-01.png';
import rightIcon from '../UI/login-icon-02.png';
import logo from '../UI/logo.png';

export default function Login() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await axios.post("/api/login", { login, password });
            if (res.status === 200 && res.data.token) {
                localStorage.setItem("token", res.data.token);
                navigate("/");
            } else {
                setError(res.data.message || "Login yoki parol xato!");
            }
        } catch (err) {
            setError(
                err.response?.data?.message ||
                "Serverda xatolik yuz berdi!"
            );
        }
        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="flex w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden "> 
                <div className="hidden md:flex md:w-1/2 bg-blue-600 flex-col items-center justify-center p-8 text-white relative">
                    <div className="mb-4">
                        <img src={logo} alt="EDUCRM Logo" className="h-32 mx-auto" />
                    </div>

                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-white"></div>
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-white"></div>
                    </div>
                </div>

                <div className="w-full md:w-1/2 bg-white p-10">
                    

                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Xush kelibsiz</h1>
                    <p className="text-gray-600 mb-8">
                        <span className="font-semibold">eduCRM</span> avtomatlashtirish tizimiga kirish uchun iltimos login va parolni kiriting!
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Input
                                type="text"
                                label="Login"
                                size="lg"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                required
                            />
                        </div>
                        
                        <div>
                            <Input
                                type="password"
                                label="Password"
                                size="lg"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

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
                            <div className="text-red-500 text-sm">
                                {error}
                            </div>
                        )}

                        <Button
                            type="submit"
                            fullWidth
                            color="blue"
                            loading={loading}
                            className="mt-6"
                        >
                            {loading ? "Kirish..." : "Login"}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}