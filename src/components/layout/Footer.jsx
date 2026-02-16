import React, { useState } from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Footer = () => {
    const { t, language } = useLanguage();
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setTimeout(() => {
                setIsSubscribed(false);
                setEmail('');
            }, 3000);
        }
    };

    return (
        <footer className="bg-brand-blue text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <span className="text-2xl font-bold tracking-tight text-white mb-6 block">
                            GB<span className="text-gray-400">Tourism</span>
                        </span>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {language === 'ur'
                                ? 'گلگت بلتستان کی دلکش خوبصورتی کا تجربہ کریں۔ اسکردو کی پرسکون جھیلوں سے لے کر ہنزہ کی شاندار چوٹیوں تک، ہم آپ کو بہترین قیام تلاش کرنے میں مدد کرتے ہیں۔'
                                : 'Experience the breathtaking beauty of Gilgit-Baltistan. From the serene lakes of Skardu to the majestic peaks of Hunza, we help you find the perfect stay.'
                            }
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">{language === 'ur' ? 'ایکسپلور کریں' : 'Explore'}</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#destinations" className="hover:text-white transition-colors">{t('nav.destinations')}</a></li>
                            <li><a href="#stays" className="hover:text-white transition-colors">{t('nav.stays')}</a></li>
                            <li><a href="#guides" className="hover:text-white transition-colors">{t('nav.guides')}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{language === 'ur' ? 'ٹور پیکجز' : 'Tour Packages'}</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">{language === 'ur' ? 'بلاگ' : 'Blog'}</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">{language === 'ur' ? 'تعلق کریں' : 'Contact Us'}</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="shrink-0 mt-0.5" size={18} />
                                <span>{language === 'ur' ? 'مین بازار، گلگت سٹی، گلگت بلتستان، پاکستان' : 'Main Bazaar, Gilgit City, Gilgit-Baltistan, Pakistan'}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="shrink-0" size={18} />
                                <span>+92 5811 123456</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="shrink-0" size={18} />
                                <span>hello@gbtourism.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">{t('footer.subscribe')}</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            {t('footer.subscribeDesc')}
                        </p>
                        <form className="flex flex-col gap-3" onSubmit={handleSubscribe}>
                            {isSubscribed ? (
                                <div className="bg-green-500/10 text-green-400 p-3 rounded-lg flex items-center gap-2 text-sm font-medium animate-in fade-in zoom-in-95">
                                    <CheckCircle size={18} />
                                    <span>{t('footer.success')}</span>
                                </div>
                            ) : (
                                <>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder={t('footer.placeholder')}
                                        className="bg-white/10 border border-white/20 text-white placeholder:text-gray-500 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-gold transition-colors text-sm"
                                    />
                                    <button
                                        type="submit"
                                        className="bg-brand-gold text-brand-blue font-bold rounded-lg px-4 py-3 hover:bg-yellow-400 transition-colors transform active:scale-95 duration-200"
                                    >
                                        {t('footer.subscribe')}
                                    </button>
                                </>
                            )}
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} GB Tourism. {language === 'ur' ? 'جملہ حقوق محفوظ ہیں۔' : 'All rights reserved.'}</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">{language === 'ur' ? 'رازداری کی پالیسی' : 'Privacy Policy'}</a>
                        <a href="#" className="hover:text-white transition-colors">{language === 'ur' ? 'شرائط و ضوابط' : 'Terms of Service'}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
