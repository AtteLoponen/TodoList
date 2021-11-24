import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Tasks = (props) => {
    return (
        <View style={styles.taskItem}>
            <View style={styles.taskItemLeft}>
                <View style={styles.square} ></View>
                <Text style={styles.taskItemText}>{props.text}</Text>
                
            </View>
            <View style={styles.circular}>
            
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    taskItem: {
        backgroundColor: '#FFF2AB',
        padding: 12,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 25,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    taskItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'black',
        opacity: 0.1,
        borderRadius: 5,
        marginRight: 15,
    },
    taskItemText: {
        fontSize: 18,
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: 'black',
        opacity: 0.1,
        borderRadius: 5,
        borderWidth: 2,

    },
    delete: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

export default Tasks


