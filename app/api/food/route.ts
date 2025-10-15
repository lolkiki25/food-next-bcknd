import { connectDB } from "@/lib/connectDb";
import Food from "@/lib/models/Food";
import FoodCategories from "@/lib/models/FoodCategories";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
    await connectDB();

    const food = await Food.create({
        foodName: "Pizza",
        price: 9.99,
        ingredients: "Cheese, Tomato Sauce, Pepperoni",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxMVIL5tWY7MfEvRDwYUMbPiODGF35YvbxOA&s",
        category: "68edc9def80819220c084f1e"
    });
    return NextResponse.json({ message: "Food Created", food });
};

export const GET = async (req:Request) => {
  await connectDB();
  FoodCategories;

  const foods = await Food.find().populate("category");

   return NextResponse.json({ message: "Food Created", foods });
};

export const PATCH = async () => {
  await connectDB();

  const foods = await Food.find();

  return NextResponse.json(foods);
};