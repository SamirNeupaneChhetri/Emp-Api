const SncUser = require('../models/dbModels')

const GetAlluser = async (req, res) => {
    try {
        const getemp = await SncUser.find({});
        res.status(200).json( getemp );
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Server Error.'});
    }
}

const addNewEmp = async (req, res) => {
    try {
        // Extract data from the request body
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ msg: 'Please provide name, email, and password' });
        }
        
        // Create a new employee document
        const newEmp = new SncUser({
            name,
            email,
            password
        });
        // Save the new employee to the database
        await newEmp.save();

        res.status(201).json(newEmp );

    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Server Error.'})
    }
}

// get emp by id
const getEmp = async (req, res) => {
    try {
        const { id:empId } = req.params;
        const emp = await SncUser.findById(empId);
        if(!emp){
            return res.status(404).json({message: "Emp not found In DB"});
        }
        res.status(200).json(emp);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Error fetching employee', error });
    }
}


const DeleteEmp = async (req, res) => {
    try {
        const { id: empId } = req.params; // Extract ID from URL parameters
        const delEmp = await SncUser.findByIdAndDelete(empId); // Correct method for deleting
        if (!delEmp) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json({ message: 'Employee deleted successfully', delEmp });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error deleting employee' });
    }
}


module.exports = {
    GetAlluser,
    addNewEmp,
    getEmp,
    DeleteEmp
}
