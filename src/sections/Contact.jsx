import { useState, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Button from '../components/Button.jsx';
import Earth from '../components/Earth.jsx';

// EmailJS Configuration - Replace with your actual values
const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_o2hwwmj', // Replace with your EmailJS service ID
    TEMPLATE_ID: 'template_ykykxjf', // Replace with your EmailJS template ID
    PUBLIC_KEY: 'hlgE6_M2Gmkp50fkI' // Replace with your EmailJS public key
};

// Rotating Earth Component
const RotatingEarth = () => {
    const earthRef = useRef();

    useFrame((state, delta) => {
        if (earthRef.current) {
            earthRef.current.rotation.y += delta * 0.2; // Slow rotation
        }
    });

    return (
        <Earth ref={earthRef} scale={0.09} />
    );
};

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: '',
        agreeToContact: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errors, setErrors] = useState({});

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }, []);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        if (!formData.agreeToContact) {
            newErrors.agreeToContact = 'You must agree to be contacted by email';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const templateParams = {
                full_name: formData.fullName,
                email: formData.email,
                subject: formData.subject,
                message: formData.message
            };

            const response = await emailjs.send(
                EMAILJS_CONFIG.SERVICE_ID,
                EMAILJS_CONFIG.TEMPLATE_ID,
                templateParams,
                EMAILJS_CONFIG.PUBLIC_KEY
            );

            if (response.status === 200) {
                setSubmitStatus('success');
                setFormData({
                    fullName: '',
                    email: '',
                    subject: '',
                    message: '',
                    agreeToContact: false
                });
                setErrors({});
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 3000);
        }
    };

    return (
        <section id="contact" className="c-space my-20">
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-5 h-full">
                
                {/* Left side - Contact Form */}
                <div className="col-span-1">
                    <div className="grid-container h-full">
                        <div className="text-center">
                            <p className="grid-headtext">
                                Get In Touch
                            </p>
                            <p className="grid-subtext mb-6">
                                Feel free to reach out if you'd like to work together, 
                                have a question, or just want to say hello!
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4 flex-1">
                            {/* Full Name Input */}
                            <div className="space-y-2">
                                <label htmlFor="fullName" className="text-white text-sm font-medium">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                    className={`w-full bg-black-300 px-4 py-3 rounded-lg border text-white placeholder-gray-400 
                                             focus:outline-none transition-all duration-300 resize-none
                                             ${errors.fullName ? 'border-red-500' : 'border-black-400 hover:border-gray-500 focus:border-gray-500'}`}
                                    placeholder="Enter your full name"
                                />
                                {errors.fullName && (
                                    <p className="text-red-400 text-xs">{errors.fullName}</p>
                                )}
                            </div>

                            {/* Email Input */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-white text-sm font-medium">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className={`w-full bg-black-300 px-4 py-3 rounded-lg border text-white placeholder-gray-400 
                                             focus:outline-none transition-all duration-300 resize-none
                                             ${errors.email ? 'border-red-500' : 'border-black-400 hover:border-gray-500 focus:border-gray-500'}`}
                                    placeholder="Enter your email address"
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-xs">{errors.email}</p>
                                )}
                            </div>

                            {/* Subject Input */}
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-white text-sm font-medium">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className={`w-full bg-black-300 px-4 py-3 rounded-lg border text-white placeholder-gray-400 
                                             focus:outline-none transition-all duration-300 resize-none
                                             ${errors.subject ? 'border-red-500' : 'border-black-400 hover:border-gray-500 focus:border-gray-500'}`}
                                    placeholder="What is this about?"
                                />
                                {errors.subject && (
                                    <p className="text-red-400 text-xs">{errors.subject}</p>
                                )}
                            </div>

                            {/* Message Textarea */}
                            <div className="space-y-2 flex-1">
                                <label htmlFor="message" className="text-white text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="6"
                                    className={`w-full bg-black-300 px-4 py-3 rounded-lg border text-white placeholder-gray-400 
                                             focus:outline-none transition-all duration-300 resize-none
                                             ${errors.message ? 'border-red-500' : 'border-black-400 hover:border-gray-500 focus:border-gray-500'}`}
                                    placeholder="Tell me about your project or how I can help..."
                                />
                                {errors.message && (
                                    <p className="text-red-400 text-xs">{errors.message}</p>
                                )}
                            </div>

                            {/* Agreement Checkbox */}
                            <div className="space-y-2">
                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="agreeToContact"
                                        name="agreeToContact"
                                        checked={formData.agreeToContact}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 w-4 h-4 bg-black-300 border border-black-400 
                                                 text-white focus:ring-gray-500 focus:ring-2 
                                                 transition-all duration-300 hover:border-gray-500"
                                    />
                                    <label htmlFor="agreeToContact" className="text-white text-sm font-medium leading-relaxed">
                                        I agree to be contacted by email.
                                    </label>
                                </div>
                                {errors.agreeToContact && (
                                    <p className="text-red-400 text-xs ml-7">{errors.agreeToContact}</p>
                                )}
                            </div>

                            {/* Submit Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="p-3 bg-green-900/20 border border-green-500/30 rounded-lg">
                                    <p className="text-green-400 text-sm">
                                        Message sent successfully! I'll get back to you soon.
                                    </p>
                                </div>
                            )}
                            
                            {submitStatus === 'error' && (
                                <div className="p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
                                    <p className="text-red-400 text-sm">
                                        Something went wrong. Please try again or email me directly at colinwmclaughlin@outlook.com
                                    </p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <div className="pt-4">
                                <Button
                                    name={isSubmitting ? "Sending..." : "Send Message"}
                                    isBeam={!isSubmitting}
                                    containerClass="w-full"
                                    disabled={isSubmitting}
                                />
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right side - 3D Earth Globe */}
                <div className="col-span-1 h-full">
                    <Canvas
                        camera={{ position: [0, 0, 3], fov: 50 }}
                        style={{ background: 'transparent', width: '100%', height: '100%' }}
                    >
                        <ambientLight intensity={0.4} />
                        <directionalLight 
                            position={[10, 10, 5]} 
                            intensity={1} 
                            castShadow 
                        />
                        <RotatingEarth />
                        <OrbitControls 
                            enableZoom={false}
                            enablePan={false}
                            autoRotate={false}
                        />
                        <Environment preset="city" />
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default Contact; 