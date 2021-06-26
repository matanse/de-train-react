import React, {useState} from 'react'
import { View, Button, TextInput, StyleSheet } from "react-native";

interface Props {
    onSearch: (arg0: string) => void
}

const Input = ({ onSearch }: Props) => {
    const [textSearch, setTextSearch] = useState<string>('')

    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <TextInput style={styles.textInput} placeholder='enter station name' onChangeText={(text)=> setTextSearch(text)}  value={textSearch}/>
            </View>
            <View style={styles.buttonView}>
                <Button title='Search' onPress={() => {
                    onSearch(textSearch);
                }} />
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: '2%'
    },
    textView: {
        minWidth: "55%",
        maxWidth: '55%',
        marginRight: '2%',
        padding: 4
    },
    textInput: {
        fontSize: 18
    },
    buttonView: {
        width: '30%',
    }
})

export default Input
