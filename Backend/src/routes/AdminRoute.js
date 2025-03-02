import express from 'express';
import db from '../../utils/db.js';
import jwt from 'jsonwebtoken';
import dotenvenv from 'dotenv';

const router = express.Router();

router.post("/adminlogin", (req, res) => {
    const sql = "SELECT * FROM admin Where email = ? and password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) return res.json({ loginStatus: false, Error: "Query error" })
            if (result.length > 0) {
                const email = result[0].email;
                const token = jwt.sign(
                    { email: email, id: result[0].id}, 
                    process.env.JWT_SECRET_KEY, 
                    { expiresIn: "1d" }
                );
                res.cookie('token', token)
                    return res.json({ loginStatus: true });
            } else {
                return res.json({ loginStatus: false, Error:"wrong email or password" });
            }
    });
});

export { router as adminRouter };