import AboutNative from '@/components/native/AboutNative';
import ContactNative from '@/components/native/ContactNative';
import EducationNative from '@/components/native/EducationNative';
import ExperienceNative from '@/components/native/ExperienceNative';
import FooterNative from '@/components/native/FooterNative';
import HeroNative from '@/components/native/HeroNative';
import NavbarNative from '@/components/native/NavbarNative';
import SkillsNative from '@/components/native/SkillsNative';
import { Colors } from '@/constants/Styles';
import React, { useRef } from 'react';
import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  const scrollViewRef = useRef<ScrollView>(null);
  const sectionRefs = useRef<{ [key: string]: number }>({});

  const handleNavigate = (section: string) => {
    const position = sectionRefs.current[section];
    if (position !== undefined && scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: position, animated: true });
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background} />

      <ScrollView
        ref={scrollViewRef}
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ height: 40 }} />
        <NavbarNative onNavigate={handleNavigate} />

        <View onLayout={(e) => sectionRefs.current['home'] = e.nativeEvent.layout.y}>
          <HeroNative onNavigate={handleNavigate} />
        </View>

        <View onLayout={(e) => sectionRefs.current['about'] = e.nativeEvent.layout.y}>
          <AboutNative />
        </View>

        <View onLayout={(e) => sectionRefs.current['skills'] = e.nativeEvent.layout.y}>
          <SkillsNative />
        </View>

        <View onLayout={(e) => sectionRefs.current['experience'] = e.nativeEvent.layout.y}>
          <ExperienceNative />
        </View>

        <View onLayout={(e) => sectionRefs.current['education'] = e.nativeEvent.layout.y}>
          <EducationNative />
        </View>

        <View onLayout={(e) => sectionRefs.current['contact'] = e.nativeEvent.layout.y}>
          <ContactNative />
        </View>

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
