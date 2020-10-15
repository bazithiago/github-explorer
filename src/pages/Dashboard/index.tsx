import React from 'react';
import logoImg from '../../assets/logo.svg'
import { Title, Form, Repositories } from './styles'
import { FiChevronRight } from 'react-icons/fi';

const Dashboard: React.FC = () => {
    return(
        <>
        <a href="/"><img src={logoImg} alt="Github Explorer" width='215px'/></a>
        <Title>Explore repositórios no Github</Title>

        <Form>
            <input placeholder="Digite o nome do repositório" onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Digite o nome do repositório"} />
            <button type="submit">Pesquisar</button>
        </Form>

        <Repositories>
            <a href="/">
                <img src="https://avatars3.githubusercontent.com/u/48968467?s=460&u=3cfaa8bb417d83f2e4517e2df692864b11091fbf&v=4" alt="Avatar"/>
                <div>
                    <strong>Nome do repositório</strong>
                    <p>No description, website, or topics provided.</p>
                </div>
                <FiChevronRight/>
            </a>

            <a href="/">
                <img src="https://avatars3.githubusercontent.com/u/48968467?s=460&u=3cfaa8bb417d83f2e4517e2df692864b11091fbf&v=4" alt="Avatar"/>
                <div>
                    <strong>Nome do repositório</strong>
                    <p>No description, website, or topics provided.</p>
                </div>
                <FiChevronRight/>
            </a>

            <a href="/">
                <img src="https://avatars3.githubusercontent.com/u/48968467?s=460&u=3cfaa8bb417d83f2e4517e2df692864b11091fbf&v=4" alt="Avatar"/>
                <div>
                    <strong>Nome do repositório</strong>
                    <p>No description, website, or topics provided.</p>
                </div>
                <FiChevronRight/>
            </a>

        </Repositories>
        </>
    );
}

export default Dashboard;
