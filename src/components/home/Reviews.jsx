import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/mockData';

const Reviews = () => {
    return (
        <section id="reviews" className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm">
                        What they say
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                        Tourist Reviews
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Real stories from travelers who explored the majestic landscapes of Gilgit-Baltistan with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative group hover:shadow-xl transition-all duration-300"
                        >
                            <Quote className="absolute top-6 right-8 text-gray-100 group-hover:text-brand-gold/20 transition-colors" size={48} />

                            <div className="flex gap-1 mb-4 text-brand-gold">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={i < review.rating ? "fill-brand-gold" : "text-gray-200"}
                                    />
                                ))}
                            </div>

                            <p className="text-gray-600 italic mb-6 leading-relaxed relative z-10">
                                "{review.comment}"
                            </p>

                            <div className="flex items-center gap-4">
                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                    <p className="text-xs text-gray-500">{review.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
