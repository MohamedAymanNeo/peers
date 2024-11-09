export interface IAppConfig {
  env: {
    name: string
  },
  apiServer: IServers,
  socialLinks: IServers,
  
}

export interface IServers {
  peersUrl:string,
}

export interface ISocialLinks {
  tiktok:string,
  snapchat:string,
  instagram:string,
  twitter:string
}
