# Twenty Test
This repository includes test task based on child theme for default WP "twenty-twenty" theme

### Development
For start development upload and activate this theme. Open theme in editor. 
For install necessary packages open theme folder in terminal. Use command `cd app` for go to the react app directory and
run `yarn install` or `npm install`.
Create '.env' file based on included '.env.example' and add your WP installation domain.
All ready for development, run `yarn start` or `npm start` and browser sync open proxied page in browser.

### Production
For create production build use command `yarn build` or `npm build`. Be careful, the directory with build files is in 
gitignore for implementing CD on GitHub and avoiding conflicts during parallel development.
