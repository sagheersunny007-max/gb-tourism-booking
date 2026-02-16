import React, { useState, useEffect } from 'react';
import { Search, Calendar, Users, MapPin, Star, ArrowRight } from 'lucide-react';
import Modal from '../layout/Modal';
import { useLanguage } from '../../context/LanguageContext';
import { featuredStays } from '../../data/mockData';

const Hero = () => {
    const { t, language } = useLanguage();
    const [destination, setDestination] = useState('');
    const [guests, setGuests] = useState(1);
    const [checkIn, setCheckIn] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = () => {
        setIsSearching(true);
        setIsLoading(true);

        setTimeout(() => {
            const query = destination.toLowerCase().trim();
            const results = featuredStays.filter(stay =>
                stay.location.toLowerCase().includes(query) ||
                stay.name.toLowerCase().includes(query)
            );
            setSearchResults(results);
            setIsLoading(false);
        }, 800);
    };

    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Premium Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1624285145829-19ec55b89eb0?q=80&w=2670&auto=format&fit=crop"
                    alt="Gilgit Baltistan Landscape"
                    className="w-full h-full object-cover scale-105"
                />
                {/* Refined Brand Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/80 via-transparent to-brand-blue/90" />
            </div>

            <div className="relative z-10 container mx-auto px-6 pt-20 text-center">
                {/* Hero Content */}
                <div className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-brand-gold/20 backdrop-blur-md border border-brand-gold/30 text-brand-gold text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
                        {t('hero.discover')}
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                        {t('hero.title')} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-yellow-200 to-white">
                            {t('hero.mountains')}
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-lg">
                        {t('hero.subtitle')}
                    </p>
                </div>

                {/* Refined Search Bar */}
                <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl rounded-[2rem] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)] animate-in fade-in zoom-in-95 duration-700 delay-200 border border-white/20">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">

                        {/* Destination */}
                        <div className="md:col-span-4 relative group">
                            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-slate/60 group-focus-within:text-brand-blue transition-colors">
                                <MapPin size={22} />
                            </div>
                            <div className="border-r border-gray-200 h-10 absolute right-0 top-1/2 -translate-y-1/2 hidden md:block" />
                            <input
                                type="text"
                                placeholder={t('hero.placeholder')}
                                value={destination}
                                onChange={(e) => setDestination(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                                className="w-full pl-14 pr-4 py-4 bg-transparent font-bold text-gray-900 placeholder:text-gray-400 focus:outline-none text-lg"
                            />
                        </div>

                        {/* Dates */}
                        <div className="md:col-span-4 relative group">
                            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-slate/60 group-focus-within:text-brand-blue transition-colors">
                                <Calendar size={22} />
                            </div>
                            <div className="border-r border-gray-200 h-10 absolute right-0 top-1/2 -translate-y-1/2 hidden md:block" />
                            <input
                                type="date"
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                                className="w-full pl-14 pr-4 py-4 bg-transparent font-bold text-gray-900 placeholder:text-gray-400 focus:outline-none text-lg"
                            />
                        </div>

                        {/* Guests */}
                        <div className="md:col-span-2 relative group">
                            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-brand-slate/60 group-focus-within:text-brand-blue transition-colors">
                                <Users size={22} />
                            </div>
                            <input
                                type="number"
                                min="1"
                                value={guests}
                                onChange={(e) => setGuests(e.target.value)}
                                className="w-full pl-14 pr-4 py-4 bg-transparent font-bold text-gray-900 placeholder:text-gray-400 focus:outline-none text-lg"
                            />
                        </div>

                        {/* Button */}
                        <div className="md:col-span-2">
                            <button
                                onClick={handleSearch}
                                className="w-full bg-brand-blue text-white h-[60px] rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:bg-brand-slate transition-all shadow-[0_10px_20px_rgba(15,44,66,0.3)] hover:shadow-xl active:scale-95"
                            >
                                <Search size={24} strokeWidth={3} />
                                <span>{t('hero.search')}</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Popular Tags Refined */}
                <div className="mt-10 flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                    <span className="text-white/70 text-sm font-bold uppercase tracking-widest">{language === 'ur' ? 'مشہور:' : 'Popular:'}</span>
                    {['Hunza', 'Skardu', 'Naltar', 'Fairy Meadows'].map((tag) => (
                        <button
                            key={tag}
                            onClick={() => { setDestination(tag); setTimeout(handleSearch, 100); }}
                            className="px-5 py-2 rounded-full bg-white/10 text-white text-sm font-bold backdrop-blur-md border border-white/20 hover:bg-brand-gold hover:text-brand-blue hover:border-brand-gold transition-all duration-300"
                        >
                            {tag}
                        </button>
                    ))}
                </div>

                <Modal
                    isOpen={isSearching}
                    onClose={() => setIsSearching(false)}
                    title={language === 'ur' ? 'تلاش کے نتائج' : 'Search Results'}
                >
                    {isLoading ? (
                        <div className="text-center py-12">
                            <div className="animate-spin rounded-full h-16 w-16 border-4 border-brand-blue border-b-transparent mx-auto mb-6"></div>
                            <p className="text-xl font-bold text-gray-900">
                                {language === 'ur'
                                    ? t('hero.search')
                                    : `Exploring ${destination || 'the North'}...`
                                }
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
                            {searchResults.length > 0 ? (
                                <>
                                    <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                                        {language === 'ur'
                                            ? `${searchResults.length} جگہیں ملیں`
                                            : `${searchResults.length} verified stays found`}
                                    </p>
                                    <div className="grid gap-6">
                                        {searchResults.map(stay => (
                                            <div key={stay.id} className="flex flex-col sm:flex-row gap-5 p-4 bg-gray-50 rounded-[1.5rem] hover:bg-white border border-transparent hover:border-brand-blue/10 hover:shadow-xl transition-all duration-300 group">
                                                <div className="w-full sm:w-32 h-32 shrink-0 overflow-hidden rounded-2xl">
                                                    <img src={stay.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                </div>
                                                <div className="flex-1 text-left">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h5 className="font-black text-xl text-gray-900 group-hover:text-brand-blue transition-colors leading-tight">{stay.name}</h5>
                                                            <div className="flex items-center gap-1 text-gray-500 text-sm mt-1 font-medium">
                                                                <MapPin size={14} /> {stay.location}
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-1 bg-brand-gold/10 text-brand-gold px-2 py-1 rounded-lg font-black text-sm">
                                                            <Star size={14} className="fill-brand-gold" /> {stay.rating}
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center mt-5">
                                                        <div className="flex flex-col">
                                                            <span className="text-[10px] uppercase font-black text-gray-400 tracking-tighter">per night</span>
                                                            <p className="text-xl font-black text-brand-blue">PKR {stay.price.toLocaleString()}</p>
                                                        </div>
                                                        <button className="bg-brand-blue text-white px-6 py-2.5 rounded-xl font-bold hover:bg-brand-slate transition-all flex items-center gap-2 group/btn">
                                                            {language === 'ur' ? 'بک کریں' : 'Book Now'}
                                                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="text-center py-16">
                                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                                        <Search size={40} />
                                    </div>
                                    <p className="text-xl font-bold text-gray-900 mb-2">
                                        {language === 'ur' ? 'کوئی نتیجہ نہیں ملا' : 'No matches found'}
                                    </p>
                                    <p className="text-gray-500 max-w-xs mx-auto">
                                        {language === 'ur'
                                            ? `معذرت، "${destination}" کے لیے کوئی جگہ نہیں ملی۔`
                                            : `We couldn't find anything matching "${destination}". Try searching for Skardu or Hunza.`}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </Modal>
            </div>
        </section>
    );
};

export default Hero;
