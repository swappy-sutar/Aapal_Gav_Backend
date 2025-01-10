import { User } from "../Models/user.model.js";

const updateUserProfile = async (req, res) => {
  try {
    const {
      googleId,
      displayName,
      userImage,
      phoneNumber,
      dateOfBirth,
      occupation,
    } = req.body;

  
    if (
      !googleId ||
      (!displayName &&
        !userImage &&
        !phoneNumber &&
        !dateOfBirth &&
        !occupation)
    ) {
      return res.status(400).json({
        success: false,
        message: "Please provide a Google ID and at least one field to update.",
      });
    }

    const user = await User.findOne({ googleId: googleId });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (displayName) user.displayName = displayName;
    if (userImage) user.userImage = userImage;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (dateOfBirth) user.dateOfBirth = dateOfBirth;
    if (occupation) user.occupation = occupation;

   const updatedUser = await user.save();

    return res.status(200).json({
      success: true,
      message: "User profile updated successfully.",
      data: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to update user profile",
      error: error.message,
    });
  }
};

export { updateUserProfile };
