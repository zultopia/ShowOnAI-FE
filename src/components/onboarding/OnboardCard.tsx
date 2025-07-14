import type React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

interface OnboardCardProps {
    children: React.ReactNode;
    title: React.ReactNode;
    subtitle: string;
}

export function OnboardCard({ children, title, subtitle }: OnboardCardProps) {
    return (
        <Card className="w-full max-w-2xl mx-auto px-4 py-12 bg-white backdrop-blur-sm border-0 rounded-3xl shadow-xl">
            <CardHeader className="text-start space-y-4 pb-6">
                <div className="w-16 h-16 bg-primary-blue-100 rounded-2xl flex items-center justify-center">
                    <Image width={36} height={36} src="/onboarding.svg" alt="Onboarding" />
                </div>

                <div className="space-y-2">
                    <h1 className="text-4xl font-bold text-neutral-900">
                        {title}
                    </h1>
                    <p className="text-neutral-400 text-2xl leading-relaxed">{subtitle}</p>
                </div>
            </CardHeader>

            <CardContent className="space-y-6">{children}</CardContent>
        </Card>
    );
}
