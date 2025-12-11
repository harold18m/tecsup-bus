'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Bus, CalendarClock, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Home() {
    const features = [
        {
            icon: <Bus className="h-10 w-10 text-tecsup" />,
            title: 'Real-time Bus Tracking',
            description: 'Track your bus in real-time and never miss your ride again. Get accurate ETAs and status updates.',
        },
        {
            icon: <MapPin className="h-10 w-10 text-tecsup" />,
            title: 'Interactive Route Maps',
            description: 'Visualize all available routes with stop details. Find the most convenient route for your journey.',
        },
        {
            icon: <QrCode className="h-10 w-10 text-tecsup" />,
            title: 'QR Code Boarding',
            description: 'Simply scan your QR code to board. Fast, secure, and contactless boarding experience.',
        },
        {
            icon: <CalendarClock className="h-10 w-10 text-tecsup" />,
            title: 'Schedule Management',
            description: 'View and manage bus schedules. Set reminders for your regular rides.',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring' as const, stiffness: 100 }
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-16">
                <section className="relative bg-gray-50 overflow-hidden">
                    <div
                        className="absolute inset-0 bg-dot-pattern bg-dot-small opacity-50"
                        style={{
                            backgroundImage: 'radial-gradient(circle, rgba(0, 185, 235, 0.1) 1px, transparent 1px)',
                            backgroundSize: '30px 30px',
                        }}
                    />
                    <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10">
                        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                            <motion.h1
                                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Simplifying Transport for
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-tecsup to-blue-400"> Tecsup </span>
                                Community
                            </motion.h1>

                            <motion.p
                                className="text-xl text-gray-600 mb-8 max-w-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                Penguins on Road makes transportation efficient, interactive, and accessible for students and staff alike.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <Link href="/routes">
                                    <Button className="bg-tecsup hover:bg-tecsup-dark text-white px-8 py-6 rounded-md text-lg font-medium">
                                        Explore Routes
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>

                                <Link href="/login">
                                    <Button variant="outline" className="px-8 py-6 rounded-md text-lg font-medium border-tecsup text-tecsup hover:bg-tecsup/5">
                                        Sign In
                                    </Button>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Seamless Transportation Experience
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Our platform provides a modern solution to transportation needs, enhancing the experience for everyone.
                            </p>
                        </div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 hover:border-tecsup-light/50"
                                >
                                    <div className="rounded-full bg-tecsup/10 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="max-w-5xl mx-auto bg-gradient-to-br from-tecsup to-blue-400 rounded-2xl overflow-hidden shadow-lg">
                            <div className="px-6 py-12 md:py-16 md:px-12 text-white">
                                <div className="flex flex-col md:flex-row items-center justify-between">
                                    <div className="mb-8 md:mb-0 md:mr-8">
                                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                            Ready to Simplify Your Commute?
                                        </h2>
                                        <p className="text-white/90 text-lg mb-0">
                                            Join Penguins on Road today and transform your daily transportation experience.
                                        </p>
                                    </div>
                                    <Link href="/register">
                                        <Button className="bg-white text-tecsup hover:bg-gray-100 whitespace-nowrap px-8 py-6 text-lg font-medium">
                                            Get Started
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
