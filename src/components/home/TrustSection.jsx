import React from 'react';
import { ShieldCheck, Map, Users } from 'lucide-react';
import { localGuides } from '../../data/mockData';

const TrustSection = ({ id }) => {
    return (
        <section id={id} className="py-20 bg-brand-blue relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <div>
                        <span className="inline-block py-1 px-3 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold tracking-wider uppercase mb-6">
                            Travel with Confidence
                        </span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Guided by Locals, <br />
                            Secured by Trust.
                        </h2>
                        <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                            We partner with certified local guides and verify every property to ensure
                            your journey is safe, authentic, and unforgettable. 24/7 support availability
                            throughout your trip.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-xl text-brand-gold">
                                    <ShieldCheck size={28} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Verified Properties</h4>
                                    <p className="text-blue-200 text-sm">Every listing is physically verified for quality and amenities.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white/10 rounded-xl text-brand-gold">
                                    <Users size={28} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg">Local Experts</h4>
                                    <p className="text-blue-200 text-sm">Connect with guides who know the hidden gems of the valleys.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Guides Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {localGuides.map((guide) => (
                            <div key={guide.id} className="bg-white p-6 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                                <div className="flex items-center gap-4 mb-4">
                                    <img src={guide.image} alt={guide.name} className="w-16 h-16 rounded-full object-cover border-2 border-gray-100" />
                                    <div>
                                        <h4 className="font-bold text-gray-900">{guide.name}</h4>
                                        <p className="text-xs text-brand-blue font-semibold uppercase">{guide.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-sm mb-4">
                                    "I love showing guests the true beauty of our mountains. Let's explore together."
                                </p>
                                <button className="w-full py-2 rounded-lg border border-brand-blue text-brand-blue font-semibold hover:bg-brand-blue hover:text-white transition-colors text-sm">
                                    View Profile
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TrustSection;
