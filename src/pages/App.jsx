import { Container } from './styles'
import { Input } from '../components/Input'
import { ItemRepo } from '../components/ItemRepo'
import { useState } from 'react'
import { Button } from '../components/Button';
import { api } from './services/api';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {

      const isExist = repos.find(repo => repo.id === data.id);

      if (!isExist) {
        setRepos(prev => [...prev, data]);
        setCurrentRepo('');
        return
      }
    }
    alert('Repositório não encontrado ou já adicionado');

  }

  const handleRemoveRepo = (id) => {
    setRepos(prev => prev.filter(repo => repo.id !== id));
  }

  return (
    <div className="App">
      <Container>
        <img src="https://raw.githubusercontent.com/digitalinnovationone/trilha-react-desafio-2/master/src/assets/github.png" width={72} height={72} alt="Logo do Github" />
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
        <Button onClick={handleSearchRepo} />
        {repos.map(repo => <ItemRepo 
        handleRemoveRepo={handleRemoveRepo}
        repo={repo}
        key={repo} 
        />)}
      </Container>
    </div>
  )
}
export default App
