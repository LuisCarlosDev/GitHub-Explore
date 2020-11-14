import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    ,

    <Repositories>
      <a href="teste">
        <img src="https://avatars2.githubusercontent.com/u/64341830?s=460&u=f804c15dcb7958e6651ab000093c6685c0ab7e45&v=4" alt="Luis Carlos" />

        <div>
          <strong>Happy-Backend</strong>
          <p>Backend developed on the 3rd of the next level week of Rocketseat.</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img src="https://avatars2.githubusercontent.com/u/64341830?s=460&u=f804c15dcb7958e6651ab000093c6685c0ab7e45&v=4" alt="Luis Carlos" />

        <div>
          <strong>Happy-Backend</strong>
          <p>Backend developed on the 3rd of the next level week of Rocketseat.</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img src="https://avatars2.githubusercontent.com/u/64341830?s=460&u=f804c15dcb7958e6651ab000093c6685c0ab7e45&v=4" alt="Luis Carlos" />

        <div>
          <strong>Happy-Backend</strong>
          <p>Backend developed on the 3rd of the next level week of Rocketseat.</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
