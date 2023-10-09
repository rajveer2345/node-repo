const blog = require('../schema/blogSchema');


exports.add = async(req, res) => {
    try {

        // console.log(req.body);
        // const salt = await bcrypt.genSalt(10);
        // req.body.password = await bcrypt.hash(req.body.password, salt)
        const userData = new blog(req.body);
        await userData.save();
        res.json({ message: "blog added successfully", data: userData });
    } catch (err) {
        res.status(500).json(err)
    }
};
exports.getAll = async(req, res) => {


    try {

        let userData = await blog.find()

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
        const data = await blog.findById(req.params.id)
        res.json({ data: data })
    } catch (err) {
        res.status(500).json(err)
    }
}
exports.edit = async(req, res) => {
    try {


        const userData = await blog.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.json({ data: userData });
    } catch (err) {
        res.status(500).json(err)
    }
}
exports.delete = async(req, res) => {

    const userData = await blog.findByIdAndDelete(req.params.id);
    try {
        if (!userData) {
            res.status(400).json({ message: "user not found." });
        }
        res.status(200).json({ message: 'user deleted successfully' });
    } catch (err) {
        res.status(500).json(err)
    }


}

exports.getByUserId = async(req, res) => {
    try {
        const data = await blog.findOne({ userId: req.params.id })
        res.json({ data: data })
    } catch (err) {
        res.status(500).json(err)
    }
}