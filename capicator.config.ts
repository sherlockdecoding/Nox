import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nox.detective',
  appName: 'NOX',
  webDir: 'out',
  server: {
    url: 'https://nox-ai.vercel.app',
    cleartext: true
  }
};

export default config;
