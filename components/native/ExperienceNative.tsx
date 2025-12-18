import { Colors, Spacing, Typography } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const ExperienceNative = () => {
    const experiences = [
        {
            title: 'Founder',
            company: 'NexTech',
            companyUrl: 'https://nextech-ebon.vercel.app',
            location: 'Panvel',
            period: 'May 2025 - Present',
            description:
                'As a Founder and GenAI Developer at NexTech, I lead the development of personalised AI-driven solutions. My role involves managing teams and client acquisition, and tech lead. This venture has honed my leadership skills, deepened my technical expertise, and helped me understand business, marketing and outreach.',
            icon: 'rocket',
        },
        {
            title: 'Co-founder',
            company: 'HuntLy',
            companyUrl: 'https://huntly-eight.vercel.app',
            location: 'Panvel',
            period: 'May 2025 - Present',
            description:
                'As a Co-founder and Backend Developer at HuntLy, I lead the development of an AI-driven job search platform, enhancing user experience through innovative features. My role involves architecting scalable backend systems, integrating AI functionalities, and optimizing performance.',
            icon: 'search',
        },
        {
            title: 'SDE Intern',
            company: 'level SuperMind Co-founded by Beer Biceps',
            companyUrl: 'https://level.game',
            location: 'Lower Parel',
            period: 'January 2025 - March 2025',
            description:
                'As a proactive Backend Developer for SuperSoul (upcoming launch), I engineer AI-powered backend systems using Flask and optimize non-AI components with Node.js, driving seamless scalability and performance.',
            icon: 'briefcase',
        },
    ];

    const achievements = [
        {
            title: 'Hackaronyx 2025 - National Level Hackathon Finalist',
            organization: 'St. Vincent Palloti College of Engineering and technology, Nagpur',
            period: 'June 2025',
            description:
                'I led Project: X to be finalists of Hackaronyx 2025, a national-level hackathon where our team secured rank - 9 from 3800+ teams from all over India.',
            icon: 'medal',
        },
        {
            title: 'National Level Generative-AI Buildathon Semifinalist',
            organization: '100x Engineers, Banglore',
            period: 'June 2025',
            description:
                'I led Project: X to be semifinalists of 100xEngineers Buildathon2 June 2025, we got qualified after a 72 hours-online GenAI hackathon where our team was selected among 3500+ teams from all over India.',
            icon: 'medal',
        },
        {
            title: 'National Level Generative-AI Hackathon Winner',
            organization: 'Mumbai',
            period: 'January 2025',
            description:
                'I led Project: X to secure 1st place at the Level SuperMind National Hackathon, a 24-hour challenge where our team was selected among 800 top coders from over 25,000 teams across India.',
            icon: 'trophy',
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>Experience & Achievements</Text>
                <View style={styles.divider} />
            </View>

            <View style={styles.content}>
                {/* Work Experience */}
                <View style={styles.section}>
                    <View style={styles.subsectionHeader}>
                        <Ionicons name="briefcase" size={24} color={Colors.primary} />
                        <Text style={styles.subsectionTitle}>Work Experience</Text>
                    </View>

                    {experiences.map((exp, index) => (
                        <Animated.View
                            key={index}
                            entering={FadeInUp.duration(600).delay(index * 100)}
                            style={styles.experienceCard}
                        >
                            <View style={styles.iconBadge}>
                                <Ionicons name={exp.icon as any} size={24} color={Colors.primary} />
                            </View>

                            <View style={styles.cardContent}>
                                <View style={styles.periodBadge}>
                                    <Text style={styles.periodText}>{exp.period}</Text>
                                </View>

                                <Text style={styles.cardTitle}>{exp.title}</Text>

                                <TouchableOpacity onPress={() => Linking.openURL(exp.companyUrl)}>
                                    <Text style={styles.companyText}>
                                        {exp.company} | {exp.location}
                                    </Text>
                                </TouchableOpacity>

                                <Text style={styles.cardDescription}>{exp.description}</Text>
                            </View>
                        </Animated.View>
                    ))}
                </View>

                {/* Achievements */}
                <View style={styles.section}>
                    <View style={styles.subsectionHeader}>
                        <Ionicons name="trophy" size={24} color={Colors.primary} />
                        <Text style={styles.subsectionTitle}>Achievements</Text>
                    </View>

                    {achievements.map((achievement, index) => (
                        <Animated.View
                            key={index}
                            entering={FadeInUp.duration(600).delay(index * 100)}
                            style={styles.achievementCard}
                        >
                            <View style={[styles.iconBadge, styles.iconBadgeAccent]}>
                                <Ionicons name={achievement.icon as any} size={24} color={Colors.accent} />
                            </View>

                            <View style={styles.cardContent}>
                                <View style={[styles.periodBadge, styles.periodBadgeAccent]}>
                                    <Text style={[styles.periodText, styles.periodTextAccent]}>{achievement.period}</Text>
                                </View>

                                <Text style={styles.cardTitle}>{achievement.title}</Text>
                                <Text style={styles.organizationText}>{achievement.organization}</Text>
                                <Text style={styles.cardDescription}>{achievement.description}</Text>
                            </View>
                        </Animated.View>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: Spacing.xxl,
        paddingHorizontal: Spacing.md,
        backgroundColor: Colors.gray800,
    },
    header: {
        alignItems: 'center',
        marginBottom: Spacing.xl,
    },
    sectionTitle: {
        ...Typography.h2,
        color: Colors.foreground,
        marginBottom: Spacing.md,
    },
    divider: {
        width: 80,
        height: 4,
        backgroundColor: Colors.accent,
    },
    content: {
        gap: Spacing.xxl,
    },
    section: {
        gap: Spacing.lg,
    },
    subsectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm,
        marginBottom: Spacing.md,
    },
    subsectionTitle: {
        ...Typography.h3,
        color: Colors.foreground,
    },
    experienceCard: {
        backgroundColor: Colors.secondary,
        borderRadius: 12,
        padding: Spacing.lg,
        marginBottom: Spacing.md,
        flexDirection: 'row',
        gap: Spacing.md,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 2,
    },
    achievementCard: {
        backgroundColor: Colors.secondary,
        borderRadius: 12,
        padding: Spacing.lg,
        marginBottom: Spacing.md,
        flexDirection: 'row',
        gap: Spacing.md,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 2,
    },
    iconBadge: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.white,
        borderWidth: 4,
        borderColor: Colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconBadgeAccent: {
        borderColor: Colors.accent,
    },
    cardContent: {
        flex: 1,
    },
    periodBadge: {
        backgroundColor: Colors.primary + '20',
        paddingHorizontal: Spacing.sm,
        paddingVertical: 4,
        borderRadius: 12,
        alignSelf: 'flex-start',
        marginBottom: Spacing.sm,
    },
    periodBadgeAccent: {
        backgroundColor: Colors.accent + '20',
    },
    periodText: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.primary,
    },
    periodTextAccent: {
        color: Colors.accent,
    },
    cardTitle: {
        ...Typography.h4,
        color: Colors.foreground,
        marginBottom: Spacing.xs,
    },
    companyText: {
        ...Typography.body,
        color: Colors.primary,
        marginBottom: Spacing.sm,
        textDecorationLine: 'underline',
    },
    organizationText: {
        ...Typography.body,
        color: Colors.gray400,
        marginBottom: Spacing.sm,
    },
    cardDescription: {
        ...Typography.body,
        color: Colors.gray300,
        lineHeight: 22,
    },
});

export default ExperienceNative;
