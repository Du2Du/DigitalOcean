import styled from "styled-components";

export const StyledGlobal = styled.body`
  padding: 0;
  margin: 0;
  font-family: Inter;
  background: white;
  ul {
    list-style: none;
  }
  outline: 0;
`;

export const HeaderStyled = styled.header`
  width: 100%;
  #primary {
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid #e5e8ed;
    a {
      text-decoration: none;
      color: #5b6987;
      font-size: 14px;
      display: flex;
      align-items: center;
    }

    span {
      color: #031b4e;
      background: #00d7d2;
      padding: 2px 0;
      border-radius: 4px;
      margin: 0 8px 0 0;
      width: 37px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }

    ul {
      display: flex;

      li {
        margin: 0 10px;
      }
    }
  }

  #secondary {
    border-bottom: 1px solid #e5e8ed;

    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
    }

    a {
      padding: 9px;
      background: #f3f5f9;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 38px;
      height: 38px;
      border-radius: 4px;

      svg {
        color: #0069ff;
      }
    }

    #name {
      font-size: 22px;
      color: #99a1b3;
      padding: 0 0 0 16px;
      font-weight: bolder;
    }

    ul {
      display: flex;

      li {
        margin: 0 15px;
      }
    }

    #searchc {
      background: #f3f5f9;
      border: 1px solid #e3e3e6;
      display: flex;
      align-items: center;
      width: 213px;
      height: 36px;
      border-radius: 4px;
      font-size: 16px;
      color: #838486;
      margin: 0 30px;
    }

    button {
      background-color: #0069ff;
      font-family: "Inter-Medium", system-ui, -apple-system, BlinkMacSystemFont,
        Segoe UI, Roboto, Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 20px;
      border: 0;
      padding: 4px 15px;
      border-radius: 4px;
      color: #fff;
      font-weight: 600;
      align-items: center;
    }

    #logo:hover {
      background: #0069ff;
      transition: 300ms;
      svg {
        color: white;
      }
    }
  }

  #third {
    display: flex;
    justify-content: space-around;
    height: 52px;
    ul {
      display: flex;

      li a {
        text-decoration: none;
        color: #383737;
        margin: 0 15px;
      }
    }
  }
`;

export const SectionStyled = styled.section`
  #first {
    position: relative;
    color: white;
    padding-bottom: 40px;
  }
  .img_background {
    background-image: url("https://www.digitalocean.com/assets/community/community_hero-da9b609fe076da1123ffbd80d369b564017ef8080c4fe3511fe03a5a7ce675a3.jpg");
    height: 446px;
    min-width: 800px;
    width: 100%;
    background-repeat: no-repeat;
  }
  .copy {
    display: grid;
    justify-content: center;
    position: absolute;
    width: 100%;
    margin-top: 120px;
    top: 0;
    right: 0;

    span {
      font-size: 18px;
      font-weight: 500;
      text-align: center;
    }

    h2 {
      font-size: 40px;
      text-align: center;
    }
    p {
      font-size: 24px;
      text-align: center;
      max-width: 780px;
    }
  }
  #questions {
    position: absolute;
    color: black;
    background: white;
    width: 800px;
    box-shadow: 0 2px 10px #cac9c9;
    margin: 0 20%;
    padding: 40px;
    top: 80%;

    #text {
      display: flex;
      align-items: center;
      h5 {
        font-size: 20px;
      }

      p {
        font-size: 16px;
      }

      button {
        background: none;
        margin-left: 20px;
        color: #0069ff;
        border: 1px solid #0069ff;
        padding: 18px 25px;
        border-radius: 4px;
        font-size: 16px;
        font-weight: bolder;
        width: 168px;
      }
    }
  }
`;

export const Section2Styled = styled.section`
  #community {
    margin: 200px 50px 20px 16%;
    display: flex;
    height: 500px;
    flex-wrap: wrap;

    div {
      display: grid;
      width: 24%;
      margin: 0 25px;

      img {
        width: 270px;
        height: 170px;
      }
      small {
        margin: 20px 0;
        color: #0069ff;
        font-weight: 700;
      }
      h4 {
        color: #031b4e;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 10px;
      }
      p {
        color: #46536f;
        font-size: 18px;
      }
      a {
        text-decoration: none;
      }
    }
  }
`;
