import React from 'react';
import { Mountain, Camera, Heart } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-brand-blue/5 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                        <img
                            src="https://images.unsplash.com/photo-1548115184-bc6544d06a58?q=80&w=2670&auto=format&fit=crop"
                            alt="About GB"
                            className="relative rounded-2xl shadow-2xl z-10 w-full h-[500px] object-cover"
                        />
                        <div className="absolute -bottom-8 -right-8 bg-brand-gold p-8 rounded-2xl shadow-xl z-20 hidden md:block">
                            <span className="text-brand-blue text-4xl font-bold">10+</span>
                            <p className="text-brand-blue font-semibold">Districts to Explore</p>
                        </div>
                    </div>

                    <div>
                        <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm">
                            About Gilgit-Baltistan
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
                            A Journey Beyond <br />
                            The Clouds
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Gilgit-Baltistan is a land of sheer wonder. Home to five of the world's
                            fourteen mountains over 8,000 meters, it offers landscapes that are
                            as diverse as its cultures. From the ancient Silk Road to the hidden
                            lakes of Ghizer, we bring you closer to the heart of the Himalayas.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue">
                                    <Mountain size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Adventure</h4>
                                    <p className="text-sm text-gray-500">Peak trekking & hiking</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue">
                                    <Heart size={24} />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Hospitality</h4>
                                    <p className="text-sm text-gray-500">Warm welcome from sagheer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
