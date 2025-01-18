import Layout from "@/components/layout/Layout"; 
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>  {/* Wrap with Redux Provider */}
      <Layout>  {/* This will render the Layout with children */}
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}