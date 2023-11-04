NextJS Image Gallery using MongoDB(mongoose) + Nextjs Server Actions + Pure CSS + Next-Auth + Cloudinary

I. Main functions.

SignIn with OAuth ( Google )
Update Profile
Middleware to secure certain pages
Upload multiple photos
Get all public photos
Paginate by \_id and updatedAt
Search (photos + users)
Favorite photo
Follow user
Get all followings and followes by user
Get all public, private, favorite photos by user
Show modal photo by \_id
Download image
II. Implementation Guide.

Setup
npx create-next-app@latest
npm i mongoose next-auth cloudinary react-toastify
next.config.js
experimental: {
serverActions: true
},
images: {
domains: ['lh3.googleusercontent.com', 'res.cloudinary.com'],
}
layout.js (font Faustina, metadata, , react-toastify, google icons)
globals.css
Public Images
Setup Database
.env => MONGODB_URI
utils => database.js
models => userModel + photoModel
Next Auth
.env => NEXTAUTH_URL, NEXTAUTH_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET
openssl rand -base64 32
provider => AuthProvider.js
Nav component => Login, Logout Button
layout.js => AuthProvider, Nav
api/auth/[...nextauth]/route.js
Google Login
signInWithOAuth
getUserByEmail
utils => getServerUser.js
middleware basic (search, upload, profile)
NavBar Component

SearchForm Component

Header Component

Upload Page

Upload Form

handleInputFiles
validFiles
handleDrop
Optimization with React Memo
Upload Card

handleChangeTitle
validate
handleInputTags
handleRemoveTag
handleChangePublic
handleRemoveFile
Optimization with React Memo
handleUpload

count
handleUpload
uploadPhotos action
uploadPhotosToCloudinary
dynamicBlurDataURL
slugify
Loading Component

Home Page
Get all public photos ( getPhotos )

generatePhotosMatch
generatePhotosPipeline
Error component

Gallery component

PhotoCard Component

Optimization with React Memo

Download Image

Infinite Scrolling Pagination

next_cursor
LoadMore
generateMatch
generatePipeline
hooks => useInView()
Favorite Photo
handleFavoritePhoto
favoritePhoto Actions
Profile Info
GetUserById
formatNumber
Profile Edit
Edit Profile Modal
handleInputFiles
handleDrop
handleUpdateUser
updateUser actions
uploadToCloudinary
destroyFromCloudinary
Profile Follow
followUser
getUsers
generateUsersMatch
generateUsersPipeline
ListOfUsers Component
UserCard Component
handleFollow
Optimization with React Memo
Profile Menu
getPhotosCount (public, private, favorite)
generatePhotosMatch
generatePhotosCountPipeline
Profile Gallery
getPhotos
middleware (private, favorite)
Fix Error
Caching
LoadMore when "click to go back" on browser
Edit + Delete Photo
updatePhoto Actions
deletePhoto Actions
Search Page
Setup Search Mongodb Atlas
Search Menu
generateMatch (users, photos)

generatePipeline (users, photos)

getPhotosCount

getUsersCount

Search Gallery + Search Users

Photo Detail Page

Photo Component
handleDownloadImage
handleFavoritePhoto
Share Photo ( photo page )
getPhotoById
generateMetadata
Next, Prev Photo

Deploy Vercel

npm i sharp
Run build => Test
Upload to Github
Deploy to Vercel
Change domain in dynamicBlurData
Setup .env => NEXTAUTH_URL
Setup Google Cloud Console
..../api/auth/callback/google
📚 Materials/References:

Server Actions: https://youtu.be/RZpQ4MAHf1Y?si=84rLGD1CwGt24s23
NextAuth: https://youtu.be/fcySGWgRuu8?si=9MRVNYVnRAx5ujfj
Upload Photos: https://youtu.be/JggXd2n4qH4?si=qfyYMrGaLK6okqi1
SEO: https://youtu.be/xbsSuadHtZo?si=Ms7MCOymfUbHn8J-
Image Optimization: https://youtu.be/noR4Ben87Sw?si=cQcxqqoy4WdhfJk_
Infinite Scrolling Pagination: https://youtu.be/L94BfDhxbF8?si=5pJFya2KbrQifHI-
