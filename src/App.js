import React from 'react';
import './App.css';
import BigCard from './Components/BigCard/BigCard';
import SmallCard from './Components/SmallCard/SmallCard'
import ImageButton from './Components/ImagemButton/ImageButton'
import PageSection from './Components/PageSection/PageSection'

function App() {
  return (
    <div className="App">      
      <PageSection titulo="Dados Pessoais">
        <BigCard imagem="https://tekken7combo.kagewebsite.com/tpl/img/char/akuma.jpg" titulo="Mario Luz" texto="Olá, eu sou o Mario, Atualmente estudante de Desenvolvimento FullStack na Future4."/>
        <SmallCard email="marionetoluz@gmail.com" endereco="Frei Xisto Teuber 421 SP "/>
        <ImageButton nomeBotao="Ver mais" image="https://image.flaticon.com/icons/svg/32/32195.svg"/>
      </PageSection>

      <PageSection titulo="Experiências profissionais">
        <BigCard imagem="https://i.pinimg.com/originals/b6/d7/62/b6d762384f71cc6b2a70b47e8109f9d8.jpg" titulo="Aprendiz" texto="Estudante das Tecnicas Ansatsuken "/>
        <BigCard imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ6g_082S6Pogn0tjiRtKlZq5p_dSV9LhXolhh9gnVxReFT3gNX" titulo="Aprendiz" texto="Empresa Escola Future4!"/>
      </PageSection>

      <PageSection titulo="Minha redes sociais">
        <ImageButton nomeBotao="Facebook" image="https://image.flaticon.com/icons/svg/124/124010.svg"/>
      </PageSection>         
    </div>
  );
}

export default App;