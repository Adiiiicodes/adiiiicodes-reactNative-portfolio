import { Colors, Spacing, Typography } from '@/constants/Styles';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, { FadeIn, FadeInLeft, FadeInUp } from 'react-native-reanimated';

const HeroNative = () => {
    // Profile images carousel
    const images = [
        require('@/assets/images/PIC1.jpg'),
        require('@/assets/images/PIC2.png'),
        require('@/assets/images/PIC3.png'),
        require('@/assets/images/PIC4.png'),
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [images.length]);

    const handleContactPress = () => {
        // This will scroll to contact section - we'll handle this via ref in main component
        console.log('Contact pressed');
    };

    const handleLearnMore = () => {
        console.log('Learn more pressed');
    };

    return (
        <View style={styles.container}>
            {/* Background gradient effects */}
            <View style={styles.backgroundContainer}>
                <LinearGradient
                    colors={[Colors.primary + '20', 'transparent']}
                    style={styles.gradientTop}
                />
                <LinearGradient
                    colors={['transparent', Colors.accent + '20']}
                    style={styles.gradientBottom}
                />
            </View>

            <View style={styles.contentContainer}>
                {/* Text Content */}
                <Animated.View entering={FadeInLeft.duration(800)} style={styles.textContainer}>
                    <Animated.Text
                        entering={FadeIn.duration(800).delay(200)}
                        style={styles.greeting}
                    >
                        Hello, I'm
                    </Animated.Text>

                    <Animated.Text
                        entering={FadeIn.duration(800).delay(400)}
                        style={styles.name}
                    >
                        Aditya Nalawade
                    </Animated.Text>

                    <Animated.Text
                        entering={FadeIn.duration(800).delay(600)}
                        style={styles.title}
                    >
                        Full Stack Developer | Building{' '}
                        <Text
                            style={styles.link}
                            onPress={() => Linking.openURL('https://nextechdigital.in')}
                        >
                            NexTech
                        </Text>
                    </Animated.Text>

                    <Animated.Text
                        entering={FadeIn.duration(800).delay(800)}
                        style={styles.description}
                    >
                        Founder at Nextech | Full-stack Developer | GenAI Developer | DevOps Practitioner.
                        I design scalable backend systems, develop intelligent AI solutions using Python and
                        Generative AI, and manage cloud infrastructure on AWS EC2 alongside various AWS services
                        for seamless deployment and operations. Passionate about innovation, I blend performance,
                        automation, and scalability to deliver impactful, reliable applications.
                    </Animated.Text>

                    <Animated.View
                        entering={FadeInUp.duration(800).delay(1000)}
                        style={styles.buttonContainer}
                    >
                        <TouchableOpacity style={styles.primaryButton} onPress={handleContactPress}>
                            <Text style={styles.primaryButtonText}>Contact Me</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.outlineButton} onPress={handleLearnMore}>
                            <Text style={styles.outlineButtonText}>Learn More</Text>
                        </TouchableOpacity>
                    </Animated.View>
                </Animated.View>

                {/* Profile Image */}
                <Animated.View entering={FadeIn.duration(800)} style={styles.imageContainer}>
                    <View style={styles.imageWrapper}>
                        <LinearGradient
                            colors={[Colors.primary, Colors.accent]}
                            style={styles.imageGradient}
                        />
                        <View style={styles.imageInner}>
                            <Image
                                source={images[currentIndex]}
                                style={styles.profileImage}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                </Animated.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: 600,
        position: 'relative',
        paddingVertical: Spacing.xxl,
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    gradientTop: {
        position: 'absolute',
        top: 80,
        left: 40,
        width: 250,
        height: 250,
        borderRadius: 125,
    },
    gradientBottom: {
        position: 'absolute',
        bottom: 80,
        right: 40,
        width: 300,
        height: 300,
        borderRadius: 150,
    },
    contentContainer: {
        paddingHorizontal: Spacing.md,
        zIndex: 10,
    },
    textContainer: {
        marginBottom: Spacing.xl,
    },
    greeting: {
        ...Typography.h3,
        color: Colors.accent,
        marginBottom: Spacing.sm,
    },
    name: {
        ...Typography.h1,
        fontSize: 42,
        color: Colors.foreground,
        marginBottom: Spacing.md,
    },
    title: {
        ...Typography.h4,
        color: Colors.gray300,
        marginBottom: Spacing.lg,
    },
    link: {
        color: Colors.primary,
        textDecorationLine: 'underline',
    },
    description: {
        ...Typography.body,
        color: Colors.gray400,
        marginBottom: Spacing.xl,
        lineHeight: 26,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: Spacing.md,
        flexWrap: 'wrap',
    },
    primaryButton: {
        backgroundColor: Colors.primary,
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.md,
        borderRadius: 8,
    },
    primaryButtonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
    outlineButton: {
        borderWidth: 2,
        borderColor: Colors.primary,
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.md,
        borderRadius: 8,
    },
    outlineButtonText: {
        color: Colors.primary,
        fontSize: 16,
        fontWeight: '600',
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: Spacing.xl,
    },
    imageWrapper: {
        width: 280,
        height: 280,
        position: 'relative',
    },
    imageGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 140,
        opacity: 0.3,
    },
    imageInner: {
        position: 'absolute',
        top: 16,
        left: 16,
        right: 16,
        bottom: 16,
        backgroundColor: Colors.secondary,
        borderRadius: 124,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileImage: {
        width: '100%',
        height: '100%',
        borderRadius: 124,
    },
});

export default HeroNative;
