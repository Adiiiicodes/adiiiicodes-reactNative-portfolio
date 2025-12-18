import { Colors, Spacing, Typography } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ExploreScreen() {
  const resources = [
    {
      title: 'Expo Documentation',
      description: 'Learn about Expo and React Native development',
      url: 'https://docs.expo.dev',
      icon: 'book',
    },
    {
      title: 'React Native Docs',
      description: 'Official React Native documentation',
      url: 'https://reactnative.dev/docs/getting-started',
      icon: 'logo-react',
    },
    {
      title: 'My Portfolio Website',
      description: 'Visit the web version of this portfolio',
      url: 'https://nextechdigital.in',
      icon: 'globe',
    },
    {
      title: 'GitHub Profile',
      description: 'Check out my open source projects',
      url: 'https://github.com/Adiiiicodes',
      icon: 'logo-github',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="compass" size={64} color={Colors.primary} />
        <Text style={styles.title}>Explore</Text>
        <Text style={styles.subtitle}>
          Useful resources and links for learning and development
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Resources</Text>

        {resources.map((resource, index) => (
          <TouchableOpacity
            key={index}
            style={styles.resourceCard}
            onPress={() => Linking.openURL(resource.url)}
          >
            <View style={styles.iconContainer}>
              <Ionicons name={resource.icon as any} size={32} color={Colors.primary} />
            </View>
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>{resource.title}</Text>
              <Text style={styles.resourceDescription}>{resource.description}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color={Colors.gray400} />
          </TouchableOpacity>
        ))}

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>About This App</Text>
          <Text style={styles.infoText}>
            This is a native Android portfolio app built with React Native and Expo.
            It showcases my work, skills, experience, and provides easy ways to get in touch.
          </Text>

          <View style={styles.techStack}>
            <Text style={styles.techTitle}>Built With:</Text>
            <View style={styles.techTags}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>React Native</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Expo</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>TypeScript</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Reanimated</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    alignItems: 'center',
    paddingVertical: Spacing.xxl,
    paddingHorizontal: Spacing.md,
    backgroundColor: Colors.gray800,
  },
  title: {
    ...Typography.h1,
    color: Colors.foreground,
    marginTop: Spacing.md,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    ...Typography.body,
    color: Colors.gray400,
    textAlign: 'center',
    maxWidth: '80%',
  },
  content: {
    padding: Spacing.md,
  },
  sectionTitle: {
    ...Typography.h3,
    color: Colors.foreground,
    marginBottom: Spacing.lg,
    marginTop: Spacing.md,
  },
  resourceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.secondary,
    borderRadius: 12,
    padding: Spacing.md,
    marginBottom: Spacing.md,
    gap: Spacing.md,
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primary + '20',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resourceContent: {
    flex: 1,
  },
  resourceTitle: {
    ...Typography.body,
    fontWeight: '600',
    color: Colors.foreground,
    marginBottom: 4,
  },
  resourceDescription: {
    ...Typography.caption,
    color: Colors.gray400,
  },
  infoSection: {
    backgroundColor: Colors.secondary,
    borderRadius: 12,
    padding: Spacing.lg,
    marginTop: Spacing.lg,
  },
  infoTitle: {
    ...Typography.h4,
    color: Colors.foreground,
    marginBottom: Spacing.md,
  },
  infoText: {
    ...Typography.body,
    color: Colors.gray300,
    lineHeight: 24,
    marginBottom: Spacing.lg,
  },
  techStack: {
    marginTop: Spacing.md,
  },
  techTitle: {
    ...Typography.body,
    fontWeight: '600',
    color: Colors.foreground,
    marginBottom: Spacing.sm,
  },
  techTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  tag: {
    backgroundColor: Colors.primary + '20',
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.primary + '40',
  },
  tagText: {
    ...Typography.caption,
    color: Colors.primary,
    fontWeight: '600',
  },
});
