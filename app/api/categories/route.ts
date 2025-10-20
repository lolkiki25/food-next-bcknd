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

export const DELETE = async (request: Request) => {
  await connectDB();

  const body = await request.json();
  const { id } = body;

  if (!id) {
    return NextResponse.json({ message: "Category ID is required" }, { status: 400 });
  }

  const deletedCategory = await FoodCategories.findByIdAndDelete(id);

  if (!deletedCategory) {
    return NextResponse.json({ message: "Category not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Category deleted", deletedCategory });
};

export const PATCH = async (request: Request) => {
  await connectDB();

  const body = await request.json();
  const { id, categoryName } = body;

  if (!id) {
    return NextResponse.json({ message: "Category ID is required" }, { status: 400 });
  }

  const updatedCategory = await FoodCategories.findByIdAndUpdate(
    id,
    { categoryName },
    { new: true } // Шинэчилсэн объектыг буцаана
  );

  if (!updatedCategory) {
    return NextResponse.json({ message: "Category not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Category updated", updatedCategory });
};
