import { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native'

const TaskCard = ({task}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
        <Pressable style={styles.container} onLongPress={()=>setIsOpen(true)}>
            <Text style={styles.title}>{task.title}</Text>
        </Pressable>
        <Modal
        animationType="slide"
        transparent={true}
        visible={isOpen}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure to mark this task done ?</Text>
            <View style={styles.modalButtonsContainer}>
                <Pressable
                    style={styles.button}
                    onPress={() => setIsOpen(false)}>
                    <Text style={styles.textStyle}>Yes</Text>
                </Pressable>
                <Pressable
                    style={styles.button}
                    onPress={() => setIsOpen(false)}>
                    <Text style={styles.textStyle}>No</Text>
                </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

export default TaskCard


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
    },
    title: {
        backgroundColor: '#7DA452',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        padding:10,
        borderRadius: 10,
        overflow: 'hidden',
        fontSize: 18,
        color: 'white',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      modalButtonsContainer:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'red',
      }
});