const skills = [
    {id: 1, skill: 'JavaScript', proficiency: 'high'},
    {id: 2, skill: 'HTML', proficiency: 'high'},
    {id: 3, skill: 'CSS', proficiency: 'medium'},
    {id: 4, skill: 'Node.js', proficiency: 'low'},
    {id: 5, skill: 'Express', proficiency: 'low'}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => id === skill.id);
}