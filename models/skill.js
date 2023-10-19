const skills = [
    {id: 1, skill: 'JavaScript', proficiency: 'high'},
    {id: 2, skill: 'HTML', proficiency: 'high'},
    {id: 3, skill: 'CSS', proficiency: 'medium'},
    {id: 4, skill: 'Node.js', proficiency: 'low'},
    {id: 5, skill: 'Express', proficiency: 'low'}
];

module.exports = {
    getAll,
    getOne,
    create
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => id === skill.id);
}

function create(skill) {
    // Add the id to the skill object
    skill.id = skills.length + 1;
    // Assume we star with low proficiency when adding a new skill
    skill.proficiency = 'low';
    skills.push(skill);
    console.log(skills);
}