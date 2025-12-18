import { Colors, Spacing, Typography } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const SkillsNative = () => {
    const skills = [
        { name: 'Python', icon: 'logo-python' },
        { name: 'Flask', icon: 'flask' },
        { name: 'MongoDB', icon: 'server' },
        { name: 'Git', icon: 'git-branch' },
        { name: 'GitHub', icon: 'logo-github' },
        { name: 'Node.js', icon: 'logo-nodejs' },
        { name: 'AWS', icon: 'cloud' },
        { name: 'Docker', icon: 'logo-docker' },
        { name: 'Redis', icon: 'layers' },
        { name: 'JavaScript', icon: 'logo-javascript' },
        { name: 'Next.js', icon: 'triangle' },
        { name: 'TypeScript', icon: 'code-slash' },
        { name: 'Tailwind CSS', icon: 'color-palette' },
        { name: 'Linux', icon: 'terminal' },
        { name: 'PostgreSQL', icon: 'server' },
        { name: 'Postman', icon: 'send' },
        { name: 'Render', icon: 'rocket' },
        { name: 'Ngrok', icon: 'share' },
        { name: 'Nginx', icon: 'cube' },
        { name: 'Supabase', icon: 'database' },
        { name: 'Google Analytics', icon: 'analytics' },
    ];

    const languages = [
        { name: 'Marathi', level: 5 },
        { name: 'Hindi', level: 5 },
        { name: 'English', level: 5 },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>My Skills</Text>
                <View style={styles.divider} />
            </View>

            <View style={styles.content}>
                {/* Technical Skills */}
                <View style={styles.section}>
                    <Text style={styles.subsectionTitle}>Technical Skills</Text>
                    <View style={styles.skillsGrid}>
                        {skills.map((skill, index) => (
                            <Animated.View
                                key={skill.name}
                                entering={FadeInUp.duration(600).delay(index * 50)}
                                style={styles.skillCard}
                            >
                                <Ionicons name={skill.icon as any} size={32} color={Colors.primary} />
                                <Text style={styles.skillName}>{skill.name}</Text>
                            </Animated.View>
                        ))}
                    </View>
                </View>

                {/* Languages */}
                <View style={styles.section}>
                    <Text style={styles.subsectionTitle}>Languages</Text>
                    {languages.map((language, index) => (
                        <Animated.View
                            key={language.name}
                            entering={FadeInUp.duration(600).delay(index * 100)}
                            style={styles.languageItem}
                        >
                            <View style={styles.languageHeader}>
                                <Text style={styles.languageName}>{language.name}</Text>
                                <View style={styles.starsContainer}>
                                    {[...Array(5)].map((_, i) => (
                                        <Text
                                            key={i}
                                            style={[
                                                styles.star,
                                                i < language.level ? styles.starFilled : styles.starEmpty,
                                            ]}
                                        >
                                            ★
                                        </Text>
                                    ))}
                                </View>
                            </View>
                            <View style={styles.progressBar}>
                                <View
                                    style={[
                                        styles.progressFill,
                                        { width: `${(language.level / 5) * 100}%` },
                                    ]}
                                />
                            </View>
                        </Animated.View>
                    ))}

                    {/* Personal Interests */}
                    <Animated.View
                        entering={FadeInUp.duration(600).delay(400)}
                        style={styles.interestsCard}
                    >
                        <Text style={styles.interestsTitle}>Personal Interests</Text>
                        <Text style={styles.interestsText}>
                            When I'm not coding, I enjoy exploring new technologies, reading books, watching
                            movies, scrolling on LinkedIn as it's a great platform to learn about new people,
                            learning new things, and best place to get some inspiration, and staying updated with
                            the latest developments in AI and machine learning.
                        </Text>
                    </Animated.View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: Spacing.xxl,
        paddingHorizontal: Spacing.md,
        backgroundColor: Colors.background,
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
    subsectionTitle: {
        ...Typography.h3,
        color: Colors.foreground,
        marginBottom: Spacing.md,
    },
    skillsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.md,
    },
    skillCard: {
        backgroundColor: Colors.white,
        borderRadius: 12,
        padding: Spacing.lg,
        alignItems: 'center',
        justifyContent: 'center',
        width: '47%',
        minHeight: 120,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    skillName: {
        ...Typography.caption,
        fontWeight: '600',
        color: Colors.gray900,
        marginTop: Spacing.sm,
        textAlign: 'center',
    },
    languageItem: {
        marginBottom: Spacing.lg,
    },
    languageHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.sm,
    },
    languageName: {
        ...Typography.body,
        fontWeight: '600',
        color: Colors.foreground,
    },
    starsContainer: {
        flexDirection: 'row',
    },
    star: {
        fontSize: 18,
        marginHorizontal: 2,
    },
    starFilled: {
        color: Colors.accent,
    },
    starEmpty: {
        color: Colors.gray600,
    },
    progressBar: {
        height: 10,
        backgroundColor: Colors.gray700,
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: Colors.accent,
        borderRadius: 5,
    },
    interestsCard: {
        backgroundColor: Colors.secondary,
        borderRadius: 12,
        padding: Spacing.lg,
        marginTop: Spacing.lg,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 2,
    },
    interestsTitle: {
        ...Typography.h4,
        color: Colors.foreground,
        marginBottom: Spacing.md,
    },
    interestsText: {
        ...Typography.body,
        color: Colors.gray300,
        lineHeight: 24,
    },
});

export default SkillsNative;
