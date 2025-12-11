'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bus, Clock, Map } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import RouteMap from '@/components/routes/RouteMap';
import RoutesList from '@/components/routes/RoutesList';
import { TimeOfDay } from '@/types';

export default function RoutesExplorer() {
    const [selectedTimeOfDay, setSelectedTimeOfDay] = useState<TimeOfDay>('morning');
    const [selectedRouteId, setSelectedRouteId] = useState<string | null>(null);

    // Function to handle route selection
    const handleRouteSelect = (routeId: string) => {
        setSelectedRouteId(routeId);
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
                                <h1 className="text-3xl font-bold text-gray-900">Routes Explorer</h1>
                                <p className="text-gray-600 mt-1">
                                    Explore bus routes for different times of the day
                                </p>
                            </div>
                        </div>

                        <Tabs defaultValue="morning" onValueChange={(value) => {
                            setSelectedTimeOfDay(value as TimeOfDay);
                            setSelectedRouteId(null);
                        }}>
                            <div className="mb-8">
                                <TabsList className="bg-white shadow-sm border mb-4">
                                    <TabsTrigger value="morning" className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        Morning
                                    </TabsTrigger>
                                    <TabsTrigger value="afternoon" className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        Afternoon
                                    </TabsTrigger>
                                    <TabsTrigger value="night" className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        Night
                                    </TabsTrigger>
                                </TabsList>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                                <div className="lg:col-span-1">
                                    <Card className="border-0 shadow-sm h-full">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <Bus className="h-5 w-5 text-tecsup" />
                                                Available Routes
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <TabsContent value="morning" className="mt-0">
                                                <RoutesList
                                                    timeOfDay="morning"
                                                    onRouteSelect={handleRouteSelect}
                                                    selectedRouteId={selectedRouteId}
                                                />
                                            </TabsContent>
                                            <TabsContent value="afternoon" className="mt-0">
                                                <RoutesList
                                                    timeOfDay="afternoon"
                                                    onRouteSelect={handleRouteSelect}
                                                    selectedRouteId={selectedRouteId}
                                                />
                                            </TabsContent>
                                            <TabsContent value="night" className="mt-0">
                                                <RoutesList
                                                    timeOfDay="night"
                                                    onRouteSelect={handleRouteSelect}
                                                    selectedRouteId={selectedRouteId}
                                                />
                                            </TabsContent>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="lg:col-span-3">
                                    <Card className="border-0 shadow-sm h-full">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <Map className="h-5 w-5 text-tecsup" />
                                                Route Map
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <RouteMap
                                                timeOfDay={selectedTimeOfDay}
                                                routeId={selectedRouteId}
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </Tabs>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
