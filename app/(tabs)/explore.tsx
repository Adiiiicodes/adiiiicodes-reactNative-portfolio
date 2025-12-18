import { Colors, Spacing, Typography } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ExploreScreen() {
  const projects = [
    {
      name: 'Project One',
      description: 'A brief description of project one. It does amazing things.',
      repoLink: 'https://github.com/Adiiiicodes',
      thumbnail: require('@/assets/images/PIC1.jpg'),
      technologies: ['React Native', 'TypeScript'],
    },
    {
      name: 'Project Two',
      description: 'This is the second project, focusing on backend development.',
      repoLink: 'https://github.com/Adiiiicodes',
      thumbnail: require('@/assets/images/PIC2.png'),
      technologies: ['Node.js', 'Express'],
    },
    {
      name: 'Project Three',
      description: 'A full-stack application with a modern frontend.',
      repoLink: 'https://github.com/Adiiiicodes',
      thumbnail: require('@/assets/images/PIC3.png'),
      technologies: ['React', 'FastAPI', 'PostgreSQL'],
    },
    {
      name: 'Project Four',
      description: 'A mobile app for connecting people.',
      repoLink: 'https://github.com/Adiiiicodes',
      thumbnail: require('@/assets/images/PIC4.png'),
      technologies: ['Flutter', 'Firebase'],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="rocket" size={64} color={Colors.primary} />
        <Text style={styles.title}>My Projects</Text>
        <Text style={styles.subtitle}>
          A collection of my work, from web to mobile.
        </Text>
      </View>

      <View style={styles.content}>
        {projects.map((project, index) => (
          <View key={index} style={styles.projectCard}>
            <Image source={project.thumbnail} style={styles.thumbnail} />
            <View style={styles.projectInfo}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectName}>{project.name}</Text>
                <TouchableOpacity onPress={() => Linking.openURL(project.repoLink)}>
                  <Ionicons name="logo-github" size={24} color={Colors.gray400} />
                </TouchableOpacity>
              </View>
              <Text style={styles.projectDescription}>{project.description}</Text>
              <View style={styles.techTags}>
                {project.technologies.map((tech, i) => (
                  <View key={i} style={styles.tag}>
                    <Text style={styles.tagText}>{tech}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        ))}
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
  projectCard: {
    backgroundColor: Colors.secondary,
    borderRadius: 12,
    marginBottom: Spacing.lg,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 200,
  },
  projectInfo: {
    padding: Spacing.md,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Spacing.sm,
  },
  projectName: {
    ...Typography.h4,
    color: Colors.foreground,
  },
  projectDescription: {
    ...Typography.body,
    color: Colors.gray300,
    marginBottom: Spacing.md,
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