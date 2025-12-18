import { Colors, Spacing, Typography } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Alert, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';

const AboutNative = () => {
    const handleDownloadResume = async () => {
        try {
            // For PDFs in assets, the simplest approach is to host it online
            // and open it with the default PDF viewer
            const resumeUrl = 'https://www.adityanalawade.fun/adi_resume.pdf';
            // Replace with your actual hosted PDF URL (Google Drive, Dropbox, your server, etc.)

            // Alternative: Open locally hosted PDF if you set up a web server for it
            // const resumeUrl = 'file:///android_asset/adi_resume.pdf';

            const canOpen = await Linking.canOpenURL(resumeUrl);
            if (canOpen) {
                await Linking.openURL(resumeUrl);
            } else {
                Alert.alert('Error', 'Cannot open PDF viewer');
            }
        } catch (error) {
            console.error('Error opening resume:', error);
            Alert.alert('Error', 'Failed to open resume. Please try again.');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>About Me</Text>
                <View style={styles.divider} />
            </View>

            <View style={styles.content}>
                {/* Profile Card */}
                <Animated.View entering={FadeInLeft.duration(600).delay(200)} style={styles.profileSection}>
                    <View style={styles.profileCard}>
                        <LinearGradient
                            colors={[Colors.primary, Colors.accent]}
                            style={styles.profileGradient}
                        >
                            <View style={styles.profileInner}>
                                <Text style={styles.initialsText}>AN</Text>
                            </View>
                        </LinearGradient>

                        {/* Experience Badge */}
                        <View style={styles.experienceBadge}>
                            <Text style={styles.experienceNumber}>1+</Text>
                            <Text style={styles.experienceLabel}>Years{'\n'}Experience</Text>
                        </View>
                    </View>
                </Animated.View>

                {/* Info Section */}
                <Animated.View entering={FadeInRight.duration(600).delay(400)} style={styles.infoSection}>
                    <Text style={styles.subtitle}>Computer Engineering Student</Text>
                    <Text style={styles.description}>
                        A tech-savvy, results-driven student, I'm passionate about innovation and learning in
                        Computer Engineering. I excel in Python and Generative AI, building scalable, intelligent
                        apps, and leverage Flask for robust backend solutions, eager to deliver impactful results
                        in dynamic tech spaces.
                    </Text>

                    <View style={styles.detailsContainer}>
                        <View style={styles.detailItem}>
                            <View style={styles.iconContainer}>
                                <Ionicons name="call" size={20} color={Colors.primary} />
                            </View>
                            <View>
                                <Text style={styles.detailLabel}>Phone</Text>
                                <Text
                                    style={styles.detailValue}
                                    onPress={() => Linking.openURL('tel:8369746981')}
                                >
                                    8369746981
                                </Text>
                            </View>
                        </View>

                        <View style={styles.detailItem}>
                            <View style={styles.iconContainer}>
                                <Ionicons name="calendar" size={20} color={Colors.primary} />
                            </View>
                            <View>
                                <Text style={styles.detailLabel}>Date of Birth</Text>
                                <Text style={styles.detailValue}>02-06-2005 Thane</Text>
                            </View>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.resumeButton} onPress={handleDownloadResume}>
                        <Text style={styles.resumeButtonText}>View Resume</Text>
                    </TouchableOpacity>
                </Animated.View>
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
        gap: Spacing.xl,
    },
    profileSection: {
        alignItems: 'center',
    },
    profileCard: {
        position: 'relative',
        width: 280,
        height: 280,
    },
    profileGradient: {
        width: '100%',
        height: '100%',
        borderRadius: 12,
        padding: 8,
    },
    profileInner: {
        flex: 1,
        backgroundColor: Colors.secondary,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    initialsText: {
        fontSize: 80,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    experienceBadge: {
        position: 'absolute',
        bottom: -24,
        right: -24,
        backgroundColor: Colors.white,
        borderRadius: 12,
        padding: Spacing.md,
        alignItems: 'center',
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
        minWidth: 120,
    },
    experienceNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    experienceLabel: {
        fontSize: 12,
        color: Colors.gray600,
        textAlign: 'center',
    },
    infoSection: {
        marginTop: Spacing.xl,
    },
    subtitle: {
        ...Typography.h3,
        color: Colors.foreground,
        marginBottom: Spacing.md,
    },
    description: {
        ...Typography.body,
        color: Colors.gray300,
        marginBottom: Spacing.lg,
        lineHeight: 24,
    },
    detailsContainer: {
        gap: Spacing.lg,
        marginBottom: Spacing.xl,
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.md,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.primary + '20',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailLabel: {
        ...Typography.caption,
        fontWeight: '600',
        color: Colors.foreground,
    },
    detailValue: {
        ...Typography.body,
        color: Colors.gray400,
    },
    resumeButton: {
        backgroundColor: Colors.primary,
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.lg,
        borderRadius: 8,
        alignItems: 'center',
    },
    resumeButtonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
});

export default AboutNative;
