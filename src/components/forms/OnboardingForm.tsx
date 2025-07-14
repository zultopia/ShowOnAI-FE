"use client";

import { AuthCard } from "@/components/auth/AuthCard";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const OnboardingForm = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 3;
    const [competitors, setCompetitors] = useState(['', '']);

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        }
    };

    const handlePrevious = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleRegenerateDescription = () => {
        console.log('Regenerate Description with AI clicked');
    };

    const addCompetitor = () => {
        setCompetitors([...competitors, '']);
    };

    const removeCompetitor = (index: number) => {
        if (competitors.length > 1) {
            setCompetitors(competitors.filter((_, i) => i !== index));
        }
    };

    const updateCompetitor = (index: number, value: string) => {
        const newCompetitors = [...competitors];
        newCompetitors[index] = value;
        setCompetitors(newCompetitors);
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="website" className="text-md font-medium text-neutral-700">
                                Company Website URL
                            </Label>
                            <Input
                                type="url"
                                id="website"
                                placeholder="https://yourcompany.com"
                                className="h-12 bg-neutral-50 border-neutral-200 focus:border-primary-blue-500 focus:ring-primary-blue-500"
                            />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="company-name" className="text-md font-medium text-neutral-700">
                                Company Name
                            </Label>
                            <Input
                                type="text"
                                id="company-name"
                                placeholder="Enter your company name"
                                className="h-12 bg-neutral-50 border-neutral-200 focus:border-primary-blue-500 focus:ring-primary-blue-500"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="company-description" className="text-md font-medium text-neutral-700">
                                Company Description
                            </Label>
                            <div className="relative">
                                <Input
                                    id="company-description"
                                    type="text"
                                    placeholder="Brief description of your company and what you do..."
                                    className="w-full min-h-[120px] px-3 py-3 bg-neutral-50 border border-neutral-200 rounded-lg placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary-blue-500 focus:border-primary-blue-500 resize-none"
                                />
                                <div className="absolute bottom-3 right-3">
                                    <Button
                                        type="button"
                                        onClick={handleRegenerateDescription}
                                        className="h-10 px-4 bg-primary-blue-500 hover:opacity-80 text-white font-medium rounded-lg flex items-center justify-center gap-2 text-sm cursor-pointer"
                                    >
                                        Regenerate Description with AI <span>
                                            <img src="/flash.svg" alt="flash" />
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label className="text-md font-medium text-neutral-700">
                                Competitor
                            </Label>
                            <div className="space-y-3">
                                {competitors.map((competitor, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <Input
                                            type="text"
                                            value={competitor}
                                            onChange={(e) => updateCompetitor(index, e.target.value)}
                                            placeholder="32XXXXXXXXXXXXXXX"
                                            className="h-12 bg-neutral-50 border-neutral-200 focus:border-primary-blue-500 focus:ring-primary-blue-500 flex-1"
                                        />

                                        <img src="/trush-square.svg" alt="trash" onClick={() => removeCompetitor(index)} className="cursor-pointer h-10 w-10" />

                                        <img src="/add-square.svg" alt="plus" onClick={addCompetitor} className="cursor-pointer h-10 w-10" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <AuthCard
            title={
                <>
                    Get Started with{" "}
                    <span className="bg-gradient-primary-blue text-gradient">
                        ShowOnAI!
                    </span>
                </>
            }
            subtitle="Your First Step Toward Smarter SEO Starts Here"
        >
            <div className="space-y-4">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                    >
                        {renderStepContent()}
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center mt-6 w-full gap-4">
                    <AnimatePresence>
                        {step > 1 && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className="flex-1"
                            >
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={handlePrevious}
                                    className="h-12 w-full bg-white hover:bg-neutral-50 text-neutral-700 font-medium rounded-lg border border-neutral-200 hover:border-neutral-300 flex items-center justify-center gap-2 hover:cursor-pointer"
                                >
                                    ← Previous
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <motion.div
                        className="flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button
                            type="button"
                            onClick={step === totalSteps ? () => console.log('Complete onboarding') : handleNext}
                            className="h-12 w-full bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:cursor-pointer"
                        >
                            Next →
                        </Button>
                    </motion.div>
                </div>

                {/* Progress Indicator */}
                <div className="pt-4">
                    <div className="flex justify-center space-x-2 mb-3">
                        {Array.from({ length: totalSteps }, (_, i) => (
                            <motion.div
                                key={i}
                                className={`h-2 w-full rounded-full ${i + 1 <= step
                                    ? 'bg-gradient-to-r from-[#2353DF]  via-[#36AAF3] to-[#3061E5]'
                                    : 'bg-gray-200'
                                    }`}
                                initial={{ scale: 0.95, opacity: 0.7 }}
                                animate={{
                                    scale: i + 1 <= step ? 1 : 0.95,
                                    opacity: i + 1 <= step ? 1 : 0.7
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                    delay: i * 0.1
                                }}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </AuthCard>
    );
};

export default OnboardingForm;