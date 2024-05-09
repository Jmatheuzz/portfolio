import { CSSProperties, useEffect, useState } from "react"
import { darkTheme, getThemeSaved, lightTheme } from "../../services/theme"
import { ThemeType } from "../../types/theme-type"
import { MenuHamburger } from "../../components/general/MenuHamburger/MenuHamburger"
import './index.css'
import { HiOutlineTerminal, HiTerminal } from "react-icons/hi"
import { SlScreenDesktop } from "react-icons/sl"
import { IoInfinite } from "react-icons/io5"
import { MdMore, MdOutlineMore } from "react-icons/md"
import { FaArrowRightLong } from "react-icons/fa6"
import { BiShow } from "react-icons/bi"

type Style = {
  [key: string]: CSSProperties
} 
function App() {
  const [theme, setTheme] = useState <ThemeType>(darkTheme)

  useEffect(() => {
    setTheme(getThemeSaved() === 'light' ? darkTheme : darkTheme)

  }, [])
  
  return (
    <div style={{...styles.container, backgroundColor: theme.primary, color: theme.textPrimary}}>
      <MenuHamburger/>
      <div style={{...styles.around, ...styles.paddingTop, position: 'relative'}}>
        <h1 style={{
          fontFamily: '"Jersey 25", sans-serif',
          fontSize: '2.5rem',
          maxWidth: '30%',
          minWidth: '350px',
          textAlign: 'center'
        }}>
          Olá, seja bem vindo. Me chamo João Matheus e sou programador full stack
        </h1>
        <div className="container-cubo">

          <div className="cube">
            <div className="side front"></div>
            <div className="side back"></div>
            <div className="side top"></div>
            <div className="side bottom"></div>
            <div className="side left"></div>
            <div className="side right"></div>
            </div>
          </div>
      </div>

      <div style={{marginTop: '35%', height: '60vh', backgroundColor: '#BB9A6C', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '50%', marginTop:'3rem'}}>
          <h1 style={{
            fontSize: '2rem',
            textAlign: 'center'}}>Um pouco sobre mim</h1>
          <p style={{padding: '25vw', paddingBottom: 0, paddingTop: 0, textAlign: 'center', marginTop: '3rem', fontSize: '1.2rem', fontWeight: 500}}>
            Sou do Brasil e atuo à mais de 2 anos como programador full stack. No centro de tudo, está minha paixão pela tecnologia. Para mim, ser programador é mais do que escrever códigos e completar tarefas; é garantir qualidade e segurança para os usuários. Cada linha de código é uma chance de criar experiências digitais confiáveis e valiosas. Estou comprometido em construir um futuro digital onde excelência e segurança sejam prioridades em todas as interações.
          </p>
        </div>
      </div>
      <div style={{height: '80vh', width: '80%', backgroundColor:theme.primary, borderRadius: '2rem', margin: '0 auto', marginTop: '-10vh', boxShadow: `0 4px 4px 0 ${theme.three}55, 0 0 0 1px ${theme.three}55`, display: 'flex', justifyContent: 'space-between'}}>
        <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', borderRight: `1px solid ${theme.three}55`, width: '33%'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2vh'}}>
            <HiOutlineTerminal size={50} color="#FFF" />
            <h2 style={{fontWeight: 500}}>Backend</h2>

            <div style={{marginTop: '4rem', textAlign: 'center'}}>
              <h3 style={{fontWeight: 400, color: theme.three, fontSize: '1.1rem', marginBottom: '1rem'}}>Frameworks, libs e SGBDs</h3>
              <p>Spring boot</p>
              <p>Spring Security</p>
              <p>JPA</p>
              <p>Laravel</p>
              <p>Eloquent</p>
              <p>Nodejs</p>
              <p>Jest</p>
              <p>Postgres</p>
              <p>MongoDB</p>
              <p>Redis</p>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', borderRight: `1px solid ${theme.three}55`, width: '33%'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2vh'}}>
            <SlScreenDesktop  size={50} color="#FFF" />
            <h2 style={{fontWeight: 500}}>Frontend</h2>

            <div style={{marginTop: '4rem', textAlign: 'center'}}>
              <h3 style={{fontWeight: 400, color: theme.three, fontSize: '1.1rem', marginBottom: '1rem'}}>Frameworks e libs</h3>
              <p>React</p>
              <p>React Native</p>
              <p>MUI</p>
              <p>Redux</p>
              <p>React Context</p>
              <p>Styled Components</p>
              <p>Vuejs</p>
              <p>Pinia</p>
              <p>Axios</p>
            </div>
          </div>
        </div>
        <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', width: '33%'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2vh'}}>
            <MdOutlineMore size={50} color="#FFF" />
            <h2 style={{fontWeight: 500}}>Geral</h2>

            <div style={{marginTop: '4rem', textAlign: 'center'}}>
              <h3 style={{fontWeight: 400, color: theme.three, fontSize: '1.1rem', marginBottom: '1rem'}}>Outras tecnologias e conceitos</h3>
              <p>Git</p>
              <p>Git flow</p>
              <p>Clean architecture</p>
              <p>Clean code</p>
              <p>Docker</p>
              <p>RabbitMQ</p>
            </div>
          </div>
        </div>
      </div>



      <div style={{marginTop: '30vh', paddingBottom: '5vh'}}>
        <h1 style={{
              fontSize: '2rem',
              textAlign: 'center'}}>
                Meus Projetos
        </h1>
        <div style={{marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '10vw', paddingBottom: 0, paddingTop: '2rem', margin: '0 auto'}}>
          <div style={{width: '32%', minWidth: '310px', height: '30vh', minHeight: '120px', backgroundColor: '#BB9A6C', borderRadius: '1rem', display: 'flex', flexDirection:'column', justifyContent: 'space-around', alignItems: 'center', boxShadow: '1px 1px 3px 0.7px #fff'}}>
            <h3 style={{fontWeight: 700}}>Meu portfólio</h3>
            <p style={{textAlign: 'center', fontWeight: 500}}>Toda a construção do meu portfólio e automação do conteúdo</p>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.4rem', width: '100%'}}>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1rem 0.6rem 1rem', width: '30%', textAlign: 'center', borderRadius: '0.5rem', backgroundColor: '#FFF', color: `${theme.three}`}}>
                <p style={{fontWeight: 600, fontSize: '0.9rem'}}>Visitar site</p>
                <FaArrowRightLong />
              </div>
              <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1rem 0.6rem 1rem', width: '30%', textAlign: 'center', borderRadius: '0.5rem', backgroundColor: '#FFF', color: `${theme.three}`}}>
                <p style={{fontWeight: 600, fontSize: '0.9rem'}}>Preview</p>
                <BiShow size={22}/>
              </div>
            </div>
          </div>
          <div style={{width: '32%', minWidth: '310px', height: '30vh', minHeight: '120px', backgroundColor: theme.three, borderRadius: '1rem', boxShadow: '1px 1px 3px 0.7px #fff'}}></div>
          <div style={{width: '32%', minWidth: '310px', height: '30vh', minHeight: '120px', backgroundColor: theme.three, borderRadius: '1rem', boxShadow: '1px 1px 3px 0.7px #fff'}}></div>
          <div style={{width: '32%', minWidth: '310px', height: '30vh', minHeight: '120px', backgroundColor: theme.three, borderRadius: '1rem', boxShadow: '1px 1px 3px 0.7px #fff'}}></div>
          <div style={{width: '32%', minWidth: '310px', height: '30vh', minHeight: '120px', backgroundColor: theme.three, borderRadius: '1rem', boxShadow: '1px 1px 3px 0.7px #fff'}}></div>
        </div>
      </div>
    </div>
  )
}

const styles: Style = {
  container: {
    width: '100%'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  around: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  paddingTop: {
    paddingTop: '15rem'
  }
}
export default App
