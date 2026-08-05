const express = require('express');
const Controller = require('../controllers/userController');
const router = express.Router();

// Home Page
router.get('/', Controller.home);

// User Dashboard
router.get('/user_dashboard', Controller.user_dashboard);

// Profile
router.get('/profile', Controller.profile);

// Resume & ATS Analysis
router.get('/resume', Controller.resume);

// Settings
router.get('/settings', Controller.settings);

// Applications
router.get('/applications', Controller.applications);

// Interviews
router.get('/interviews', Controller.interviews);

// Jobs Listing
router.get('/jobs', Controller.jobs);

module.exports = router;