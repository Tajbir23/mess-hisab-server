const notificationModel = require("../../models/notificationSchema");
const userModel = require("../../models/userSchema");

const updateWallet = async (req, res) => {
    const body = req.body;
    const { userId } = req.params;
    const { id, role } = req.user;

    console.log(body);

    // Check if role is admin or manager
    if (role !== "admin" && role !== "manager") {
        return res.status(403).send({ message: "Only admin or manager can update wallet" });
    }

    try {
        const incrementData = {};
        if (body.rice) {
            incrementData.rice = Number(body.rice); 
        }
        if(body.mealBalance){
            incrementData.mealBalance = Number(body.mealBalance);
        }
        
        
        const user = await userModel.findByIdAndUpdate(
            userId, 
            { $inc: incrementData },
            { new: true }
        );

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        console.log(user);

        
        const notification = await notificationModel.create({
            sender: id,
            message: `Updated ${body.rice ? `rice ${incrementData.rice} kg` : `meal balance ${incrementData.mealBalance} tk`} of ${user.name}`
        });
        await notification.save()
        
        res.status(200).send({ message: "Wallet updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Something went wrong" });
    }
};

module.exports = updateWallet;
