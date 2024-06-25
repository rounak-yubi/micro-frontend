import styled from "styled-components";

const Header = () => {
  const HeaderUIWrapper = styled.div`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background-color: #333;
      color: #fff;
    }

    .header .logo h1 {
      margin: 0;
    }

    .header nav ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
    }

    .header nav ul li {
      margin-left: 1rem;
    }

    .header nav ul li a {
      color: #fff;
      text-decoration: none;
    }
  `;
  return (
    <HeaderUIWrapper>
      <header className="header">
        <div className="logo">
          <h1>Your Application</h1>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#app1">App1</a>
            </li>
            <li>
              <a href="#app2">App2</a>
            </li>
          </ul>
        </nav>
      </header>
    </HeaderUIWrapper>
  );
};

export default Header;
