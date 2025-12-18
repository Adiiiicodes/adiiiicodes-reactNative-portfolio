import { Colors, Spacing, Typography } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInLeft, FadeInRight } from 'react-native-reanimated';

const ContactNative = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setIsSubmitting(true);

        try {
            // For now, we'll just compose an email - you can replace this with your API endpoint
            const emailBody = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
            const emailUrl = `mailto:nalawadeaditya017@gmail.com?subject=${encodeURIComponent(
                formData.subject
            )}&body=${encodeURIComponent(emailBody)}`;

            await Linking.openURL(emailUrl);

            Alert.alert('Success', 'Email client opened! Please send your message.');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            Alert.alert('Error', 'Failed to open email client');
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aditya-nalawade-a4b081297/', icon: 'logo-linkedin' },
        { name: 'Instagram', url: 'https://www.instagram.com/adicodessss/', icon: 'logo-instagram' },
        { name: 'GitHub', url: 'https://github.com/Adiiiicodes', icon: 'logo-github' },
        { name: 'Twitter', url: 'https://x.com/scriptSageAdi?t=hT2DX3oxX-SNIqdtgRnn7Q&s=09', icon: 'logo-twitter' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.sectionTitle}>Get In Touch</Text>
                <View style={styles.divider} />
            </View>

            <View style={styles.content}>
                {/* Contact Info */}
                <Animated.View entering={FadeInLeft.duration(600).delay(200)} style={styles.infoSection}>
                    <Text style={styles.subtitle}>Contact Information</Text>
                    <Text style={styles.description}>
                        Feel free to reach out to me for any inquiries, collaborations, or just to say hello!
                    </Text>

                    <View style={styles.contactDetails}>
                        <TouchableOpacity
                            style={styles.contactItem}
                            onPress={() => Linking.openURL('tel:8369746981')}
                        >
                            <Ionicons name="call" size={24} color={Colors.primary} />
                            <View>
                                <Text style={styles.contactLabel}>Phone</Text>
                                <Text style={styles.contactValue}>8369746981</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.contactItem}
                            onPress={() => Linking.openURL('mailto:nalawadeaditya017@gmail.com')}
                        >
                            <Ionicons name="mail" size={24} color={Colors.primary} />
                            <View>
                                <Text style={styles.contactLabel}>Email</Text>
                                <Text style={styles.contactValue}>nalawadeaditya017@gmail.com</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* Social Links */}
                    <Text style={styles.followTitle}>Follow Me</Text>
                    <View style={styles.socialLinks}>
                        {socialLinks.map((link) => (
                            <TouchableOpacity
                                key={link.name}
                                style={styles.socialButton}
                                onPress={() => Linking.openURL(link.url)}
                            >
                                <Ionicons name={link.icon as any} size={28} color={Colors.primary} />
                            </TouchableOpacity>
                        ))}
                    </View>
                </Animated.View>

                {/* Contact Form */}
                <Animated.View entering={FadeInRight.duration(600).delay(400)} style={styles.formSection}>
                    <View style={styles.formCard}>
                        <Text style={styles.formTitle}>Send Me a Message</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Your Name"
                            placeholderTextColor={Colors.gray400}
                            value={formData.name}
                            onChangeText={(text) => setFormData({ ...formData, name: text })}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Your Email"
                            placeholderTextColor={Colors.gray400}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            value={formData.email}
                            onChangeText={(text) => setFormData({ ...formData, email: text })}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder="Subject"
                            placeholderTextColor={Colors.gray400}
                            value={formData.subject}
                            onChangeText={(text) => setFormData({ ...formData, subject: text })}
                        />

                        <TextInput
                            style={[styles.input, styles.messageInput]}
                            placeholder="Your Message"
                            placeholderTextColor={Colors.gray400}
                            multiline
                            numberOfLines={5}
                            textAlignVertical="top"
                            value={formData.message}
                            onChangeText={(text) => setFormData({ ...formData, message: text })}
                        />

                        <TouchableOpacity
                            style={[styles.submitButton, isSubmitting && styles.submitButtonDisabled]}
                            onPress={handleSubmit}
                            disabled={isSubmitting}
                        >
                            <Text style={styles.submitButtonText}>
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Text>
                        </TouchableOpacity>
                    </View>
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
        gap: Spacing.xxl,
    },
    infoSection: {
        gap: Spacing.md,
    },
    subtitle: {
        ...Typography.h3,
        color: Colors.foreground,
        marginBottom: Spacing.sm,
    },
    description: {
        ...Typography.body,
        color: Colors.gray300,
        marginBottom: Spacing.lg,
    },
    contactDetails: {
        gap: Spacing.lg,
        marginBottom: Spacing.lg,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: Spacing.md,
    },
    contactLabel: {
        ...Typography.caption,
        fontWeight: '600',
        color: Colors.foreground,
    },
    contactValue: {
        ...Typography.body,
        color: Colors.gray400,
    },
    followTitle: {
        ...Typography.body,
        fontWeight: '600',
        color: Colors.foreground,
        marginTop: Spacing.md,
        marginBottom: Spacing.sm,
    },
    socialLinks: {
        flexDirection: 'row',
        gap: Spacing.md,
    },
    socialButton: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: Colors.primary + '20',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formSection: {},
    formCard: {
        backgroundColor: Colors.secondary,
        borderRadius: 12,
        padding: Spacing.lg,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 4,
    },
    formTitle: {
        ...Typography.h3,
        color: Colors.foreground,
        marginBottom: Spacing.lg,
    },
    input: {
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.gray300,
        borderRadius: 8,
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.sm + 4,
        marginBottom: Spacing.md,
        fontSize: 16,
        color: Colors.gray900,
    },
    messageInput: {
        minHeight: 120,
        paddingTop: Spacing.sm + 4,
    },
    submitButton: {
        backgroundColor: Colors.primary,
        paddingVertical: Spacing.md,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: Spacing.sm,
    },
    submitButtonDisabled: {
        opacity: 0.6,
    },
    submitButtonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
});

export default ContactNative;
