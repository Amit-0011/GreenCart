import User from "../models/User.js";

// Update User CartData : /api/cart/update

export const updateCart = async (req, res) => {
  try {
    // const {userId, cartItems} = req.body
    const userId = req.userId;
    const { cartItems } = req.body;
    await User.findByIdAndUpdate(userId, { cartItems });
    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};







// // debuged code

// import User from "../models/User.js"

// // Update User CartData : /api/cart/update
// export const updateCart = async (req, res) => {
//     try {
//         // Get userId from middleware (authUser sets req.userId)
//         const userId = req.userId;
//         const { cartItems } = req.body;

//         // Validate userId
//         if (!userId) {
//             return res.json({ success: false, message: "User not authenticated" });
//         }

//         // Validate cartItems
//         if (!cartItems || typeof cartItems !== 'object') {
//             return res.json({ success: false, message: "Invalid cart data" });
//         }

//         // Update user's cart
//         const updatedUser = await User.findByIdAndUpdate(
//             userId,
//             { cartItems },
//             { new: true } // Return updated document
//         );

//         if (!updatedUser) {
//             return res.json({ success: false, message: "User not found" });
//         }

//         res.json({ success: true, message: "Cart Updated" });

//     } catch (error) {
//         console.error("Error updating cart:", error.message);
//         res.json({ success: false, message: error.message });
//     }
// }
