import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <h1 className="main-title">歡迎來到PIN的自我介紹</h1>

        <h2 className="section-title">我的個人資料表</h2>
        <table className="profile-table">
          <thead>
            <tr>
              <th>姓名</th>
              <th>年齡</th>
              <th>城市</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>林品禎</td>
              <td>20</td>
              <td>新北</td>
            </tr>
          </tbody>
        </table>

        <h2 className="section-title">這是我最喜歡的狗狗圖片<em>(*´∀`)~♥</em></h2>
        <img src="狗.jpg" alt="範例圖片" className="dog-image"></img>
        <span className="caption">可愛吧</span>

        <div className="about-section">
          <h2 className="section-title">關於我:</h2>
          <p className="description">這是一份有關於課堂的自我介紹作業</p>

          <h2 className="section-title">我的興趣:</h2>
          <ul className="interests-list">
            <li>睡覺</li>
            <li>聽音樂</li>
          </ul>

          <h2 className="section-title">我推薦的歌曲:</h2>
          <ol className="songs-list">
            <li><a href="https://youtu.be/UrUJyKsLQeU?si=bkjMHeP5cUbOj1_Z">Toothbrush</a></li>
            <li><a href="https://youtu.be/vWaRiD5ym74?si=Vb5-qawUuAC798Fc">Cake By The Ocean</a></li>
          </ol>
        </div>

        <h3 className="contact-title">聯絡我</h3>
        <form action="/submit" method="post" className="contact-form">
          <div className="form-group">
            <label htmlFor="name">您的姓名:</label>
            <input type="text" id="name" name="name"></input>
          </div>

          <div className="form-group">
            <label htmlFor="email">您的電子郵件:</label>
            <input type="email" id="email" name="email"></input>
          </div>

          <div className="form-group">
            <input type="submit" value="提交" className="submit-button"></input>
          </div>
        </form>
      </div>
    </>
  )
}

export default App