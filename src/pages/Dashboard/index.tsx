import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles';
import api from '../../services/api';

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    };
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [infoError, setInfoError] = useState('');
    const [repositories, setRepository] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories)
        } else {
            return [];
        }
    });

    useEffect(( ) => {
        localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories))
    }, [repositories]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if(!newRepo) {
            setInfoError('Digite o autor/nome do repositório');
            return
        }

        try {
            const response = await api.get(`repos/${newRepo}`);

            const repository = response.data;

            setRepository([...repositories, repository]);
            setInfoError('');
            setNewRepo('');

        } catch (err) {
            setInfoError('Digite um autor/nome válido')
        }

    }

    return (
        <>
            <a href="/">
                <img src={logoImg} alt="Github Explorer" width="215px" />
            </a>
            <Title>Explore repositórios no Github</Title>

            <Form hasError={!!infoError} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={e => setNewRepo(e.target.value)}
                    placeholder="Digite o nome do repositório"
                />
                <button type="submit">Pesquisar</button>
            </Form>
            { infoError && <Error>{infoError}</Error>}

            <Repositories>
                {repositories.map(repository => (
                    <a key={repository.full_name} href="teste">
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>
                        <FiChevronRight />
                    </a>
                ))}
            </Repositories>
        </>
    );
};

export default Dashboard;
