import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  FlatList,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([]);

  const handleAddProject = async () => {
    try {
      const response = api.post('projects', {
        title: `Novo Projeto ${Date.now()}`,
        owner: 'Lucas Kahl',
      });

      const project = response.data;

      setProjects([...projects, project]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    api.get('projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor="#323ccc"
        barStyle="light-content"
        hidden={false}
      />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({item}) => (
            <Text style={styles.project}>{item.title}</Text>
          )}
        />
        <TouchableOpacity
          onPress={handleAddProject}
          activeOpacity={0.7}
          style={styles.button}>
          <Text style={styles.buttonText}>Adicionar Projeto</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323ccc',
    padding: 20,
  },
  project: {
    color: '#FFF',
    fontSize: 20,
  },
  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
