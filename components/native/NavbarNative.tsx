import { Colors, Spacing, Typography } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Linking, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface NavbarNativeProps {
    onNavigate?: (section: string) => void;
}

const NavbarNative = ({ onNavigate }: NavbarNativeProps) => {
    const [menuVisible, setMenuVisible] = useState(false);

    const navLinks = [
        { name: 'Home', section: 'home' },
        { name: 'About', section: 'about' },
        { name: 'Skills', section: 'skills' },
        { name: 'Experience', section: 'experience' },
        { name: 'Education', section: 'education' },
        { name: 'Contact', section: 'contact' },
    ];

    const socialLinks = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aditya-nalawade-a4b081297/', icon: 'logo-linkedin' },
        { name: 'Instagram', url: 'https://www.instagram.com/adicodessss/', icon: 'logo-instagram' },
        { name: 'GitHub', url: 'https://github.com/Adiiiicodes', icon: 'logo-github' },
        { name: 'Twitter', url: 'https://x.com/scriptSageAdi?t=hT2DX3oxX-SNIqdtgRnn7Q&s=09', icon: 'logo-twitter' },
    ];

    const handleNavigation = (section: string) => {
        setMenuVisible(false);
        if (onNavigate) {
            onNavigate(section);
        }
    };

    return (
        <>
            <View style={styles.navbar}>
                <View style={styles.container}>
                    {/* Logo/Name */}
                    <TouchableOpacity onPress={() => handleNavigation('home')}>
                        <Text style={styles.logo}>
                            Aditya<Text style={styles.logoDot}>.</Text>
                        </Text>
                    </TouchableOpacity>

                    {/* Social Links - Always visible */}
                    <View style={styles.socialContainer}>
                        {socialLinks.map((link) => (
                            <TouchableOpacity
                                key={link.name}
                                onPress={() => Linking.openURL(link.url)}
                                style={styles.socialButton}
                            >
                                <Ionicons name={link.icon as any} size={20} color={Colors.foreground} />
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Menu Button */}
                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress={() => setMenuVisible(!menuVisible)}
                    >
                        <Ionicons
                            name={menuVisible ? 'close' : 'menu'}
                            size={28}
                            color={Colors.foreground}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Slide-out Menu */}
            <Modal
                visible={menuVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setMenuVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.menuContainer}>
                        {/* Menu Header */}
                        <View style={styles.menuHeader}>
                            <Text style={styles.menuTitle}>Navigation</Text>
                            <TouchableOpacity onPress={() => setMenuVisible(false)}>
                                <Ionicons name="close" size={32} color={Colors.foreground} />
                            </TouchableOpacity>
                        </View>

                        {/* Navigation Links */}
                        <View style={styles.menuLinks}>
                            {navLinks.map((link) => (
                                <TouchableOpacity
                                    key={link.name}
                                    style={styles.menuLink}
                                    onPress={() => handleNavigation(link.section)}
                                >
                                    <Text style={styles.menuLinkText}>{link.name}</Text>
                                    <Ionicons name="chevron-forward" size={20} color={Colors.gray400} />
                                </TouchableOpacity>
                            ))}
                        </View>

                        {/* Social Links in Menu */}
                        <View style={styles.menuSocial}>
                            <Text style={styles.menuSocialTitle}>Connect With Me</Text>
                            <View style={styles.menuSocialLinks}>
                                {socialLinks.map((link) => (
                                    <TouchableOpacity
                                        key={link.name}
                                        style={styles.menuSocialButton}
                                        onPress={() => {
                                            Linking.openURL(link.url);
                                            setMenuVisible(false);
                                        }}
                                    >
                                        <Ionicons name={link.icon as any} size={24} color={Colors.primary} />
                                        <Text style={styles.menuSocialText}>{link.name}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: Colors.gray800,
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary + '30',
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.md,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        ...Typography.h3,
        color: Colors.primary,
        fontWeight: 'bold',
    },
    logoDot: {
        color: Colors.accent,
    },
    socialContainer: {
        flexDirection: 'row',
        gap: Spacing.sm,
        flex: 1,
        justifyContent: 'flex-end',
        marginRight: Spacing.md,
    },
    socialButton: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: Colors.primary + '20',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuButton: {
        padding: 4,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    menuContainer: {
        backgroundColor: Colors.secondary,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingTop: Spacing.lg,
        paddingBottom: Spacing.xxl,
        paddingHorizontal: Spacing.lg,
        maxHeight: '80%',
    },
    menuHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: Spacing.xl,
    },
    menuTitle: {
        ...Typography.h2,
        color: Colors.foreground,
    },
    menuLinks: {
        gap: Spacing.xs,
        marginBottom: Spacing.xl,
    },
    menuLink: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: Spacing.md,
        paddingHorizontal: Spacing.md,
        backgroundColor: Colors.background,
        borderRadius: 12,
    },
    menuLinkText: {
        ...Typography.body,
        fontSize: 18,
        color: Colors.foreground,
        fontWeight: '500',
    },
    menuSocial: {
        borderTopWidth: 1,
        borderTopColor: Colors.gray700,
        paddingTop: Spacing.lg,
    },
    menuSocialTitle: {
        ...Typography.body,
        fontWeight: '600',
        color: Colors.foreground,
        marginBottom: Spacing.md,
    },
    menuSocialLinks: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: Spacing.md,
    },
    menuSocialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.sm,
        backgroundColor: Colors.primary + '20',
        paddingVertical: Spacing.sm,
        paddingHorizontal: Spacing.md,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.primary + '40',
    },
    menuSocialText: {
        ...Typography.caption,
        color: Colors.primary,
        fontWeight: '600',
    },
});

export default NavbarNative;
