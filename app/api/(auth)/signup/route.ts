import { connectDB } from "@/lib/connectDb";
import User from "@/lib/models/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    await connectDB();

    const body = await request.json();

    const { password, email } = body;

    const hashedPassword = bcrypt.hashSync(password, 10);

    console.log("Password", password)
    console.log("Hashed Password", hashedPassword)

    const user = await User.create({
        email: email,
        password: hashedPassword,
        role: "USER"
    });
    return NextResponse.json({ message: "User Created", user })
};