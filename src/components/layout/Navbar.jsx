import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, User, CheckCircle } from 'lucide-react';
import Modal from './Modal';
import { useLanguage } from '../../context/LanguageContext';

const Navbar = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(null); // 'signin' or 'language'

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { key: 'destinations', label: t('nav.destinations') },
        { key: 'stays', label: t('nav.stays') },
        { key: 'guides', label: t('nav.guides') },
        { key: 'about', label: t('nav.about') },
    ];

    return (
        <>
            <nav
                className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
                            GB<span className={isScrolled ? 'text-brand-slate' : 'text-gray-300'}>Tourism</span>
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.key}
                                href={`#${item.key}`}
                                className={`text-sm font-medium transition-colors hover:text-brand-gold ${isScrolled ? 'text-gray-700' : 'text-white/90'
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button
                            onClick={() => setActiveModal('language')}
                            className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-brand-gold transition-colors p-2`}
                            aria-label="Switch Language"
                        >
                            <Globe size={20} />
                        </button>
                        <button
                            onClick={() => setActiveModal('signin')}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${isScrolled
                                ? 'bg-brand-blue text-white hover:bg-brand-blue/90'
                                : 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border border-white/20'
                                }`}
                        >
                            <User size={18} />
                            {t('nav.signin')}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
                        ) : (
                            <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top-2">
                        {navItems.map((item) => (
                            <a
                                key={item.key}
                                href={`#${item.key}`}
                                className="text-gray-700 font-semibold text-lg hover:text-brand-blue"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="pt-6 border-t border-gray-100 flex flex-col gap-3">
                            <button
                                onClick={() => { setIsMobileMenuOpen(false); setActiveModal('language'); }}
                                className="w-full py-4 rounded-xl border border-gray-200 text-gray-700 font-bold"
                            >
                                {language === 'ur' ? 'زبان تبدیل کریں' : 'Switch Language'}
                            </button>
                            <button
                                onClick={() => { setIsMobileMenuOpen(false); setActiveModal('signin'); }}
                                className="w-full py-4 rounded-xl bg-brand-blue text-white font-bold"
                            >
                                {t('nav.signin')}
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Sign In Modal */}
            <Modal
                isOpen={activeModal === 'signin'}
                onClose={() => setActiveModal(null)}
                title={t('nav.signin')}
            >
                <div className="space-y-4">
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-blue">
                            <User size={32} />
                        </div>
                        <p className="text-gray-600">Enter your details to access your bookings.</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue outline-none transition-all" />
                    </div>
                    <button className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-brand-slate transition-colors mt-4">
                        Continue
                    </button>
                    <p className="text-center text-sm text-gray-500">
                        Don't have an account? <span className="text-brand-blue font-semibold cursor-pointer" onClick={() => setActiveModal(null)}>Register</span>
                    </p>
                </div>
            </Modal>

            {/* Language Modal */}
            <Modal
                isOpen={activeModal === 'language'}
                onClose={() => setActiveModal(null)}
                title={language === 'ur' ? 'زبان منتخب کریں' : 'Select Language'}
            >
                <div className="grid grid-cols-1 gap-3">
                    {[
                        { name: 'English', code: 'en' },
                        { name: 'اردو (Urdu)', code: 'ur' }
                    ].map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => { setLanguage(lang.code); setActiveModal(null); }}
                            className={`flex items-center justify-between p-4 rounded-xl border transition-all ${language === lang.code ? 'border-brand-blue bg-brand-blue/5' : 'border-gray-100 hover:bg-gray-50'
                                }`}
                        >
                            <span className="font-semibold text-gray-900">{lang.name}</span>
                            {language === lang.code && <CheckCircle size={18} className="text-brand-blue" />}
                        </button>
                    ))}
                </div>
            </Modal>
        </>
    );
};

export default Navbar;
