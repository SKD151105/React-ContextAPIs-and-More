// import { useState } from 'react'
// import Newsletter from './NewsLetter.jsx'
// Newsletter heros section is used from tailwind component library.

import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <Newsletter /> */}
      <div className="form mx-auto my-8 p-4 bg-gray-100 rounded-lg shadow-md">
        <h3>Subscribe to Our Newsletter</h3>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </>
  );
}

export default App;
