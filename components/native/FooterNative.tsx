import { Colors, Spacing, Typography } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FooterNative = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aditya-nalawade-a4b081297/', icon: 'logo-linkedin' },
        { name: 'Instagram', url: 'https://www.instagram.com/adicodessss/', icon: 'logo-instagram' },
        { name: 'GitHub', url: 'https://github.com/Adiiiicodes', icon: 'logo-github' },
        { name: 'Twitter', url: 'https://x.com/scriptSageAdi?t=hT2DX3oxX-SNIqdtgRnn7Q&s=09', icon: 'logo-twitter' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.name}>Aditya Nalawade</Text>
                <Text style={styles.tagline}>Full Stack Developer | GenAI Developer | DevOps Practitioner</Text>

                <View style={styles.socialLinks}>
                    {socialLinks.map((link) => (
                        <TouchableOpacity
                            key={link.name}
                            style={styles.socialButton}
                            onPress={() => Linking.openURL(link.url)}
                        >
                            <Ionicons name={link.icon as any} size={24} color={Colors.foreground} />
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.divider} />

                <View style={styles.footerBottom}>
                    <Text style={styles.copyright}>© {currentYear} Aditya Nalawade. All rights reserved.</Text>
                    <Text style={styles.madeWith}>
                        Made with <Ionicons name="heart" size={14} color={Colors.accent} /> using React Native
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.secondary,
        paddingVertical: Spacing.xxl,
        paddingHorizontal: Spacing.md,
        borderTopWidth: 1,
        borderTopColor: Colors.primary + '30',
    },
    content: {
        alignItems: 'center',
    },
    name: {
        ...Typography.h3,
        color: Colors.foreground,
        marginBottom: Spacing.xs,
    },
    tagline: {
        ...Typography.body,
        color: Colors.gray400,
        textAlign: 'center',
        marginBottom: Spacing.lg,
    },
    socialLinks: {
        flexDirection: 'row',
        gap: Spacing.md,
        marginBottom: Spacing.lg,
    },
    socialButton: {
        width: 44,
        height: 44,
        borderRadius: 22,
        backgroundColor: Colors.primary + '20',
        justifyContent: 'center',
        alignItems: 'center',
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: Colors.gray700,
        marginVertical: Spacing.lg,
    },
    footerBottom: {
        alignItems: 'center',
        gap: Spacing.xs,
    },
    copyright: {
        ...Typography.caption,
        color: Colors.gray400,
    },
    madeWith: {
        ...Typography.caption,
        color: Colors.gray400,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default FooterNative;
