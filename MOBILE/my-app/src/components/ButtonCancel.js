import { TouchableOpacity, Text } from "react-native";

import styles from '../styles/style';

export default function ButtonCancel(props) {
    const { value, onPress } = props;
    
    return (
            <TouchableOpacity style={styles.btn2} onPress={() => {onPress()}}>
                <Text style={styles.textBtn2}>{value}</Text>
            </TouchableOpacity>
    )
}