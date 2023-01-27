import {
  darkTheme,
  lightTheme,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, bsc, optimism } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

const { chains, provider } = configureChains(
  [mainnet, polygon, bsc, optimism],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

interface IRainbowKit {
  children?: React.ReactNode;
}
export const RainbowKit: React.FC<IRainbowKit> = ({ children }) => (
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider
      chains={chains}
      theme={{
        lightMode: lightTheme(),
        darkMode: darkTheme({
          accentColor: '#4f46e5',
          accentColorForeground: 'rgb(191 203 227)',
        }),
      }}
    >
      {children}
    </RainbowKitProvider>
  </WagmiConfig>
);
