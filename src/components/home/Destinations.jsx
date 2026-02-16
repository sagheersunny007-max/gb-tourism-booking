import React, { useState } from 'react';
import { ArrowRight, Mountain, Wind, Star, MapPin, ImageOff } from 'lucide-react';
import { destinations, featuredStays } from '../../data/mockData';
import Modal from '../layout/Modal';
import { useLanguage } from '../../context/LanguageContext';

const Destinations = () => {
    const { t, language } = useLanguage();
    const [selectedDest, setSelectedDest] = useState(null);
    const [imageErrors, setImageErrors] = useState({});

    const handleExplore = (dest) => {
        setSelectedDest(dest);
    };

    const closeExplore = () => {
        setSelectedDest(null);
    };

    const handleImageError = (id) => {
        setImageErrors(prev => ({ ...prev, [id]: true }));
    };

    const districtStays = selectedDest
        ? featuredStays.filter(stay => stay.location.toLowerCase().includes(selectedDest.name.split(' ')[0].toLowerCase()))
        : [];

    return (
        <section id="destinations" className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-brand-blue font-black uppercase tracking-[0.2em] text-xs mb-3 block">
                            {language === 'ur' ? 'دریافت کریں' : 'Worldwide Destinations'}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
                            {t('destinations.title')}
                        </h2>
                        <p className="text-gray-500 text-lg font-medium leading-relaxed">
                            {t('destinations.subtitle')}
                        </p>
                    </div>
                    <button className="flex items-center gap-3 bg-white text-brand-blue px-6 py-4 rounded-2xl font-black shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-brand-blue/10">
                        {language === 'ur' ? 'تمام مقامات دیکھیں' : 'View All Districts'} <ArrowRight size={22} className="text-brand-gold" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {destinations.map((dest) => (
                        <div
                            key={dest.id}
                            onClick={() => handleExplore(dest)}
                            className="group relative h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-500 bg-white"
                        >
                            {!imageErrors[dest.id] ? (
                                <img
                                    src={dest.image}
                                    alt={dest.name}
                                    onError={() => handleImageError(dest.id)}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-brand-blue via-brand-slate to-brand-blue flex flex-col items-center justify-center text-white p-6 text-center">
                                    <ImageOff size={48} className="mb-4 opacity-50" />
                                    <span className="font-black text-2xl uppercase tracking-widest">{dest.name}</span>
                                    <span className="text-xs opacity-60 mt-2 uppercase tracking-tighter">Photo coming soon</span>
                                </div>
                            )}

                            {/* Sophisticated Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-transparent to-brand-blue/20 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="h-0.5 w-6 bg-brand-gold rounded-full" />
                                        <span className="text-brand-gold font-black text-xs uppercase tracking-widest">
                                            {dest.properties} {language === 'ur' ? 'پراپرٹیز' : 'Available Stays'}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-2 leading-none">
                                        {dest.name}
                                    </h3>
                                    <p className="text-white/70 text-sm font-medium mb-6 line-clamp-2 max-h-0 group-hover:max-h-20 transition-all duration-500 overflow-hidden">
                                        {dest.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:gap-4 transition-all duration-300">
                                        <span>{language === 'ur' ? 'ابھی دریافت کریں' : 'Explore Now'}</span>
                                        <ArrowRight size={18} className="text-brand-gold" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Modal
                    isOpen={!!selectedDest}
                    onClose={closeExplore}
                    title={language === 'ur' ? `${selectedDest?.name} کی تلاش` : `Experience ${selectedDest?.name}`}
                >
                    <div className="space-y-8 max-h-[75vh] overflow-y-auto pr-2 custom-scrollbar">
                        {selectedDest && (
                            <>
                                <div className="relative h-72 rounded-[2rem] overflow-hidden shadow-lg border border-gray-100">
                                    <img
                                        src={selectedDest.image}
                                        className="w-full h-full object-cover"
                                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670'; }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-6 left-6 text-white">
                                        <div className="flex items-center gap-2 mb-1">
                                            <MapPin size={16} className="text-brand-gold" />
                                            <span className="text-xs font-black uppercase tracking-[0.2em]">Gilgit Baltistan</span>
                                        </div>
                                        <h4 className="text-3xl font-black">{selectedDest.name}</h4>
                                    </div>
                                </div>

                                <p className="text-gray-600 leading-relaxed text-lg font-medium italic border-l-4 border-brand-gold pl-6">
                                    "{selectedDest.description} {language === 'ur'
                                        ? 'اس عظیم الشان ضلع کی منفرد ثقافت، دلکش مناظر اور پوشیدہ راستوں کو دریافت کریں۔'
                                        : 'Experience the unique culture, breathtaking landscapes, and elite hospitality of this majestic district.'
                                    }"
                                </p>

                                <div className="pt-4">
                                    <div className="flex justify-between items-center mb-6">
                                        <h4 className="font-black text-xl text-gray-900">
                                            {language === 'ur' ? `${selectedDest.name} میں بہترین رہائش` : `Elite Stays in ${selectedDest.name}`}
                                        </h4>
                                        <span className="text-xs font-black text-brand-blue/40 uppercase tracking-widest">{districtStays.length} FOUND</span>
                                    </div>

                                    {districtStays.length > 0 ? (
                                        <div className="grid gap-4">
                                            {districtStays.map(stay => (
                                                <div key={stay.id} className="flex gap-5 p-4 bg-gray-50 rounded-[1.5rem] hover:bg-white hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-gray-100">
                                                    <div className="w-24 h-24 shrink-0 rounded-2xl overflow-hidden">
                                                        <img src={stay.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    </div>
                                                    <div className="flex-1 text-left flex flex-col justify-center">
                                                        <h5 className="font-black text-lg text-gray-900 group-hover:text-brand-blue transition-colors leading-tight">{stay.name}</h5>
                                                        <div className="flex items-center gap-1 text-[10px] text-brand-gold mt-1 uppercase font-black tracking-widest">
                                                            <Star size={10} className="fill-brand-gold" /> {stay.rating} • {stay.reviews} REVIEWS
                                                        </div>
                                                        <p className="text-sm text-brand-blue font-black mt-3">PKR {stay.price.toLocaleString()}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="bg-gray-50 rounded-3xl p-8 text-center">
                                            <Mountain className="mx-auto mb-4 text-gray-300" size={48} strokeWidth={1} />
                                            <p className="text-gray-500 font-bold italic">
                                                {language === 'ur'
                                                    ? 'اس ضلع کے لیے ابھی کوئی براہ راست لسٹنگ دستیاب نہیں ہے۔'
                                                    : 'No direct listings available for this district yet. Our team is hand-picking new properties.'
                                                }
                                            </p>
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={closeExplore}
                                    className="w-full bg-brand-blue text-white py-5 rounded-2xl font-black text-lg hover:bg-brand-slate transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3"
                                >
                                    {language === 'ur' ? 'تمام قیام دیکھیں' : 'Browse All Accommodations'}
                                    <ArrowRight size={20} />
                                </button>
                            </>
                        )}
                    </div>
                </Modal>
            </div>
        </section>
    );
};

export default Destinations;
