//jose cordeiro tela 1 e 2 do app 07/10

import React, { useState } from 'react';

import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';


export default function App() {

  const [tela, setTela] = useState('login');


    //tela login

  if (tela === 'login') {

    return (
    //icone localizacao 23 a 52
    //54 a 62 titulo achados e perdidos
    //...
    // vao me desculpar mas nao vou explicar tudo nao e muita coisa e so olhar com calma
      <View style={styles.loginScreen}>


        <View style={styles.logoArea}>

          <View style={styles.logoLocation}>

            <Ionicons
              name="location"
              size={77}
              color="#0868E8"
            />

            <View style={styles.logoCircle}>
              <View style={styles.logoCircleInside} />
            </View>

          </View>


          <View style={styles.searchIconLogo}>

            <Ionicons
              name="search"
              size={40}
              color="#123F82"
            />

          </View>

        </View>


        

        <Text style={styles.mainTitle}>
          Achados e{'\n'}Perdidos
        </Text>

        <Text style={styles.subtitle}>
          Conectando pessoas{'\n'}ao que é importante.
        </Text>


        <View style={{ height: 67 }} />

        <View style={styles.googleButton}>

          <Button
            title="Entra com Gmail"
            onPress={() => setTela('perfil')}
            color="#1269E8"
          />

        </View>

        <View style={styles.registerButton}>

          <Button
            title="Cadastrar"
            onPress={() => setTela('perfil')}
            color="#244D72"
          />

        </View>

        <View style={styles.alreadyAccount}>

          <Text style={styles.alreadyText}>
            Já tem uma conta?
          </Text>

          <Button
            title="adentrar"
            onPress={() => setTela('perfil')}
            color="#1269E8"
          />

        </View>

      </View>
    );
  }


  return (

    <View style={styles.profileScreen}>

      <View style={styles.profileContent}>

        <View style={styles.profileHeader}>


          <View style={styles.userInfo}>

            <View style={styles.avatar}>

              <Ionicons
                name="person"
                size={55}
                color="#55718F"
              />

            </View>

            <View style={styles.nameArea}>

              <Text style={styles.userName}>
                Valquiria
              </Text>

              <Text style={styles.userEmail}>
                lindona@gmail.com
              </Text>

            </View>

          </View>

          <Button
            title="⚙"
            onPress={() => {}}
            color="#174B7A"
          />

        </View>

        <View style={styles.counterCard}>

          <View style={styles.counterItem}>

            <View style={styles.redCircle}>

              <Ionicons
                name="lock-closed"
                size={12}
                color="#F32645"
              />

            </View>


            <Text style={styles.counterNumber}>
              2
            </Text>


            <Text style={styles.counterLabel}>
              Itens Perdidos
            </Text>

          </View>

          <View style={styles.counterDivider} />

          <View style={styles.counterItem}>

            <View style={styles.greenCircle}>

              <Ionicons
                name="location"
                size={17}
                color="#16B879"
              />

            </View>


            <Text style={styles.counterNumber}>
              3
            </Text>


            <Text style={styles.counterLabel}>
              Itens Encontrados
            </Text>

          </View>

        </View>

        <View style={styles.menuArea}>

          <View style={styles.menuButton}>

            <Button
              title="Meus itens"
              onPress={() => {}}
              color="#1269E8"
            />

          </View>

          <View style={styles.menuButton}>

            <Button
              title="Adicionar item encontrado"
              onPress={() => {}}
              color="#1269E8"
            />

          </View>

          <View style={styles.menuButton}>

            <Button
              title="Procurar itens perdidos"
              onPress={() => {}}
              color="#1269E8"
            />

          </View>

          <View style={styles.menuButton}>

            <Button
              title="Configuraçoes"
              onPress={() => {}}
              color="#1269E8"
            />

          </View>

          <View style={styles.menuButton}>

            <Button
              title="Ajuda"
              onPress={() => {}}
              color="#1269E8"
            />

          </View>


        </View>

      </View>

      <View style={styles.bottomBar}>

        <View style={styles.bottomItem}>

          <Button
            title="Inicio"
            onPress={() => setTela('perfil')}
            color="#244E7C"
          />

        </View>

        <View style={styles.bottomItem}>

          <Button
            title="Procurar"
            onPress={() => {}}
            color="#244E7C"
          />

        </View>

        <View style={styles.plusButton}>

          <Button
            title="+"
            onPress={() => {}}
            color="#FFFFFF"
          />

        </View>

        <View style={styles.bottomItem}>

          <Button
            title="Perfil"
            onPress={() => setTela('perfil')}
            color="#1269E8"
          />

        </View>


      </View>

    </View>
  );
}

