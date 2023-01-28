import { TouchableOpacity, Text } from "react-native";

import styles from '../styles/style';

export default function ButtonSubmit(props) {
    const { value, onPress } = props;
    
    return (
            <TouchableOpacity style={styles.btn3} onPress={() => {onPress()}}>
                <Text style={styles.textBtn3}>{value}</Text>
            </TouchableOpacity>
    )
}