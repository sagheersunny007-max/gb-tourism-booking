import React, { useState } from 'react';
import { Star, Wifi, Wind, Coffee, Car } from 'lucide-react';
import { featuredStays } from '../../data/mockData';
import Modal, { BookingSuccess } from '../layout/Modal';
import { useLanguage } from '../../context/LanguageContext';

const FeaturedStays = () => {
    const { language } = useLanguage();
    const [selectedStay, setSelectedStay] = useState(null);
    const [isBooked, setIsBooked] = useState(false);

    const handleBook = (stay) => {
        setSelectedStay(stay);
        setIsBooked(true);
    };

    const closeBooking = () => {
        setSelectedStay(null);
        setIsBooked(false);
    };

    const getAmenityIcon = (name) => {
        switch (name) {
            case 'Wi-Fi': return <Wifi size={14} />;
            case 'Heating': return <Wind size={14} />;
            case 'Breakfast': return <Coffee size={14} />;
            case 'Parking': return <Car size={14} />;
            default: return <Star size={14} />;
        }
    };

    return (
        <section id="stays" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand-blue font-semibold tracking-wider uppercase text-sm">
                        {language === 'ur' ? 'ٹاپ ریٹیڈ' : 'Top Rated'}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
                        {language === 'ur' ? 'نمایاں رہائش گاہیں' : 'Featured Stays'}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {language === 'ur'
                            ? 'پہاڑوں کے قلب میں عالمی معیار کی مہمان نوازی کا تجربہ کریں۔ لگژری ریزورٹس سے لے کر آرام دہ گلیمپنگ اسپاٹس تک۔'
                            : 'Experience world-class hospitality in the heart of the mountains. From luxury resorts to cozy glamping spots.'
                        }
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredStays.map((stay) => (
                        <div
                            key={stay.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={stay.image}
                                    alt={stay.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg shadow-sm flex items-center gap-1 font-bold text-sm text-gray-900">
                                    <Star size={14} className="text-brand-gold fill-brand-gold" />
                                    {stay.rating}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors">
                                            {stay.name}
                                        </h3>
                                        <p className="text-gray-500 text-sm">{stay.location}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-6 mt-4">
                                    {stay.amenities.slice(0, 3).map((amenity, idx) => (
                                        <span key={idx} className="flex items-center gap-1 text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                            {getAmenityIcon(amenity)} {amenity}
                                        </span>
                                    ))}
                                    {stay.amenities.length > 3 && (
                                        <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                            +{stay.amenities.length - 3}
                                        </span>
                                    )}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div>
                                        <span className="text-gray-400 text-xs uppercase tracking-wide">
                                            {language === 'ur' ? 'فی رات قیمت' : 'Price per night'}
                                        </span>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-lg font-bold text-brand-blue">PKR {stay.price.toLocaleString()}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleBook(stay)}
                                        className="bg-brand-blue text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-brand-slate transition-colors shadow-md hover:shadow-lg transform active:scale-95 duration-200"
                                    >
                                        {language === 'ur' ? 'ابھی بک کریں' : 'Book Now'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Modal isOpen={isBooked} onClose={closeBooking} title={language === 'ur' ? 'محفوظ بکنگ' : 'Secure Booking'}>
                    <BookingSuccess onClose={closeBooking} itemName={selectedStay?.name} />
                </Modal>
            </div>
        </section>
    );
};

export default FeaturedStays;
