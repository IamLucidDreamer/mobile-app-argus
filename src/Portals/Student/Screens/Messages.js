import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottomNav from '../Components/UniversalComponents/BottomNav';
import TopComponent from '../Components/UniversalComponents/TopComponent';

export default function Messages() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            width: '95%',
            backgroundColor: '#fff',
            padding: 15,
            alignSelf: 'center',
            marginVertical: 20,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 8,
          }}
        >
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            <Image
              style={{
                width: 60,
                height: 60,
                resizeMode: 'contain',
                borderRadius: 10,
              }}
              source={require('../../../../assets/UniversalAssets/TestingImage.png')}
            />
            <View
              style={{ marginHorizontal: 15, justifyContent: 'space-evenly' }}
            >
              <Text
                style={{
                  color: '#8890A6',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
              >
                Name Here
              </Text>
              <Text
                style={{
                  color: '#8890A6',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}
              >
                Position in the Company
              </Text>
            </View>
          </View>
          <Divider width={1} />
          <Text
            style={{
              color: '#8890A6',
              fontSize: 15,
              lineHeight: 20,
              marginTop: 15,
              fontWeight: 'bold',
            }}
          >
            Subject:
          </Text>
          <Text
            style={{
              color: '#8890A6',
              fontSize: 15,
              lineHeight: 20,
              marginVertical: 15,
            }}
          >
            The Messages will come here. The Messages will come here. The
            Messages will come here. The Messages will come here. The Messages
            will come here. The Messages will come here. The Messages will come
            here.
          </Text>
          <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
            <Text
              style={{
                color: '#8890A6',
                fontSize: 13,
                fontWeight: 'bold',
              }}
            >
              dd/mm/yyyy
            </Text>
            <Text
              style={{
                color: '#8890A6',
                fontSize: 13,
                fontWeight: 'bold',
                marginHorizontal: 15,
              }}
            >
              mm:hh
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '95%',
            backgroundColor: '#fff',
            padding: 15,
            alignSelf: 'center',
            marginVertical: 20,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 8,
          }}
        >
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            <Image
              style={{
                width: 60,
                height: 60,
                resizeMode: 'contain',
                borderRadius: 10,
              }}
              source={require('../../../../assets/UniversalAssets/TestingImage.png')}
            />
            <View
              style={{ marginHorizontal: 15, justifyContent: 'space-evenly' }}
            >
              <Text
                style={{
                  color: '#8890A6',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
              >
                Name Here
              </Text>
              <Text
                style={{
                  color: '#8890A6',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}
              >
                Position in the Company
              </Text>
            </View>
          </View>
          <Divider width={1} />
          <Text
            style={{
              color: '#8890A6',
              fontSize: 15,
              lineHeight: 20,
              marginTop: 15,
              fontWeight: 'bold',
            }}
          >
            Subject:
          </Text>
          <Text
            style={{
              color: '#8890A6',
              fontSize: 15,
              lineHeight: 20,
              marginVertical: 15,
            }}
          >
            The Messages will come here. The Messages will come here. The
            Messages will come here. The Messages will come here. The Messages
            will come here. The Messages will come here. The Messages will come
            here.
          </Text>
          <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
            <Text
              style={{
                color: '#8890A6',
                fontSize: 13,
                fontWeight: 'bold',
              }}
            >
              dd/mm/yyyy
            </Text>
            <Text
              style={{
                color: '#8890A6',
                fontSize: 13,
                fontWeight: 'bold',
                marginHorizontal: 15,
              }}
            >
              mm:hh
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '95%',
            backgroundColor: '#fff',
            padding: 15,
            alignSelf: 'center',
            marginVertical: 20,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 8,
          }}
        >
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            <Image
              style={{
                width: 60,
                height: 60,
                resizeMode: 'contain',
                borderRadius: 10,
              }}
              source={require('../../../../assets/UniversalAssets/TestingImage.png')}
            />
            <View
              style={{ marginHorizontal: 15, justifyContent: 'space-evenly' }}
            >
              <Text
                style={{
                  color: '#8890A6',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
              >
                Name Here
              </Text>
              <Text
                style={{
                  color: '#8890A6',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}
              >
                Position in the Company
              </Text>
            </View>
          </View>
          <Divider width={1} />
          <Text
            style={{
              color: '#8890A6',
              fontSize: 15,
              lineHeight: 20,
              marginTop: 15,
              fontWeight: 'bold',
            }}
          >
            Subject:
          </Text>
          <Text
            style={{
              color: '#8890A6',
              fontSize: 15,
              lineHeight: 20,
              marginVertical: 15,
            }}
          >
            The Messages will come here. The Messages will come here. The
            Messages will come here. The Messages will come here. The Messages
            will come here. The Messages will come here. The Messages will come
            here.
          </Text>
          <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
            <Text
              style={{
                color: '#8890A6',
                fontSize: 13,
                fontWeight: 'bold',
              }}
            >
              dd/mm/yyyy
            </Text>
            <Text
              style={{
                color: '#8890A6',
                fontSize: 13,
                fontWeight: 'bold',
                marginHorizontal: 15,
              }}
            >
              mm:hh
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '95%',
            backgroundColor: '#fff',
            padding: 15,
            alignSelf: 'center',
            marginVertical: 20,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 8,
          }}
        >
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            <Image
              style={{
                width: 60,
                height: 60,
                resizeMode: 'contain',
                borderRadius: 10,
              }}
              source={require('../../../../assets/UniversalAssets/TestingImage.png')}
            />
            <View
              style={{ marginHorizontal: 15, justifyContent: 'space-evenly' }}
            >
              <Text
                style={{
                  color: '#8890A6',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
              >
                Name Here
              </Text>
              <Text
                style={{
                  color: '#8890A6',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}
              >
                Position in the Company
              </Text>
            </View>
          </View>
          <Divider width={1} />
          <Text
            style={{
              color: '#8890A6',
              fontSize: 15,
              lineHeight: 20,
              marginTop: 15,
              fontWeight: 'bold',
            }}
          >
            Subject:
          </Text>
          <Text
            style={{
              color: '#8890A6',
              fontSize: 15,
              lineHeight: 20,
              marginVertical: 15,
            }}
          >
            The Messages will come here. The Messages will come here. The
            Messages will come here. The Messages will come here. The Messages
            will come here. The Messages will come here. The Messages will come
            here.
          </Text>
          <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
            <Text
              style={{
                color: '#8890A6',
                fontSize: 13,
                fontWeight: 'bold',
              }}
            >
              dd/mm/yyyy
            </Text>
            <Text
              style={{
                color: '#8890A6',
                fontSize: 13,
                fontWeight: 'bold',
                marginHorizontal: 15,
              }}
            >
              mm:hh
            </Text>
          </View>
        </View>
        <View
          style={{
            width: '95%',
            backgroundColor: '#fff',
            padding: 15,
            alignSelf: 'center',
            marginVertical: 20,
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.8,
            shadowRadius: 4,
            elevation: 8,
          }}
        >
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            <Image
              style={{
                width: 60,
                height: 60,
                resizeMode: 'contain',
                borderRadius: 10,
              }}
              source={require('../../../../assets/UniversalAssets/TestingImage.png')}
            />
            <View
              style={{ marginHorizontal: 15, justifyContent: 'space-evenly' }}
            >
              <Text
                style={{
                  color: '#8890A6',
                  fontSize: 15,
                  fontWeight: 'bold',
                }}
              >
                Name Here
              </Text>
              <Text
                style={{
                  color: '#8890A6',
                  fontSize: 13,
                  fontWeight: 'bold',
                }}
              >
                Position in the Company
              </Text>
            </View>
          </View>
          <Divider width={1} />
          <Text
            style={{
              color: '#8890A6',
              fontSize: 15,
              lineHeight: 20,
              marginTop: 15,
              fontWeight: 'bold',
            }}
          >
            Subject:
          </Text>
          <Text
            style={{
              color: '#8890A6',
              fontSize: 15,
              lineHeight: 20,
              marginVertical: 15,
            }}
          >
            The Messages will come here. The Messages will come here. The
            Messages will come here. The Messages will come here. The Messages
            will come here. The Messages will come here. The Messages will come
            here.
          </Text>
          <View style={{ alignSelf: 'flex-end', flexDirection: 'row' }}>
            <Text
              style={{
                color: '#8890A6',
                fontSize: 13,
                fontWeight: 'bold',
              }}
            >
              dd/mm/yyyy
            </Text>
            <Text
              style={{
                color: '#8890A6',
                fontSize: 13,
                fontWeight: 'bold',
                marginHorizontal: 15,
              }}
            >
              mm:hh
            </Text>
          </View>
        </View>
      </ScrollView>
      <Divider width={1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F9',
  },
});
