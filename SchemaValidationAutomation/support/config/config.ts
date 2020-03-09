export default {
hostEnv: process.env.RISK_ROOT_URL || "https://int.gateway.integration-dev.digital.coveahosted.co.uk",
authUrl: process.env.AUTH_URL || "https://login.microsoftonline.com/fdb0e18a-61f3-49e2-891f-ce2def987b59/oauth2/token",
authClientId: process.env.CLIENT_ID || 'caff42d8-4290-4f85-a5ba-a75f423cca88'
};