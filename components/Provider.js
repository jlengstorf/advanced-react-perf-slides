import { Global, css } from "@emotion/core";

export default ({ children }) => (
  <div>
    <Global
      styles={css`
        #root img {
          max-width: 80%;
          margin: auto;
          display: block;
        }

        #root pre {
          max-width: 60%;
          margin: 20px auto;
          padding: 20px;
        }

        a {
          color: white;
          text-decoration: none;
          margin-right: 10px;
        }
      `}
    />
    {children}
    <footer
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        left: 0,
        color: "white",
        padding: 10,
        textAlign: "center"
      }}
    >
      <a href="https://twitter.com/TheGreenGreek">@TheGreenGreek</a>
      <a href="https://twitter.com/jlengstorf">@jlengstorf</a>
      <a href="https://twitter.com/NikkitaFTW">@NikkitaFTW</a>
    </footer>
  </div>
);
