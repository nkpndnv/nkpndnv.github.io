import { useEffect } from 'react';
import './index.css';
import avatar from './assets/avatar.jpg';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--x', `${x}%`);
      document.documentElement.style.setProperty('--y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div>
      <div className="bg-gradient" />
      <div className="bio-container">
        <img src={avatar} className="avatar" />
        <h1>salut, sunt nkpndnv.</h1>
        <p>scriu cod, prind vibe și mă bucur de viață. nu am timp de prostii, doar vibe bun. fiecare zi e o oportunitate de a face ceva fain</p>

        <ul className="stack-list">
          <li className="stack-item">react</li>
          <li className="stack-item">vue</li>
          <li className="stack-item">electron</li>
          <li className="stack-item">mongodb</li>
          <li className="stack-item">typescript</li>
        </ul>

        <div className="social-buttons">
          <a className="social-link" href="https://github.com/nkpndnv" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a className="social-link" href="https://t.me/nkpndnv" target="_blank">
            <i className="fab fa-telegram"></i>
          </a>
          <a className="social-link" href="https://discord.com/users/1151877721610276937" target="_blank">
            <i className="fab fa-discord"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
