import { StyleSheet } from 'react-native';

// Portfolio color scheme matching globals.css
export const Colors = {
    primary: '#3b82f6',
    secondary: '#111827',
    accent: '#10b981',
    background: '#1e293b',
    foreground: '#f1f5f9',

    // Additional colors for mobile
    gray50: '#f8fafc',
    gray100: '#f1f5f9',
    gray200: '#e2e8f0',
    gray300: '#cbd5e1',
    gray400: '#94a3b8',
    gray600: '#475569',
    gray700: '#334155',
    gray800: '#1e293b',
    gray900: '#0f172a',

    white: '#ffffff',
    black: '#000000',
};

export const Spacing = {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
};

export const Typography = {
    h1: {
        fontSize: 36,
        fontWeight: 'bold' as const,
        lineHeight: 42,
    },
    h2: {
        fontSize: 30,
        fontWeight: 'bold' as const,
        lineHeight: 36,
    },
    h3: {
        fontSize: 24,
        fontWeight: '600' as const,
        lineHeight: 30,
    },
    h4: {
        fontSize: 20,
        fontWeight: '600' as const,
        lineHeight: 26,
    },
    body: {
        fontSize: 16,
        lineHeight: 24,
    },
    bodyLarge: {
        fontSize: 18,
        lineHeight: 28,
    },
    caption: {
        fontSize: 14,
        lineHeight: 20,
    },
    small: {
        fontSize: 12,
        lineHeight: 18,
    },
};

export const CommonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    sectionContainer: {
        paddingHorizontal: Spacing.md,
        paddingVertical: Spacing.xxl,
    },
    card: {
        backgroundColor: Colors.white,
        borderRadius: 12,
        padding: Spacing.lg,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    cardDark: {
        backgroundColor: Colors.secondary,
        borderRadius: 12,
        padding: Spacing.lg,
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 3,
    },
    buttonPrimary: {
        backgroundColor: Colors.primary,
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.md,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonOutline: {
        borderWidth: 2,
        borderColor: Colors.primary,
        paddingHorizontal: Spacing.lg,
        paddingVertical: Spacing.md,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: Colors.white,
        fontSize: 16,
        fontWeight: '600',
    },
    buttonOutlineText: {
        color: Colors.primary,
        fontSize: 16,
        fontWeight: '600',
    },
    sectionTitle: {
        ...Typography.h2,
        color: Colors.foreground,
        textAlign: 'center',
        marginBottom: Spacing.md,
    },
    divider: {
        width: 80,
        height: 4,
        backgroundColor: Colors.accent,
        alignSelf: 'center',
        marginBottom: Spacing.xl,
    },
});

export default {
    Colors,
    Spacing,
    Typography,
    CommonStyles,
};
