import AboutNative from '@/components/native/AboutNative';
import ContactNative from '@/components/native/ContactNative';
import EducationNative from '@/components/native/EducationNative';
import ExperienceNative from '@/components/native/ExperienceNative';
import FooterNative from '@/components/native/FooterNative';
import HeroNative from '@/components/native/HeroNative';
import SkillsNative from '@/components/native/SkillsNative';
import { Colors } from '@/constants/Styles';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <HeroNative />
        <AboutNative />
        <SkillsNative />
        <ExperienceNative />
        <EducationNative />
        <ContactNative />
        <FooterNative />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
