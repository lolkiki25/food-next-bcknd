import { connectDB } from "@/lib/connectDb";
import User from "@/lib/models/User";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    await connectDB();

    const body = await request.json();

    const { password, email } = body;

    const user = await User.findOne({ email: email});
    if (!user) {
        return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    return NextResponse.json({ message: "User Created", user })
};