import "../styles/globals.css";

import { Amplify } from "aws-amplify";
import awsconfig from "../src/aws-exports";
import { ThemeProvider } from "next-themes";

Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