const styles = StyleSheet.create({


  loginScreen: {
    flex: 1,
    backgroundColor: '#EAF7FF',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 42,
  },


  logoArea: {
    width: 145,
    height: 120,
    position: 'relative',
    marginTop: 5,
  },


  logoLocation: {
    position: 'absolute',
    left: 16,
    top: 4,
  },


  logoCircle: {
    position: 'absolute',
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: '#EAF7FF',
    top: 27,
    left: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },


  logoCircleInside: {
    width: 9,
    height: 9,
    borderRadius: 5,
    backgroundColor: '#0868E8',
  },


  searchIconLogo: {
    position: 'absolute',
    right: 2,
    bottom: 3,
  },


  mainTitle: {
    fontSize: 31,
    lineHeight: 34,
    fontWeight: '800',
    color: '#123F82',
    textAlign: 'center',
    marginTop: 2,
  },


  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    color: '#2B567B',
    textAlign: 'center',
    marginTop: 9,
    fontWeight: '500',
  },


  googleButton: {
    width: '100%',
    height: 53,
    justifyContent: 'center',
  },


  registerButton: {
    width: '100%',
    height: 53,
    justifyContent: 'center',
    marginTop: 10,
  },


  alreadyAccount: {
    flexDirection: 'row',
    marginTop: 19,
    alignItems: 'center',
  },


  alreadyText: {
    fontSize: 14,
    color: '#56718C',
  },


  profileScreen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },


  profileContent: {
    flex: 1,
    paddingHorizontal: 17,
    paddingTop: 20,
  },


  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },


  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },


  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#D9E5F4',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },


  nameArea: {
    marginLeft: 12,
  },


  userName: {
    fontSize: 17,
    fontWeight: '800',
    color: '#263E59',
  },


  userEmail: {
    fontSize: 13,
    color: '#6C8298',
    marginTop: 2,
  },


  counterCard: {
    height: 100,
    borderRadius: 14,
    backgroundColor: '#F5F8FC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderWidth: 1,
    borderColor: '#E5ECF4',
  },


  counterItem: {
    width: '43%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },


  redCircle: {
    position: 'absolute',
    width: 27,
    height: 27,
    borderRadius: 14,
    backgroundColor: '#FFE5E9',
    alignItems: 'center',
    justifyContent: 'center',
    top: -4,
    left: 10,
  },


  greenCircle: {
    position: 'absolute',
    width: 27,
    height: 27,
    borderRadius: 14,
    backgroundColor: '#DDF8ED',
    alignItems: 'center',
    justifyContent: 'center',
    top: -4,
    left: 5,
  },


  counterNumber: {
    fontSize: 23,
    fontWeight: '800',
    color: '#273F5B',
    marginTop: 7,
  },


  counterLabel: {
    fontSize: 11,
    color: '#667D92',
    marginTop: 1,
  },


  counterDivider: {
    width: 1,
    height: 58,
    backgroundColor: '#D7E0EA',
  },


  menuArea: {
    marginTop: 12,
  },


  menuButton: {
    height: 57,
    borderRadius: 11,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E3EAF2',
    justifyContent: 'center',
    paddingHorizontal: 14,
    marginBottom: 9,

    shadowColor: '#789',
    shadowOpacity: 0.06,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 1,
    },

    elevation: 1,
  },



  bottomBar: {
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#E5EAF0',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative',
  },


  bottomItem: {
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },


  plusButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#1269E8',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -25,

    elevation: 5,

    shadowColor: '#1269E8',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

});
