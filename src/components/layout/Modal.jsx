import React from 'react';
import { X, CheckCircle } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={onClose}
            />

            {/* Content */}
            <div className="relative bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300">
                <div className="p-4 flex justify-between items-center border-b border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900">{title}</h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X size={20} className="text-gray-500" />
                    </button>
                </div>

                <div className="p-8">
                    {children}
                </div>
            </div>
        </div>
    );
};

export const BookingSuccess = ({ onClose, itemName }) => (
    <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
            <CheckCircle size={32} />
        </div>
        <h4 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h4>
        <p className="text-gray-600 mb-8">
            Your request for <span className="font-semibold text-brand-blue">{itemName}</span> has been received.
            A local representative will contact you shortly with the details.
        </p>
        <button
            onClick={onClose}
            className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-brand-slate transition-colors"
        >
            Done
        </button>
    </div>
);

export default Modal;
