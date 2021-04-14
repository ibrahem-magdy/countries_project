const dev =process.env.NODE_ENV !== "production"

export const Server = dev ? "http://localhost:3000" : "https://yourWebsite.com"