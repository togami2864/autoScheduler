import React from 'react';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import styled from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <AppContainer>
          <Component {...pageProps} />
        </AppContainer>
      </RecoilRoot>
    </ChakraProvider>
  );
}

const AppContainer = styled.div`
  margin: 50px 150px;
`;

export default MyApp;
