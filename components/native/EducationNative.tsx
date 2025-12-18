import { Colors, Spacing, Typography } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

const EducationNative = () => {
    const educationItems = [
        {
            degree: 'B.E. Computer Engineering',
            institution: 'Pillai HOC College of Engineering & Technology, Rasayani',
            period: 'August 2023 - Present',
            description:
                'Currently a Third-year B.E. student in Computer Engineering at Pillai HOC College of Engineering and Technology.',
            icon: 'school',
        },
        {
            degree: '11th - 12th Standard, CBSE Curriculum',
            institution: 'Radcliffe Group of Schools, Kharghar',
            period: 'April 2021 - March 2023',
            description:
                'I excelled in Physics, Chemistry, and Mathematics (PCM) under the CBSE board, while strategically preparing for JEE Mains and competitive exams, boosting my analytical prowess, problem-solving acumen, and time-optimization skills.',
            icon: 'book',
        },
        {
            degree: 'JrKG - 10th Standard, CBSE Curriculum',
            institution: "Ryan's St.Joseph's High School, Khanda Colony",
            period: 'April 2009 - March 2021',
            description:
                'These were the years which shaped my foundational knowledge, helped me generate some interest and experiment with it in both field of education and sports and I can also say these were some prime hand cricket playing years.',
            icon: 'book-outline',
        },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>Education</Text>
                <View style={styles.divider} />
            </View>

            <View style={styles.timeline}>
                {educationItems.map((item, index) => (
                    <Animated.View
                        key={index}
                        entering={FadeInUp.duration(600).delay(index * 100)}
                        style={styles.timelineItem}
                    >
                        <View style={styles.iconBadge}>
                            <Ionicons name={item.icon as any} size={24} color={Colors.primary} />
                        </View>

                        <View style={styles.cardContent}>
                            <View style={styles.periodBadge}>
                                <Text style={styles.periodText}>{item.period}</Text>
                            </View>

                            <Text style={styles.degreeText}>{item.degree}</Text>
                            <Text style={styles.institutionText}>{item.institution}</Text>
                            <Text style={styles.descriptionText}>{item.description}</Text>
                        </View>
                    </Animated.View>
                ))}
            </View>

            <Animated.View entering={FadeInUp.duration(600).delay(400)} style={styles.footerText}>
                <Text style={styles.footerContent}>
                    My educational journey has equipped me with strong foundations in computer science,
                    mathematics, and problem-solving. I continuously seek to expand my knowledge through
                    self-learning, online courses, and practical projects.
                </Text>
            </Animated.View>
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
    timeline: {
        gap: Spacing.lg,
    },
    timelineItem: {
        backgroundColor: Colors.secondary,
        borderRadius: 12,
        padding: Spacing.lg,
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
    periodText: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.primary,
    },
    degreeText: {
        ...Typography.h4,
        color: Colors.foreground,
        marginBottom: Spacing.xs,
    },
    institutionText: {
        ...Typography.body,
        color: Colors.gray400,
        marginBottom: Spacing.sm,
    },
    descriptionText: {
        ...Typography.body,
        color: Colors.gray300,
        lineHeight: 22,
    },
    footerText: {
        marginTop: Spacing.xl,
        paddingHorizontal: Spacing.md,
    },
    footerContent: {
        ...Typography.body,
        color: Colors.gray300,
        textAlign: 'center',
        lineHeight: 24,
    },
});

export default EducationNative;
