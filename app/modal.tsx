import { Colors, Spacing, Typography } from '@/constants/Styles';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Modal() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Modal</Text>
      <Text style={styles.description}>
        This is a modal screen. You can dismiss it by swiping down.
      </Text>
      <Link href="/" style={styles.link}>
        <Text style={styles.linkText}>Go back to Portfolio</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: Spacing.lg,
    backgroundColor: Colors.background,
  },
  title: {
    ...Typography.h2,
    color: Colors.foreground,
    marginBottom: Spacing.md,
  },
  description: {
    ...Typography.body,
    color: Colors.gray400,
    textAlign: 'center',
    marginBottom: Spacing.xl,
  },
  link: {
    marginTop: Spacing.md,
  },
  linkText: {
    ...Typography.body,
    color: Colors.primary,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
});
