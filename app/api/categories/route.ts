import { connectDB } from "@/lib/connectDb";
import FoodCategories from "@/lib/models/FoodCategories";
import { NextResponse } from "next/server";

export const GET = async () => {
  await connectDB();

  const categories = await FoodCategories.find();

  return NextResponse.json(categories);
};

export const POST = async (request: Request) => {
    await connectDB();
    const body = await request.json();

    const categories = await FoodCategories.create({
        categoryName: body.categoryName,
    });


    return NextResponse.json({ message: "Category", categories });
};

export const DELETE = async () => {
  await connectDB();

  const categories = await FoodCategories.find();

  return NextResponse.json(categories);
};

export const PATCH = async () => {
  await connectDB();

  const categories = await FoodCategories.find();

  return NextResponse.json(categories);
};