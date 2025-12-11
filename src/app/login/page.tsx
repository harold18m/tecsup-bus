'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { toast } from 'sonner';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, error } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await login(email, password);
            toast.success('Login successful!');
            router.push('/dashboard');
        } catch (err) {
            console.error('Login error:', err);
            // Error will be handled by the AuthContext
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow flex items-center justify-center py-16 bg-gradient-to-b from-gray-50 to-white">
                <div className="container mx-auto px-4 md:px-6 flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-md"
                    >
                        <Card className="border-0 shadow-lg">
                            <CardHeader className="space-y-1">
                                <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
                                <CardDescription>
                                    Enter your credentials to access your account
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="name@tecsup.edu.pe"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            className="w-full"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                                Password
                                            </label>
                                            <Link href="/forgot-password" className="text-xs text-tecsup hover:underline">
                                                Forgot password?
                                            </Link>
                                        </div>
                                        <Input
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            className="w-full"
                                        />
                                    </div>

                                    {error && (
                                        <div className="text-sm text-red-500 bg-red-50 p-2 rounded border border-red-100">
                                            {error}
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        className="w-full bg-tecsup hover:bg-tecsup-dark text-white"
                                        disabled={loading}
                                    >
                                        {loading && (
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        )}
                                        Sign in
                                    </Button>
                                </form>

                                <div className="mt-6 text-center text-sm">
                                    <p>
                                        For demo purposes, use:
                                    </p>
                                    <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                                        <li>Admin: admin@tecsup.edu.pe / admin123</li>
                                        <li>Driver: driver@tecsup.edu.pe / driver123</li>
                                        <li>Passenger: passenger@tecsup.edu.pe / passenger123</li>
                                    </ul>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-center border-t pt-6">
                                <p className="text-sm text-gray-600">
                                    Don&apos;t have an account?{' '}
                                    <Link href="/register" className="text-tecsup hover:underline font-medium">
                                        Sign up
                                    </Link>
                                </p>
                            </CardFooter>
                        </Card>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
