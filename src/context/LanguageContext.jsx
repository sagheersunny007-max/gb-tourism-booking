import React, { createContext, useContext, useState } from 'react';

const translations = {
    en: {
        nav: {
            destinations: 'Destinations',
            stays: 'Stays',
            guides: 'Guides',
            about: 'About',
            signin: 'Sign In',
        },
        hero: {
            discover: 'Discover the North',
            title: 'Find Your Place in the',
            mountains: 'Mountains',
            subtitle: 'Plan your perfect getaway to Gilgit-Baltistan. Explore serene lakes, rugged peaks, and valley retreats.',
            placeholder: 'Where are you going?',
            guests: 'Guests',
            checkin: 'Check-in Date',
            search: 'Search',
        },
        destinations: {
            title: 'Explore by District',
            subtitle: 'From the cherry blossoms of Hunza to the cold desserts of Skardu, discover the diverse landscapes of the North.',
        },
        footer: {
            subscribe: 'Subscribe',
            subscribeDesc: 'Get the latest travel updates and exclusive offers.',
            placeholder: 'Your email address',
            success: 'Thank you for subscribing!',
        }
    },
    ur: {
        nav: {
            destinations: 'مقامات',
            stays: 'رہائش',
            guides: 'گائیڈز',
            about: 'ہمارے بارے میں',
            signin: 'سائن ان',
        },
        hero: {
            discover: 'شمال کی سیر کریں',
            title: 'پہاڑوں میں اپنی',
            mountains: 'پسندیدہ جگہ تلاش کریں',
            subtitle: 'گلگت بلتستان کے لیے اپنے بہترین سفر کی منصوبہ بندی کریں۔ پرسکون جھیلیں، ناہموار چوٹیاں، اور وادیوں کی سیر کریں۔',
            placeholder: 'آپ کہاں جانا چاہتے ہیں؟',
            guests: 'مہمان',
            checkin: 'آمد کی تاریخ',
            search: 'تلاش کریں',
        },
        destinations: {
            title: 'اضلاع کے لحاظ سے سیر کریں',
            subtitle: 'ہنزہ کے چیری بلاسم سے لے کر اسکردو کے سرد صحراؤں تک، شمال کے متنوع مناظر کو دیکھیں۔',
        },
        footer: {
            subscribe: 'سبسکرائب کریں',
            subscribeDesc: 'سفر کی تازہ ترین معلومات اور خصوصی پیشکشیں حاصل کریں۔',
            placeholder: 'آپ کا ای میل پتہ',
            success: 'سبسکرائب کرنے کا شکریہ!',
        }
    }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const t = (path) => {
        const keys = path.split('.');
        let result = translations[language];
        for (const key of keys) {
            if (result[key]) {
                result = result[key];
            } else {
                return path;
            }
        }
        return result;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            <div className={language === 'ur' ? 'font-urdu' : ''} dir={language === 'ur' ? 'rtl' : 'ltr'}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
