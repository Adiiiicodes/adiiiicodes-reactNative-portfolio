import { SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { StyleProp, ViewStyle } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export function IconSymbol({
    name,
    size = 24,
    color,
    style,
    weight = 'regular',
}: {
    name: SymbolViewProps['name'];
    size?: number;
    color: string | ((props: { color: string }) => React.ReactNode);
    style?: StyleProp<ViewStyle>;
    weight?: SymbolWeight;
}) {
    // Fallback to Ionicons if SymbolView is not available
    const iconName = (name as string).replace('.fill', '');

    return (
        <Ionicons
            name={iconName as any}
            size={size}
            color={typeof color === 'string' ? color : '#000'}
            style={style as any}
        />
    );
}
