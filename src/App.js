import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { Link, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import ProfileSetup from './pages/ProfileSetup';
import MemberSignup from './pages/MemberSignup';
import TrainerSignup from './pages/TrainerSignup';
import TrainerAddition from './pages/TrainerAddition';

function App() {
  return (
    <div className="App">
        <nav>
          {/* 링크 설정 */}
          <ul>
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/memberSignup">회원용 회원가입</Link>
            </li>
            <li>
              <Link to="/trainerSignup">트레이너용 회원가입</Link>
            </li>
            <li>
              <Link to="/profileSetup">프로필 설정</Link>
            </li>
            <li>
              <Link to="/trainerAddition">트레이너 ID 추가</Link>
            </li>
          </ul>
        </nav>
        
        <Routes>
          {/* 각 경로에 컴포넌트 연결 */}
          <Route path="/login" element={<Login />} />
          <Route path="/memberSignup" element={<MemberSignup />} />
          <Route path="/trainerSignup" element={<TrainerSignup />} />
          <Route path="/profileSetup" element={<ProfileSetup />} />
          <Route path="/trainerAddition" element={<TrainerAddition/>} />
        </Routes>
    </div>
  );
}

export default App;
