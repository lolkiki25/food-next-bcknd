import { Schema, model, models } from "mongoose";

const FoodCategoriesSchema = new Schema(
    {
        categoryName: { type: String, required: true },
    },
    { timestamps: true,

     }
);

const FoodCategories = models.FoodCategories || model("FoodCategories", FoodCategoriesSchema);
export default FoodCategories;