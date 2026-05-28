"use client";

import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const router = useRouter();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await api.post("/auth/register", form);

            alert("Register berhasil");

            router.push("/login");
        } catch (error) {
            console.log(error);

            alert("Register gagal");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form
                onSubmit={handleRegister}
                className="w-[400px] p-6 border rounded-xl space-y-4"
            >
                <h1 className="text-2xl font-bold">
                    Register
                </h1>

                <input
                    type="text"
                    placeholder="Nama"
                    className="w-full border p-2 rounded"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            name: e.target.value,
                        })
                    }
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-2 rounded"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value,
                        })
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-2 rounded"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            password: e.target.value,
                        })
                    }
                />

                <button
                    className="w-full bg-black text-white p-2 rounded"
                >
                    Register
                </button>
            </form>
        </div>
    );
}