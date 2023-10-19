const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'All Developer Skills'
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Skill Details'
    });
}

function newSkill(req, res) {
    res.render('skills/new', {title: 'Add New Skill'});
}

function create(req, res) {
    // console.log(req.body);
    // The model is reponsible for creating data
    Skill.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/skills');
}