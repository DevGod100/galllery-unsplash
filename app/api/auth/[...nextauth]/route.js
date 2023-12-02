import NextAuth from "next-auth/next";
import UserModel from "@/models/userModel";
import GoogleProvider from 'next-auth/providers/google'
import connectDB from "@/utils/database";

connectDB()
export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    pages: {
        signIn: '/'
    },
    callbacks: {
        async signIn({ profile }){
            return await signInWithOAuth({profile});
        },
        async jwt({token}){
            const user = await getUserByEmail({ email: token.email })
            token.user = user;

            return token;
        },
        async({session, token}){
            session.user = token.user;
            return session;
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}

/*--------------------------------------*/

async function signInWithOAuth({ profile }){
    const user = await UserModel.exists({email: profile.email})
    if(user) return true;

    const newUser = new UserModel({
        name: profile.name,
        email: profile.email,
        avatar: profile.picture,
        //added  chatGPT
        _id: profile.public_id,
    }) 
    await newUser.save();

    return true
}

async function getUserByEmail({email}){
    // console.log('Profile:', profile); // Log the profile object to check its structure

    console.log("Searching for user with email:", email);

    const user = await UserModel.findOne({email})
    if(!user) throw new Error("email does not exist")

    console.log('User exists:', user); 
    const newUser = {
        ...user._doc,
        // _id: user._id.toString(),
        total_followers: user.followers.length,
        total_followings: user.followings.length,
        followers: [],
        followings: [],
        my_user: true
    }

    return newUser
}