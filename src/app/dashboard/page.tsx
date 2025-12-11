'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Bus, CalendarClock, QrCode, User, Route as RouteIcon } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RouteMap from '@/components/dashboard/RouteMap';
import QRCode from '@/components/QRCode';
import { Route } from '@/types';

// Sample data for demonstration
const sampleRoute: Route = {
    id: '1',
    name: 'Campus to Downtown',
    startPoint: 'Tecsup Campus',
    endPoint: 'Downtown Terminal',
    stops: [
        { id: '1', name: 'Tecsup Campus', latitude: -12.046374, longitude: -77.042793, order: 0 },
        { id: '2', name: 'Main Avenue', latitude: -12.050000, longitude: -77.038000, order: 1 },
        { id: '3', name: 'Central Park', latitude: -12.055000, longitude: -77.035000, order: 2 },
        { id: '4', name: 'Downtown Terminal', latitude: -12.060000, longitude: -77.030000, order: 3 },
    ],
    distance: 5.2,
    estimatedDuration: 25,
    status: 'active',
};

const DEMO_NOW_MS = Date.parse('2025-01-01T00:00:00.000Z');

export default function Dashboard() {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login');
        }
    }, [user, loading, router]);

    if (loading || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-tecsup"></div>
            </div>
        );
    }

    const renderDashboardContent = () => {
        switch (user.role) {
            case 'admin':
                return <AdminDashboard />;
            case 'driver':
                return <DriverDashboard />;
            case 'passenger':
                return <PassengerDashboard />;
            default:
                return <div>Unknown user role</div>;
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow pt-20 pb-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                                <p className="text-gray-600 mt-1">
                                    Welcome back, {user.name}! ({user.role})
                                </p>
                            </div>
                        </div>

                        {renderDashboardContent()}
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

function AdminDashboard() {
    const statsItems = [
        {
            title: 'Total Buses',
            value: '12',
            change: '+2',
            icon: <Bus className="h-5 w-5 text-tecsup" />
        },
        {
            title: 'Active Routes',
            value: '8',
            change: '+1',
            icon: <RouteIcon className="h-5 w-5 text-tecsup" />
        },
        {
            title: 'Registered Users',
            value: '324',
            change: '+18',
            icon: <User className="h-5 w-5 text-tecsup" />
        },
        {
            title: 'Today\'s Trips',
            value: '42',
            change: '-3',
            icon: <CalendarClock className="h-5 w-5 text-tecsup" />
        },
    ];

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {statsItems.map((item, index) => (
                    <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">{item.title}</p>
                                    <div className="flex items-end space-x-1 mt-1">
                                        <h3 className="text-2xl font-bold">{item.value}</h3>
                                        <span className={`text-xs font-medium ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                                            }`}>
                                            {item.change}
                                        </span>
                                    </div>
                                </div>
                                <div className="rounded-full bg-tecsup/10 p-3">
                                    {item.icon}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="border-0 shadow-sm col-span-2">
                    <CardHeader>
                        <CardTitle>Route Management</CardTitle>
                        <CardDescription>Active routes and their status</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <RouteMap route={sampleRoute} />
                    </CardContent>
                </Card>

                <Card className="border-0 shadow-sm">
                    <CardHeader>
                        <CardTitle>Recent Activities</CardTitle>
                        <CardDescription>Latest system activities</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <div key={i} className="flex items-start space-x-3 pb-4 border-b last:border-0">
                                    <div className="rounded-full bg-gray-100 p-2 mt-0.5">
                                        <User className="h-4 w-4 text-gray-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">New user registered</p>
                                        <p className="text-xs text-gray-500">
                                            {new Date(DEMO_NOW_MS - 1000 * 60 * 60 * i).toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function DriverDashboard() {
    return (
        <div className="space-y-8">
            <Card className="border-0 shadow-sm">
                <CardHeader>
                    <CardTitle>Today&apos;s Route</CardTitle>
                    <CardDescription>Your assigned route for today</CardDescription>
                </CardHeader>
                <CardContent>
                    <RouteMap route={sampleRoute} />
                    <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
                        <div>
                            <p className="text-sm font-medium text-gray-700">Route Status</p>
                            <div className="flex items-center mt-1">
                                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                                <p className="text-sm text-gray-600">Active</p>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700">Departure Time</p>
                            <p className="text-sm text-gray-600">13:30</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-700">Passengers</p>
                            <p className="text-sm text-gray-600">18/25</p>
                        </div>
                        <Button className="bg-tecsup hover:bg-tecsup-dark text-white">
                            Start Route
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
                <CardHeader>
                    <CardTitle>Passenger Check-in</CardTitle>
                    <CardDescription>Scan passenger QR codes for boarding</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col items-center p-4">
                        <div className="mb-4 w-64 h-64 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
                            <div className="text-center">
                                <QrCode className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                                <p className="text-sm text-gray-500">Point camera here to scan</p>
                            </div>
                        </div>
                        <Button className="mt-4 bg-tecsup hover:bg-tecsup-dark text-white">
                            Enable Scanner
                        </Button>
                        <div className="mt-8 w-full">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">Recent Check-ins</h4>
                            <div className="space-y-2">
                                {Array.from({ length: 3 }).map((_, i) => (
                                    <div key={i} className="p-3 bg-gray-50 rounded-md border border-gray-100 flex justify-between">
                                        <span className="text-sm">Passenger #{12345 + i}</span>
                                        <span className="text-xs text-gray-500">
                                            {new Date(DEMO_NOW_MS - 1000 * 60 * 10 * i).toLocaleTimeString()}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function PassengerDashboard() {
    return (
        <div className="space-y-8">
            <Tabs defaultValue="upcoming" className="space-y-4">
                <TabsList className="bg-white shadow-sm border mb-4">
                    <TabsTrigger value="upcoming">Upcoming Trips</TabsTrigger>
                    <TabsTrigger value="history">Trip History</TabsTrigger>
                    <TabsTrigger value="routes">Available Routes</TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming" className="space-y-4">
                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle>Today&apos;s Booking</CardTitle>
                            <CardDescription>Your scheduled trip for today</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-col md:flex-row md:items-start space-y-6 md:space-y-0">
                                <div className="md:flex-1">
                                    <RouteMap route={sampleRoute} />
                                    <div className="mt-4 space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Departure</span>
                                            <span className="font-medium">15:30</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Route</span>
                                            <span className="font-medium">Campus to Downtown</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Bus</span>
                                            <span className="font-medium">Bus #103</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Status</span>
                                            <span className="font-medium text-green-500">Confirmed</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:w-60 md:ml-8 flex flex-col items-center">
                                    <QRCode value="POR-123456789" size={180} className="mb-4" />
                                    <Button className="mt-2 w-full bg-tecsup hover:bg-tecsup-dark text-white">
                                        Cancel Booking
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="history">
                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle>Trip History</CardTitle>
                            <CardDescription>Your previous trips</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <div key={i} className="p-4 border rounded-md hover:border-tecsup-light/50 transition-colors">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="font-medium">Campus to Downtown</h4>
                                                <p className="text-sm text-gray-500">
                                                    {new Date(DEMO_NOW_MS - 1000 * 60 * 60 * 24 * i).toLocaleDateString()}
                                                </p>
                                            </div>
                                            <span className="text-xs bg-gray-100 rounded-full px-2 py-1">
                                                Completed
                                            </span>
                                        </div>
                                        <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                                            <div>
                                                <p className="text-gray-500">Departure</p>
                                                <p>15:30</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500">Bus</p>
                                                <p>Bus #{100 + i}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500">Driver</p>
                                                <p>John D.</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="routes">
                    <Card className="border-0 shadow-sm">
                        <CardHeader>
                            <CardTitle>Available Routes</CardTitle>
                            <CardDescription>Browse and book routes</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="p-4 border rounded-md hover:border-tecsup-light/50 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-medium">Campus to Downtown</h4>
                                            <div className="flex items-center mt-1">
                                                <MapPin className="h-3 w-3 text-gray-400 mr-1" />
                                                <p className="text-sm text-gray-500">Tecsup Campus → Downtown Terminal</p>
                                            </div>
                                        </div>
                                        <Button size="sm" className="bg-tecsup hover:bg-tecsup-dark text-white">
                                            Book
                                        </Button>
                                    </div>
                                    <div className="mt-3 grid grid-cols-3 gap-2 text-sm">
                                        <div>
                                            <p className="text-gray-500">Next Departure</p>
                                            <p>15:30</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Duration</p>
                                            <p>~25 mins</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500">Available Seats</p>
                                            <p>14/25</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
