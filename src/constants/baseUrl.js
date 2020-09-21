const baseUrl = process.env.PRODUCTION
  ? ``
  : process.env.VERCEL_GITHUB_DEPLOYMENT
  ? `https://portal-next-git-${process.env.VERCEL_GITHUB_COMMIT_REF.replace(
      /\//g,
      '-'
      //this needs to change
    )}.conexon.vercel.app`
  : 'http://localhost:3000'

export default baseUrl
