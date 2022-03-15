### 1. Setup NX workspace
npx create-nx-workspace --preset=angular

```
✔ Workspace name (e.g., org name)     · gethapier
✔ Application name                    · gethapier
✔ Default stylesheet format           · scss
✔ Use Nx Cloud? (It's free and doesn't require registration.) · Yes
```

### 2. Create Github Repo
https://github.com/new
https://github.com/dereekb/gethapier

### 3. Setup Git Repo Locally

### 4. Add Origin and Push To Origin on Github

```
git remote add origin git@github.com:dereekb/gethapier.git
git push -u origin main
```

### 5. Create Project on Firebase
https://console.firebase.google.com/u/0/

### 6. Create Firestore Database
Start it in production mode. The url looks like: https://console.firebase.google.com/u/1/project/gethapier/firestore
This must be done before we attempt to initialize firebase in our project.

### 7. Initialize Firebase For Project
(Install firebase cli and login if not already logged in)
firebase init

type "a" to select all, then uncheck "Remote Config", "Realtime Database" (we're using Firestore), and "Hosting: Setup GitHub Action Deploys"

```
dereekb@dbMBP gethapier % firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /Users/dereekb/development/git/gethapier

? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Firestore: Configure security rules and indexes f
iles for Firestore, Functions: Configure a Cloud Functions directory and its files, Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys, Storage:
 Configure a security rules file for Cloud Storage, Emulators: Set up local emulators for Firebase products

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: gethapier (gethapier)
i  Using project gethapier (gethapier)

=== Firestore Setup

Firestore Security Rules allow you to define how and when to allow
requests. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore Rules? firestore.rules

Firestore indexes allow you to perform complex queries while
maintaining performance that scales with the size of the result
set. You can keep index definitions in your project directory
and publish them with firebase deploy.

? What file should be used for Firestore indexes? firestore.indexes.json

=== Functions Setup

A functions directory will be created in your project with sample code
pre-configured. Functions can be deployed with firebase deploy.

? What language would you like to use to write Cloud Functions? TypeScript
? Do you want to use ESLint to catch probable bugs and enforce style? Yes
✔  Wrote functions/package.json
✔  Wrote functions/.eslintrc.js
✔  Wrote functions/tsconfig.json
✔  Wrote functions/tsconfig.dev.json
✔  Wrote functions/src/index.ts
✔  Wrote functions/.gitignore
? Do you want to install dependencies with npm now? No

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? public
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? Set up automatic builds and deploys with GitHub? No
✔  Wrote public/index.html

=== Storage Setup

Firebase Storage Security Rules allow you to define how and when to allow
uploads and downloads. You can keep these rules in your project directory
and publish them with firebase deploy.

? What file should be used for Storage Rules? storage.rules
✔  Wrote storage.rules

=== Emulators Setup
? Which Firebase emulators do you want to set up? Press Space to select emulators, then Enter to confirm your choices. Authentication Emulator, Functions Emulator, Firestore Emulator, Hosting Emulator, Pub/Sub Emulator, Storage Emula
tor
? Which port do you want to use for the auth emulator? 9099
? Which port do you want to use for the functions emulator? 5001
? Which port do you want to use for the firestore emulator? 8080
? Which port do you want to use for the hosting emulator? 5000
? Which port do you want to use for the pubsub emulator? 8085
? Which port do you want to use for the storage emulator? 9199
? Would you like to enable the Emulator UI? Yes
? Which port do you want to use for the Emulator UI (leave empty to use any available port)? 
? Would you like to download the emulators now? No

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
```

Some additional changes need to be done after this:
1. Update hosting to replace "public" to be "dist/packages/gethapier"
2. Delete the public folder/directory
3. Delete the functions folder/directory
   
### 8. Initialize Functions App
```
npm i @nrwl/nest
npx nx generate @nrwl/nest:application gethapier-api
npm i firebase firebase-admin firebase-functions
npm i -D @firebase/rules-unit-testing firebase-functions-test firebase-tools
```
