const user = require('../schema/userSchema');
const bcrypt = require("bcrypt");


exports.login = async(req, res) => {
    try {

        console.log(req.body);
        const salt = await bcrypt.genSalt(10);
        //req.body.password = await bcrypt.hash(req.body.password, salt);
        const userData = await user.findOne({ email: req.body.email });


        if (!userData) {
            res.json({ message: "User not found" });
            return;
        }

        const passwordMatch = await bcrypt.compare(req.body.password, userData.password);

        if (passwordMatch) {
            res.json({ message: "success", data: userData }); //jsonwebtoken
        } else {
            res.json({ message: "Username or password don't match" });
        }
    } catch (err) {
        res.status(500).json(err)

    }
};

exports.add = async(req, res) => {
    try {

        // console.log(req.body);
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt)
        const userData = new user(req.body);
        await userData.save();
        res.json({ message: "user added successfully", data: userData });
    } catch (err) {
        res.status(500).json(err)
    }
};
exports.getAll = async(req, res) => {


    try {

        let userData = await user.find()

        res.json(userData);
    } catch (error) {
        console.log(error);
        if (!error.status) {
            error.status = 500;
        }

        res.status(error.status).json({ message: error.message });
    }

}

exports.getById = async(req, res) => {
    try {
        const data = await user.findById(req.params.id)
        res.json({ data: data })
    } catch (err) {
        res.status(500).json(err)
    }
}
exports.edit = async(req, res) => {
    try {


        const userData = await user.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.json({ data: userData });
    } catch (err) {
        res.status(500).json(err)
    }
}
exports.delete = async(req, res) => {

    const userData = await user.findByIdAndDelete(req.params.id);
    try {
        if (!userData) {
            res.status(400).json({ message: "user not found." });
        }
        res.status(200).json({ message: 'user deleted successfully' });
    } catch (err) {
        res.status(500).json(err)
    }


}